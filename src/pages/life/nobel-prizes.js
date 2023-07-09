import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NobelPrizesContent from "@/components/content/life/NobelPrizesContent";
import GoHomeLink from "@/components/Links/GoHomeLink";

import styles from "@/styles/styles";

const nobelPrizesPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("nobel-prizes");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <NobelPrizesContent translate={translate} />

      {/* go home */}
      <GoHomeLink translate={translate} />
    </section>
  );
};

export default nobelPrizesPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["nobel-prizes"])),
    },
  };
}
