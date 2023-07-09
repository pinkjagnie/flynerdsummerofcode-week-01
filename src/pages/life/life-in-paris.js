import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LifeInParisContent from "@/components/content/life/LifeInParisContent";
import GoHomeLink from "@/components/Links/GoHomeLink";

import styles from "@/styles/styles";

const lifeInParisPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("life-in-paris");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <LifeInParisContent translate={translate} />

      {/* go home */}
      <GoHomeLink translate={translate} />
    </section>
  );
};

export default lifeInParisPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["life-in-paris"])),
    },
  };
}
