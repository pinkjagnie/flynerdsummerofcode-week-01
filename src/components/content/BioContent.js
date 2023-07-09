import React from "react";
import Image from "next/image";

import { curie02Big } from "@/assets/index";
import styles from "@/styles/styles";

const BioContent = ({ translate }) => {
  return (
    <>
      <div className={styles.basicTopPartOfPage}>
        <Image
          src={curie02Big}
          width={250}
          height={250}
          className="pb-4 lg:w-[300px] lg:h-[300px]"
          alt="Maria Skłodowska Curie"
        />
        <div className="lg:w-[90%]">
          <h1 className="uppercase text-xl lg:text-4xl text-[#d66382] font-bold text-center">
            {translate("Maria Sklodowska-Curie")}
          </h1>
          <p className={styles.basicParagraph}>{translate("short bio")}</p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>
          {translate("bio first paragraph")}
        </p>
        <p className={styles.basicParagraph}>
          {translate("bio second paragraph")}
        </p>
        <p className={styles.basicParagraph}>
          {translate("bio third paragraph")}
        </p>
      </div>
    </>
  );
};

export default BioContent;
