import React from "react";

import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/chemistry.json";

import styles from "@/styles/styles";

const LifeInParisContent = ({ translate }) => {
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
              {translate("Maria Skłodowska")}
            </em>{" "}
            {translate("life in paris short")}
          </p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>
          {translate("life in paris first paragraph")}
        </p>
        <p className={styles.basicParagraph}>
          {translate("life in paris second paragraph")}
        </p>
      </div>
    </>
  );
};

export default LifeInParisContent;
