import React from "react";

import Lottie from 'react-lottie';
import animationData from "../../../assets/lotties/microscope-ib.json";

import styles from "@/styles/styles";

const NewElementsContent = ({ translate }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return(
    <>
      <div className={styles.basicTopPartOfPage}>
        <Lottie options={defaultOptions} height={250} width={250} />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">{translate('In 1896, Henri Becquerel')}</em> {translate('new elements short first')}<sub>2</sub>[UO<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>](H<sub>2</sub>O)<sub>2</sub>){translate('new elements short second')}</p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>{translate('new elements first paragraph')}</p>
        <p className={styles.basicParagraph}>{translate('new elements second paragraph')} </p>
        <p className={styles.basicParagraph}>{translate('new elements third paragraph first part')} [Cu(UO<sub>2</sub>)<sub>2</sub>(PO<sub>4</sub>)<sub>2</sub>·(8–12)H<sub>2</sub>O] {translate('new elements third paragraph second part')} </p>
        <p className={styles.basicParagraph}>{translate('new elements forth paragraph first part')} (O<sub>2</sub>) {translate('new elements forth paragraph second part')} (O<sub>3</sub>). {translate('new elements forth paragraph third part')}</p>
        <p className={styles.basicParagraph}>{translate('new elements fifth paragraph')}</p>
        <p className={styles.basicParagraph}>{translate('new elements sixth paragraph')}</p>
      </div>
    </>
  )
};

export default NewElementsContent;