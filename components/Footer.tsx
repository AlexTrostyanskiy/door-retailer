import React from "react";
import Image from "next/image";

type Props = {
};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="mt-24 md:mt-12" aria-labelledby="footer-heading">
      <hr />
      <Image
        className="h-8 mx-auto m-12 md:mt-16"
        src="//data.commercelayer.app/assets/logos/full-logo/black/commercelayer_full_logo_black.svg"
        alt="Commerce Layer Logo"
        loading="eager"
        width={200}
        height={50}
      />
    </footer>
  );
};

export default Footer;
