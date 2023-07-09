import React from "react";
import Image from "next/image";

import { curie04Big } from "@/assets/index";
import styles from "@/styles/styles";

const AwardsContent = ({ translate }) => {
  return (
    <>
      <h1 className={styles.pageTitle}>{translate("pageTitle")}</h1>
      <div className={styles.basicTopPartOfPage}>
        <Image
          src={curie04Big}
          width={250}
          height={250}
          className="pb-4 lg:w-[300px] lg:h-[300px]"
          alt="Maria Skłodowska Curie"
        />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}>
            <em className="text-[#d66382] font-bold uppercase">
              {translate("Maria Skłodowska-Curie")}{" "}
            </em>{" "}
            {translate("awards short")}
          </p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>
          {translate("awards first paragraph")}
        </p>
        <p className={`${styles.basicParagraph} pl-6`}>
          {translate("awards second paragraph")}
        </p>
        <p className={`${styles.basicParagraph} pl-6`}>
          {translate("awards third paragraph")}
        </p>
        <p className={`${styles.basicParagraph} pl-6`}>
          {translate("awards fourth paragraph")}
        </p>
        <p className={`${styles.basicParagraph} pl-6`}>
          {translate("awards fifth paragraph")}
        </p>
        <p className={`${styles.basicParagraph} pl-6`}>
          {translate("awards sixth paragraph")}
        </p>
        <p className={styles.basicParagraph}>
          {translate("awards seventh paragraph")}{" "}
        </p>
      </div>
    </>
  );
};

export default AwardsContent;
