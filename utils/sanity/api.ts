import { createClient, groq } from "next-sanity";
import _ from "lodash";
import { Product, Taxon, Taxonomy, Variant } from "@typings/models";
import { SanityProduct, SanityTaxon, SanityTaxonomy, SanityVariant } from "./typings";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
  useCdn: process.env.NODE_ENV === "production" // `false` to ensure fresh data
});

const parsingVariant = (variants: SanityVariant[]): Variant[] => {
  return !_.isEmpty(variants)
    ? variants.map((variant) => {
        const localization = {
          name: variant?.name || "",
          size: { name: variant?.size?.name || "" }
        };
        return { ...variant, ...localization };
      })
    : [];
};

const parsingProduct = (
  products: SanityProduct[] | SanityProduct,
): Product[] | Product => {
  return _.isArray(products)
    ? products.map((product) => {
        const localization = {
          name: product?.name,
          slug: product?.slug.current,
          description: product?.description,
          variants: parsingVariant(product?.variants) as Variant[]
        };
        return { ...product, ...localization };
      })
    : {
        ...products,
        name: products?.name,
        slug: products?.slug["en_us"].current,
        description: products?.description,
        variants: parsingVariant(products?.variants) as Variant[]
      };
};

const parsingTaxon = (taxons: SanityTaxon[]): Taxon[] => {
  return taxons.map((taxon) => {
    const localization = {
      name: taxon?.name,
      label: taxon?.label,
      products: taxon?.products ? (parsingProduct(taxon.products) as Product[]) : []
    };
    return { ...taxon, ...localization };
  });
};

const parsingTaxonomies = (taxonomies: SanityTaxonomy[]): Taxonomy[] => {
  const items = taxonomies.map((taxonomy) => {
    const localization = {
      name: taxonomy?.name,
      label: taxonomy?.label,
      taxons: parsingTaxon(taxonomy?.taxons)
    };
    return { ...taxonomy, ...localization };
  });
  return items;
};

const getAllTaxonomies = async () => {
  const query = groq`*[_type == "catalog"]{
    'taxonomies': taxonomies[]->{
      label,
      name,
      'taxons': taxons[]->{
        label,
        name,
        'products': products[]->{
          name,
          description,
          reference,
          slug,
          'images': images[]->{
            'url': images.asset->url
          },
          'variants': variants[]->{
            code,
            name,
            size->,
          }    
        }
      }
    }
  }  | order(name asc)`;
  const items: any[] = await client.fetch(query);
  return parsingTaxonomies(_.first(items)?.taxonomies);
};

const getProduct = async (slug: string) => {
  const query = groq`*[_type == "product" && slug.en_us.current == '${slug}']{
    name,
    description,
    reference,
    slug,
    'images': images[]->{
      'url': images.asset->url
    },
    'variants': variants[]->{
      label,
      code,
      name,
      size->,
      'images': images[]->{
        'url': images.asset->url
      }
    }    
  }`;
  const item: any[] = await client.fetch(query);
  return parsingProduct(_.first(item));
};

const getAllProductSlugs = async () => {
  const query = groq`*[_type == "product"]{
    slug: slug.current,
  }`;
  return await client.fetch(query);
};

const sanityApi = {
  getAllTaxonomies,
  getAllProductSlugs,
  getProduct
};

export default sanityApi;
