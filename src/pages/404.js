import React from 'react';
import Link from 'next/link';

import Lottie from 'react-lottie';
import animationData from "../assets/error-404.json";

import styles from '@/styles/styles';

export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return(
    <section className='min-h-screen bg-zinc-100 text-stone-800'>
      <div className='pt-24 min-[360px]:pt-32 min-[390px]:pt-40 min-[600px]:pt-60 lg:pt-28'>
        <h1 className='text-xl font-bold text-center'>Ups! Something went wrong</h1>
        <div className='pt-6'>
          <Lottie options={defaultOptions} height={300} width={300} />      
        </div>
        <div className="flex justify-center pb-10 lg:pt-4 mx-auto">
          <Link href="/" className={styles.linkStyle}>Wróć do strony głównej</Link>
        </div>
      </div>
      
    </section>
  )
}