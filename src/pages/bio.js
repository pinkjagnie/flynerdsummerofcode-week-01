import React from "react";
import Image from "next/image";

import GoHomeLink from "@/components/GoHomeLink";

import { curie02Big } from "@/assets/index";
import styles from "@/styles/styles";

const bioPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <div className={styles.basicTopPartOfPage}>
        <Image src={curie02Big} width={250} height={250} className="pb-4 lg:w-[300px] lg:h-[300px]" alt="Maria Skłodowska Curie" />
        <div className="lg:w-[90%]">
          <h1 className="uppercase text-xl lg:text-4xl text-[#d66382] font-bold text-center">Maria Skłodowska-Curie</h1>
          <p className={styles.basicParagraph}>(ur. 7 listopada 1867 w Warszawie, zm. 4 lipca 1934 w Passy) – polsko-francuska uczona zajmująca się fizyką doświadczalną i chemią fizyczną, podwójna noblistka – laureatka Nagrody Nobla z fizyki (1903) i chemii (1911).</p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>W 1891 Maria Skłodowska wyjechała z Królestwa Polskiego do Paryża, by podjąć studia na Sorbonie (w XIX wieku kobiety nie mogły studiować na ziemiach polskich); następnie rozwinęła tam swoją karierę naukową. Była prekursorką nowej gałęzi chemii – radiochemii. Do jej dokonań należą: rozwinięcie teorii promieniotwórczości, technik rozdzielania izotopów promieniotwórczych oraz odkrycie dwóch nowych pierwiastków – radu i polonu. Z jej inicjatywy prowadzono także badania nad leczeniem raka za pomocą promieniotwórczości.</p>
        <p  className={styles.basicParagraph}>Nagrodą Nobla została wyróżniona po raz pierwszy w 1903 – z fizyki, wraz z mężem Pierre’em Curie i z Henrim Becquerelem, za badania nad odkrytym przez Becquerela zjawiskiem promieniotwórczości. Po raz drugi została nagrodzona w 1911 – z chemii za odkrycie polonu i radu, wydzielenie czystego radu i badanie właściwości chemicznych pierwiastków promieniotwórczych. Należy do grona jedynie czterech osób, które otrzymały Nagrodę Nobla więcej niż raz. Wśród nich jest jedną z dwóch, które otrzymały nagrody w różnych dyscyplinach. W tej czwórce jest też jedyną kobietą oraz jedynym uczonym uhonorowanym w dwóch różnych naukach przyrodniczych. Mimo polskiej narodowości i sentymentów do kraju, nigdy nie otrzymała polskiego obywatelstwa.</p>
        <p  className={styles.basicParagraph}>Maria Skłodowska-Curie to pierwsza kobieta, która spoczęła w paryskim Panteonie w dowód uznania zasług naukowych. Z mężem Pierre’em Curie miała dwie córki, które dożyły dorosłości: Ève Curie i Irène Joliot-Curie. </p>
      </div>

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default bioPage;