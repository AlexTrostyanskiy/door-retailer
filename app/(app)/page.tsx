import Hero from "@components/Hero";
import React from "react";
import sanityApi from "@utils/sanity/api";
import Catalog from "@components/Catalog";

export default async function Page() {
  const taxonomies = await sanityApi.getAllTaxonomies();
  return (
    <div className="m-16 mx-auto container">
      <Hero />
      <Catalog taxonomies={taxonomies} />
    </div>
  );
};
