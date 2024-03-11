import React, { PropsWithChildren } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header className="sticky inset-x-0 top-0 z-20" />

      {children}

      <Footer />
    </>
  );
}
