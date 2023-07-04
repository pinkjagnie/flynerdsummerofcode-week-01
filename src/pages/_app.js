import React from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';

import Navbar from '@/components/Navbar';
import LanguageMenu from '@/components/LanguageMenu';
import Footer from '@/components/Footer';

import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  const { locale, locales, asPath } = useRouter()

  return(
    <>
      <Navbar />
      <LanguageMenu locales={locales} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
};

export default appWithTranslation(App);
