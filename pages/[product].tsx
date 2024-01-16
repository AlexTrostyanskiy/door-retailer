import _ from "lodash";
import React, { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Price, PricesContainer, AddToCartButton } from "@commercelayer/react-components";
import locale from "@locale/index";
import { Product } from "@typings/models";
import { parseImg } from "@utils/parser";
import sanityApi from "@utils/sanity/api";
import Layout from "@components/Layout";

type Props = {
  product: Product;
};

const ProductPage: React.FC<Props> = ({ product }) => {
  const imgUrl = parseImg(_.first(product?.images)?.url as string);
  const firstVariantCode = _.first(product?.variants)?.code as string;
  const variantOptions = product?.variants?.map((variant) => {
    return {
      label: variant.size.name,
      code: variant.code,
      lineItem: {
        name: product.name,
        imageUrl: _.first(variant.images)?.url
      }
    };
  });

  const [selectedVariant, setSelectedVariant] = useState<string>();

  useEffect(() => {
    setSelectedVariant(firstVariantCode);
  }, [firstVariantCode]);

  return !product ? null : (
    <Layout
      pageTitle={product.name}
    >
      <div className="container mx-auto max-w-screen-lg px-5 lg:px-0 text-sm text-gray-700">
        <Link
          href={{
            pathname: "/"
          }}
        >
          <Image
            title="back"
            src="/back.svg"
            className="w-5 h-5 inline-block"
            alt="Back to previous page SVG icon"
            width={20}
            height={20}
          />
          <p className="ml-2 hover:underline inline-block align-middle">
            {locale.backToAllProducts}
          </p>
        </Link>
      </div>
      <div className="container mx-auto max-w-screen-lg py-10 lg:py-16 flex flex-row">
        <div className="flex flex-wrap sm:flex-nowrap sm:space-x-5 px-5 lg:px-0">
          <div className="w-full pb-5 lg:pb-0">
            <Image
              alt={product.name}
              className="w-full object-center rounded border border-gray-200"
              src={imgUrl}
              width={500}
              height={500}
            />
          </div>
          <div className="w-full">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND</h2>
            <p className="text-gray-900 text-3xl title-font font-medium my-3">{product.name}</p>
            <p className="text-gray-600 text-xl title-font font-medium my-3">{selectedVariant}</p>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex items-center border-b-2 border-gray-200 py-5">
              <div className="flex items-center">
                <div className="relative" data-children-count="1">
                  <select
                    className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-blue-500 text-base pl-3 pr-10"
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                  >
                    {variantOptions?.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                <PricesContainer>
                  <Price
                    skuCode={selectedVariant}
                    className="text-indigo-600 mr-1"
                    compareClassName="text-gray-500 line-through text-lg"
                  />
                </PricesContainer>
              </span>
              <AddToCartButton
                skuCode={selectedVariant}
                label={locale.addToCart as string}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm md:text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const slug = params?.product;
  const product = await sanityApi.getProduct(slug);

  return {
    props: {
      product
    },
    revalidate: 60
  };
};

export default ProductPage;
