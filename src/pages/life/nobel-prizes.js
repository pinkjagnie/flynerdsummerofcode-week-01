import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NobelPrizesContent from "@/components/content/life/NobelPrizesContent";
import GoPrevLink from "@/components/Links/GoPrevLink";
import GoNextLink from "@/components/Links/GoNextLink";
import GoHomeLink from "@/components/Links/GoHomeLink";

import styles from "@/styles/styles";

const nobelPrizesPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("nobel-prizes");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <NobelPrizesContent translate={translate} />

      {/* prev | next */}
      <div className={styles.linkArrowBoxStyle}>
        <GoPrevLink link={"/life/new-elements"} />
        <GoNextLink link={"/life/world-war-i"} />
      </div>

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
