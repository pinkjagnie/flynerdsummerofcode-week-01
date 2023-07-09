import React from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AwardsContent from "@/components/content/AwardsContent";
import GoPrevLink from "@/components/Links/GoPrevLink";
import GoNextLink from "@/components/Links/GoNextLink";
import GoHomeLink from "@/components/Links/GoHomeLink";

import styles from "@/styles/styles";

const awardsPage = () => {
  const { locale, locales, asPath } = useRouter();

  const { t: translate } = useTranslation("awards");

  return (
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <AwardsContent translate={translate} />

      {/* prev | next */}
      <div className={styles.linkArrowBoxStyle}>
        <GoPrevLink link={"/life/postwar-years"} />
        <GoNextLink link={"/quiz"} />
      </div>

      {/* go home */}
      <GoHomeLink translate={translate} />
    </section>
  );
};

export default awardsPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["awards"])),
    },
  };
}
