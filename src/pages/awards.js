import React from "react";
import Image from "next/image";
import Link from "next/link";

import { curie04Big } from "@/assets/index";
import styles from "@/styles/styles";

const awardsPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <div className={styles.basicTopPartOfPage}>
        <Image src={curie04Big} width={250} height={250} className="pb-4 lg:w-[300px] lg:h-[300px]" alt="Maria Skłodowska Curie" />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">Maria Skłodowska-Curie </em> w 1909, podobnie jak jej mąż wcześniej, odmówiła przyjęcia francuskiego Krzyża Kawalerskiego Orderu Legii Honorowej, ale w 1919 przyjęła odznaczenie hiszpańskim Krzyżem Wielkim Orderu Cywilnego Alfonsa XII. 11 listopada 2018 otrzymała pośmiertnie Order Orła Białego.</p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>Uhonorowana została również doktoratami honorowymi:</p>
        <p className={`${styles.basicParagraph} pl-6`}>Politechniki Lwowskiej – 1912,</p>
        <p className={`${styles.basicParagraph} pl-6`}>Uniwersytetu Columbia – 1921,</p>
        <p className={`${styles.basicParagraph} pl-6`}>Uniwersytetu Poznańskiego – 1922,</p>
        <p className={`${styles.basicParagraph} pl-6`}>Uniwersytetu Jagiellońskiego – 1924,</p>
        <p className={`${styles.basicParagraph} pl-6`}>Politechniki Warszawskiej – 1926.</p>
        <p className={styles.basicParagraph}>W lutym 1924 jednomyślną decyzją warszawskiej rady miejskiej otrzymała honorowe obywatelstwo Warszawy. W maju 1928 została wyróżniona honorowym obywatelstwem szkockiego miasta Glasgow. </p>
      </div>

      {/* go home */}
      <div className="py-6 flex items-center justify-center">
        <Link href='/' className={styles.linkStyle}>Wróć do strony głównej</Link>
      </div>

    </section>
  )
};

export default awardsPage;