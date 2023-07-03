import React, { useState } from "react";
import Link from "next/link";

import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <CgMenuRound className="absolute w-[44px] h-[44px] min-[360px]:w-[50px] min-[360px]:h-[50px] right-[8%] top-[calc(50%-22px)] min-[360px]:top-[calc(50%-25px)] cursor-pointer" onClick={() => setOpenMenu(true)} />;

  const closeIcon = <CgCloseO className="absolute w-[44px] h-[44px] min-[360px]:w-[50px] min-[360px]:h-[50px] right-[8%] top-[calc(50%-22px)] min-[360px]:top-[calc(50%-25px)] z-40 cursor-pointer" onClick={() => setOpenMenu(false)} />;

  const closeMenu = () => setOpenMenu(false);

  return(
    <div className="md:visible lg:hidden">
      {openMenu ? closeIcon : hamburgerIcon}
      {openMenu &&
        <div className={openMenu ? 'absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#d66382] text-center ease-in duration-300'
        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#d66382] text-center ease-in duration-300'}>
          <Link href="https://instagram.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className="px-2 -mt-28 md:-mt-[300px] pb-4" onClick={() => closeMenu()}>
            <SiInstagram size={36} className="inline" />
            <p className="font-semibold inline pl-2 text-xl md:text-2xl md:leading-[36px]"> wpadnij na Insta</p>
          </Link>
          <Link href="https://www.linkedin.com/in/olga-krzysztofik/" target="_blank" rel="noopener noreferrer" className="px-2 py-4" onClick={() => closeMenu()}>
            <SiLinkedin size={36} className="inline" />
            <p className="font-semibold inline pl-2 text-xl md:text-2xl md:leading-[36px]"> zobacz Linkedina</p>
          </Link>
          <Link href="https://github.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className="px-2 py-4" onClick={() => closeMenu()}>
            <SiGithub size={36} className="inline" /> 
            <p className="font-semibold inline pl-2 text-xl md:text-2xl md:leading-[36px]"> zajrzyj na Githuba</p>
          </Link>
          {/* <Link href="/spolecznosc-kobiet-w-it" className="px-2 py-4" onClick={() => closeMenu()}>
            <p className="inline text-2xl">👩🏻‍💻</p>
            <p className="font-semibold inline pl-2 text-xl md:text-2xl md:leading-[36px]"> kobiece IT</p>
          </Link> */}
        </div>
      }
    </div>
  )
};

export default MobileMenu;