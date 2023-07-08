import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import QuizPageTitle from "@/components/quiz/QuizPageTitle";

import styles from "@/styles/styles";

const quizPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("quiz");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <QuizPageTitle translate={translate} />
    </section>
  );
};

export default quizPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["quiz"])),
    },
  };
}
