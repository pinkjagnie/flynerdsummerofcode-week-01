import React from "react";
import Image from "next/image";

import Links from "./Links/Links";

import { curie01Big } from "@/assets/index";

const Hero = () => {
  return(
    <section className="pt-16 min-[360px]:pt-24 min-[600px]:pt-36 lg:pt-28">
      <div className="lg:flex lg:w-[80%] lg:mx-auto lg:justify-around lg:items-center xl:w-[70%]">

        <div className="w-[95%] mx-auto flex justify-center items-center">
          <Image src={curie01Big} width={300} height={300} className="lg:w-[400px] lg:h-[400px]" alt="Maria Skłodowska Curie" />
        </div>

        <div className="w-[90%] min-[360px]:w-[80%] min-[600px]:w-[60%] lg:w-[70%] mx-auto pt-6 text-center">
          <h1 className="uppercase text-xl lg:text-4xl text-[#d66382] font-bold">Poznaj lepiej Marię Skłodowską-Curie</h1>
          <h2 className="pt-2 min-[600px]:pt-4 text-stone-800 lg:text-2xl">pierwszą kobietę uhonorowaną Nagrodą Nobla</h2>
        </div>

      </div>

      <Links />

    </section>
  )
};

export default Hero;