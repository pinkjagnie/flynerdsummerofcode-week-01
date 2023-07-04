import React from "react";
import Link from "next/link";

const LanguageMenu = (props) => {
  return(
    <div className="fixed left-[calc(50%+20px)] top-[calc(4vh-15px)] min-[600px]:top-[calc(4vh-25px)] lg:top-[calc(4vh-20px)] flex items-center justify-center z-40">
      {props.locales.map((l) => {
        return(
          <Link key={l} href='/' locale={l} className="bg-[#f7bbcb] rounded-full w-[30px] h-[30px] min-[360px]:w-[35px] min-[360px]:h-[35px] min-[600px]:w-[50px] min-[600px]:h-[50px] lg:w-[40px] lg:h-[40px] mr-2 md:mr-4 text-center text-[#d66382] font-bold uppercase flex items-center justify-center">
            {l}
          </Link>
        )
      })}
    </div>
  )
};

export default LanguageMenu;