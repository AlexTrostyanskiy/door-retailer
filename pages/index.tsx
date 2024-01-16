import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import SEOHead from "@components/SEO";
import Hero from "@components/Hero";
import Taxonomies from "@components/Taxonomies";
import React from "react";
import sanityApi from "@utils/sanity/api";
import { Taxonomy } from "@typings/models";
import Layout from "@components/Layout";

type Props = {
  taxonomies: Taxonomy[];
};

const IndexPage: NextPage<Props> = ({ taxonomies }) => {
  return (
    <>
      <SEOHead />
      <div className="m-16 mx-auto container">
        <Layout>
          <Hero />
          <Taxonomies taxonomies={taxonomies} />
        </Layout>
      </div>
      <hr />
      <Image
        className="h-8 mx-auto m-12 md:mt-16"
        src="//data.commercelayer.app/assets/logos/full-logo/black/commercelayer_full_logo_black.svg"
        alt="Commerce Layer Logo"
        loading="eager"
        width={200}
        height={50}
      />
      <br />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const taxonomies = await sanityApi.getAllTaxonomies();

  return {
    props: {
      taxonomies
    },
    revalidate: 60
  };
};

export default IndexPage;
