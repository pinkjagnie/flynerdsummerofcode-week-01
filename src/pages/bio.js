import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import BioContent from "@/components/content/BioContent";
import GoHomeLink from "@/components/Links/GoHomeLink";

import styles from "@/styles/styles";

const bioPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("bio");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <BioContent translate={translate} />

      {/* go home */}
      <GoHomeLink translate={translate} />
    </section>
  );
};

export default bioPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["bio"])),
    },
  };
}
