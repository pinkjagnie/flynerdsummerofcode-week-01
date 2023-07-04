import React from "react";

import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PostwarYearsContent from "@/components/content/life/PostwarYearsContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const postwarYearsPage = () => {
  const { locale, locales, asPath } = useRouter();

	const { t: translate } = useTranslation('postwar-years');

  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <PostwarYearsContent translate={translate} />  

      {/* go home */}
      <GoHomeLink translate={translate} />
    </section>
  )
};

export default postwarYearsPage;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['postwar-years'])),
		},
	}
};