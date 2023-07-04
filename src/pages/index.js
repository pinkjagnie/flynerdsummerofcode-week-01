import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Hero from '@/components/Hero'

export default function Home() {
  const { locale, locales, push } = useRouter();

	const { t: translate } = useTranslation('hero');

  return (
    <>
      <Head>
        <title>FlyNerdSummerOfCode - week 01</title>
        <meta name="description" content="FlyNerdSummerOfCode - week 01" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_48-48.png" />
      </Head>
      <main className='min-h-screen'>
        <Hero translate={translate} />
      </main>
    </>
  )
};

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['hero'])),
		},
	}
};