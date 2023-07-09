import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import EarlyYearsContent from "@/components/content/life/EarlyYearsContent";
import GoHomeLink from "@/components/Links/GoHomeLink";

import styles from "@/styles/styles";

const earlyYearsPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("early-years");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <EarlyYearsContent translate={translate} />

      {/* go home */}
      <GoHomeLink translate={translate} />
    </section>
  );
};

export default earlyYearsPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["early-years"])),
    },
  };
}
