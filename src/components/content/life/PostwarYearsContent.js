import React from "react";
import Image from "next/image";

import { curie03Big } from "@/assets/index";
import styles from "@/styles/styles";

const PostwarYearsContent = ({ translate }) => {
  return (
    <>
      <h1 className={styles.pageTitle}>{translate("pageTitle")}</h1>
      <div className={styles.basicTopPartOfPage}>
        <Image
          src={curie03Big}
          width={250}
          height={250}
          className="pb-4 lg:w-[300px] lg:h-[300px]"
          alt="Maria Skłodowska Curie"
        />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}>
            <em className="text-[#d66382] font-bold uppercase">
              {translate("In May 1921")}
            </em>{" "}
            {translate("postwar years short")}
          </p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>
          {translate("postwar years paragraph")}{" "}
        </p>
      </div>
    </>
  );
};

export default PostwarYearsContent;
