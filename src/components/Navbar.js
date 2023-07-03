import React from "react";
import Link from "next/link";

import MobileMenu from "./Navigation/MobileMenu";
import DesktopMenu from "./Navigation/DesktopMenu";

const Navbar = () => {
  return(
    <section className="fixed left-0 top-0 w-full right-0 h-[9vh] z-20 bg-[#d66382] text-zinc-100">
      <div className="flex justify-around">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-lg leading-[9vh] pr-[4px]"><Link href="/">olga krzysztofik</Link></h1>
          <h1 className="hidden md:visible md:block font-bold text-lg leading-[9vh]"><Link href="/"> - pink jagnie</Link></h1>
        </div>
        <MobileMenu />
        <DesktopMenu />
      </div>
    </section>
  )
};

export default Navbar;