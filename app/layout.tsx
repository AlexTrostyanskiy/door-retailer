import React, { PropsWithChildren } from "react";
import { Manrope } from "next/font/google";
import { Metadata, Viewport } from "next";
import { baseUrl } from "@utils/config";

import "../styles/globals.css";

const title = process.env.NEXT_PUBLIC_SITE_NAME || "Commerce Layer Sanity Template";
const description =
  "A multi-country ecommerce template built with Commerce Layer, Next.js, Sanity studio, and deployed to Netlify.";
const keywords =
  "Commerce Layer, Reactjs, Nextjs, Sanity Studio, Netlify, Nextjs Template, Sanity Template, Sanity Ecommerce Template, Ecommerce Template, Ecommerce, Mobile Ecommerce, Mobile Ecommerce Site, Sanity Ecommerce Site, Nextjs Ecommerce Site ";
const url = process.env.NEXT_PUBLIC_SITE_URL || "https://commercelayer-sanity-template.netlify.app";
const ogImage = "/preview.jpg";
const favicon = "//data.commercelayer.app/assets/images/favicons/favicon.ico";
const touchIcon = "/seo/ios/192.png";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin", "cyrillic"]
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <link rel="apple-touch-icon" sizes="192x192" href={touchIcon} />
      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-config" content="none" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-tap-highlight" content="yes" />

      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
    </head>
    <body className={manrope.className}>
    {children}
    </body>
    </html>
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

export const viewport: Viewport = {
  themeColor: "#000000"
};
