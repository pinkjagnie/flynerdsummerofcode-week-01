import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import WorldWarIContent from "@/components/content/life/WorldWarIContent";
import GoPrevLink from "@/components/Links/GoPrevLink";
import GoNextLink from "@/components/Links/GoNextLink";
import GoHomeLink from "@/components/Links/GoHomeLink";

import styles from "@/styles/styles";

const worldWarIPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("world-war-i");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <WorldWarIContent translate={translate} />

      {/* prev | next */}
      <div className={styles.linkArrowBoxStyle}>
        <GoPrevLink link={"/life/nobel-prizes"} />
        <GoNextLink link={"/life/postwar-years"} />
      </div>

      {/* go home */}
      <GoHomeLink translate={translate} />
    </section>
  );
};

export default worldWarIPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["world-war-i"])),
    },
  };
}
