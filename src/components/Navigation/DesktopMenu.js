import React from "react";
import Link from "next/link";

import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

const DesktopMenu = () => {
  return(
    <div className="hidden lg:flex lg:items-center lg:justify-between lg:block lg:visible">
      <Link href="https://instagram.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className="px-2"><SiInstagram size={20} /></Link>
      <Link href="https://www.linkedin.com/in/olga-krzysztofik/" target="_blank" rel="noopener noreferrer" className="px-2"><SiLinkedin size={20} /></Link>
      <Link href="https://github.com/pinkjagnie" target="_blank" rel="noopener noreferrer" className="px-2"><SiGithub size={20} /></Link>
      {/* <Link href="/spolecznosc-kobiet-w-it" className="pl-4 pr-2 font-semibold">👩🏻‍💻 kobiece IT</Link> */}
    </div>
  )
};

export default DesktopMenu;