import React from "react";
import Image from "next/image";

import { rocketRide } from "@/assets/index";
import styles from "@/styles/styles";

const QuizPageTitle = ({ translate }) => {
  return (
    <>
      <div className="w-[90%] mx-auto uppercase text-[#d66382] font-bold text-center">
        <h1 className="text-xl lg:text-4xl">
          {translate("Nice to see you on the quiz page")}
        </h1>
        <h2 className="pt-2 text-lg lg:text-3xl">
          {translate("about Maria Sklodowska-Curie")}
        </h2>
      </div>
      <div className="w-[90%] mx-auto py-4 text-center">
        <p className="pb-2">
          {translate("Are you ready to test your knowledge?")}
        </p>
        <p className="pb-2">{translate("So lets get started!")}</p>
        <p className="pb-2">{translate("Click the start button!")}</p>
      </div>
      <div className="w-[90%] min-[600px]:w-[70%] lg:w-[30%] mx-auto flex items-center justify-around pt-6">
        <button className={`${styles.linkStyle} w-[90%] rounded-full`}>
          Start
        </button>
      </div>
      <Image
        src={rocketRide}
        width={300}
        height={300}
        alt="rocket"
        className="hidden lg:block lg:visible -mt-36 ml-20 xl:ml-40"
      />
    </>
  );
};

export default QuizPageTitle;
