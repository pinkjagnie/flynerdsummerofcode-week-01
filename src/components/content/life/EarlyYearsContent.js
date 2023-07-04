import React from "react";
import Image from "next/image";

import { curie04Big } from "@/assets/index";
import styles from "@/styles/styles";

const EarlyYearsContent = ({ translate }) => {
  return(
    <>
      <div className={styles.basicTopPartOfPage}>
        <Image src={curie04Big} width={250} height={250} className="pb-4 lg:w-[300px] lg:h-[300px]" alt="Maria Skłodowska Curie" />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">{translate('Maria Skłodowska')}</em> {translate('early years short')}</p>
        </div>
      </div>
      
      <div>
        <p className={styles.basicParagraph}>{translate('early years first paragraph')}</p>
        <p className={styles.basicParagraph}>{translate('early years second paragraph')}</p>
        <p className={styles.basicParagraph}>{translate('early years third paragraph')}</p>
        <p className={styles.basicParagraph}>{translate('early years forth paragraph')}</p>
        <p className={styles.basicParagraph}>{translate('early years fifth paragraph')}</p>
      </div>
    </>
  )
};

export default EarlyYearsContent;