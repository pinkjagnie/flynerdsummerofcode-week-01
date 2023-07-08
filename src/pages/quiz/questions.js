import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import QuizQuestions from "@/components/quiz/QuizQuestions";

import styles from "@/styles/styles";

const questionsPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("quiz");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <QuizQuestions translate={translate} />
    </section>
  );
};

export default questionsPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["quiz"])),
    },
  };
}
