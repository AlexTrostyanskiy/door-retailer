import { Product } from "@typings/models";
import sanityApi from "@utils/sanity/api";
import ProductComponent from "@components/Product";

type Params = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: Params) {
  const product: Product = await sanityApi.getProduct(params.slug) as Product;

  return <ProductComponent product={product} />;
};

// export async function generateStaticParams() {
//   return sanityApi.getAllProductSlugs();
// }
