import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>FlyNerdSummerOfCode - week 01</title>
        <meta name="description" content="FlyNerdSummerOfCode - week 01" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_48-48.png" />
      </Head>
      <main className='min-h-screen'>
        <Hero />
      </main>
    </>
  )
}
