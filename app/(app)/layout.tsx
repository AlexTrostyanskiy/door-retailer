import React, { PropsWithChildren } from "react";
import { Metadata } from "next";
import { baseUrl } from "@utils/config";
import Header from "@components/Header";
import Footer from "@components/Footer";

const title = process.env.NEXT_PUBLIC_SITE_NAME || "Commerce Layer Sanity Template";
const description =
  "A multi-country ecommerce template built with Commerce Layer, Next.js, Sanity studio, and deployed to Netlify.";
const keywords =
  "Commerce Layer, Reactjs, Nextjs, Sanity Studio, Netlify, Nextjs Template, Sanity Template, Sanity Ecommerce Template, Ecommerce Template, Ecommerce, Mobile Ecommerce, Mobile Ecommerce Site, Sanity Ecommerce Site, Nextjs Ecommerce Site ";
const url = process.env.NEXT_PUBLIC_SITE_URL || "https://commercelayer-sanity-template.netlify.app";
const ogImage = "/preview.jpg";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header className="sticky inset-x-0 top-0 z-20" />

      {children}

      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: title,
  description: description,
  openGraph: {
    images: [ogImage],
    title: title,
    description: description,
    url: url
  },
  keywords: keywords,
  manifest: "/manifest.json"
};
