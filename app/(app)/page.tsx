import Hero from "@components/Hero";
import React from "react";
import sanityApi from "@utils/sanity/api";
import Catalog from "@components/Catalog";

export default async function Page() {
  const taxonomies = await sanityApi.getAllTaxonomies();
  return (
    <>
      <Hero className="border-b bg-slate-100"/>
      <Catalog taxonomies={taxonomies} />
    </>
  );
};
