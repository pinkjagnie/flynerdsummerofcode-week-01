import React from "react";
import Image from "next/image";
import Link from "next/link";

import { curie03Big } from "@/assets/index";
import styles from "@/styles/styles";

const worldWarIPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <div className={styles.basicTopPartOfPage}>
        <Image src={curie03Big} width={250} height={250} className="pb-4 lg:w-[300px] lg:h-[300px]" alt="Maria Skłodowska Curie" />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">Gdy 1 sierpnia 1914 </em> wybuchła I wojna światowa, siedemnastoletnia Irène i dziesięcioletnia Ève przebywały z dala od Paryża i matki. Były na wakacjach w l’Arcouest pod opieką przyjaciół Marii. Maria Skłodowska-Curie pozostała w Paryżu, by strzec Instytutu Radowego i próbki radu.</p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>Rząd ogłosił, że rad znajdujący się w Instytucie Radowym stanowi dobro narodowe i należy go ochronić. Uczona wywiozła rad na czas wojny do Bordeaux. Maria nie mogąc służyć Polsce, postanowiła służyć Francji. Zebrała aparaty rentgenowskie z paryskich pracowni i zorganizowała specjalne samochody ciężarowe z aparaturą, tzw. „małe Curie” (w lipcu 1916, jako jedna z pierwszych kobiet, uzyskała prawo jazdy na ciężarówki, by móc te samochody prowadzić). Były to pionierskie działania z zakresu diagnostyki zdrowia. Dzięki jej pracy i wytrwałości można było wykonywać zdjęcia rentgenowskie w polowych warunkach. Marii towarzyszyli lekarze wojskowi i Irène, która razem z matką szkoliła techników radiologów. Ta działalność uratowała wielu żołnierzy od pewnej śmierci. Była także członkinią Szwajcarskiego Komitetu Generalnego Pomocy Ofiarom Wojny w Polsce. </p>
      </div>

      {/* go home */}
      <div className="py-6 flex items-center justify-center">
        <Link href='/' className={styles.linkStyle}>Wróć do strony głównej</Link>
      </div>

    </section>
  )
};

export default worldWarIPage;