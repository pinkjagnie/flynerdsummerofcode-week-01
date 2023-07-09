import React from "react";

import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/science.json";

import styles from "@/styles/styles";

const NobelPrizesContent = ({ translate }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <h1 className={styles.pageTitle}>{translate("pageTitle")}</h1>
      <div className={styles.basicTopPartOfPage}>
        <Lottie options={defaultOptions} height={250} width={250} />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}>
            <em className="text-[#d66382] font-bold uppercase">
              {translate("In 1903, Maria and Pierre Curie")}
            </em>{" "}
            {translate("nobel prizes short")}
          </p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>
          {translate("nobel prizes first paragraph")}
        </p>
        <p className={styles.basicParagraph}>
          {translate("nobel prizes second paragraph")}
        </p>
        <p className={styles.basicParagraph}>
          {translate("nobel prizes third paragraph")}
        </p>
        <p className={styles.basicParagraph}>
          {translate("nobel prizes fourth paragraph")}
        </p>
        <p className={styles.basicParagraph}>
          {translate("nobel prizes fifth paragraph")}
        </p>
      </div>
    </>
  );
};

export default NobelPrizesContent;
