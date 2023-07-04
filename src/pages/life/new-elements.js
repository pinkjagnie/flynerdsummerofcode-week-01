import React from "react";

import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import NewElementsContent from "@/components/content/life/NewElementsContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const newElementsPage = () => {
  const { locale, locales, asPath } = useRouter();

	const { t: translate } = useTranslation('new-elements');

  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <NewElementsContent translate={translate} />

      {/* go home */}
      <GoHomeLink translate={translate} />

    </section>
  )
};

export default newElementsPage;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['new-elements'])),
		},
	}
};