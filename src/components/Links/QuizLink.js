import React from "react";
import Link from "next/link";

const QuizLink = ({ translate }) => {
  return (
    <div className="[w-90%] mx-auto flex items-center justify-center pb-10">
      <Link
        href="/quiz"
        className="w-[90%] min-[600px]:w-[70%] md:w-[60%] lg:w-[70%] uppercase py-4 px-8 cursor-pointer bg-zinc-100 text-[#d66382] font-semibold text-center lg:text-xl border-2 border-[#d66382] rounded-full hover:text-zinc-50 hover:bg-[#d66382]"
      >
        {translate("Test yourself in the quiz")}
      </Link>
    </div>
  );
};

export default QuizLink;
