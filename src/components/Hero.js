import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Links from "./Links/Links";

import { curie01Big } from "@/assets/index";
import styles from "@/styles/styles";

const Hero = ({ translate }) => {
  return(
    <section className={styles.sectionPaddingTop}>
      <div className="lg:flex lg:w-[80%] lg:mx-auto lg:justify-around lg:items-center xl:w-[70%]">

        <div className="w-[95%] mx-auto flex justify-center items-center">
          <Image src={curie01Big} width={300} height={300} className="lg:w-[400px] lg:h-[400px]" alt="Maria Skłodowska Curie" />
        </div>

        <div className="w-[90%] min-[360px]:w-[80%] min-[600px]:w-[60%] lg:w-[70%] mx-auto pt-6 text-center">
          <h1 className="uppercase text-xl lg:text-4xl text-[#d66382] font-bold">{translate('Get to know Maria Skłodowska-Curie better')}</h1>
          <h2 className="pt-2 min-[600px]:pt-4 text-stone-800 lg:text-2xl">{translate('the first woman to receive the Nobel Prize')}</h2>
        </div>

      </div>

      <Links />

    </section>
  )
};

export default Hero;