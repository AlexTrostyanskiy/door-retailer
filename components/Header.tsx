import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PropsWithClassName } from "@typings/components";

export default function Header(props: PropsWithClassName) {
  return (
    <div className={`bg-slate-50 border-b ${props.className}`}>
      <div className="container mx-auto py-5 px-5 lg:px-0">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Header navigation"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/" passHref>
                <span className="sr-only">Commerce Layer</span>
                <Image
                  className="h-8 w-auto"
                  src="//data.commercelayer.app/assets/logos/full-logo/black/commercelayer_full_logo_black.svg"
                  alt="Commerce Layer Logo"
                  loading="eager"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          </div>
        </nav>
      </div>
    </div>
  );
};
