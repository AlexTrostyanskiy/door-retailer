import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout: React.FC<Props> = ({ children = [] }) => {
  return (
    <>
      <div className="relative bg-ashy overflow-hidden">
        <div className="relative pt-5 pb-10 px-5 lg:px-0 lg:pb-16 max-w-screen-lg mx-auto">
          <Header />
        </div>

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
