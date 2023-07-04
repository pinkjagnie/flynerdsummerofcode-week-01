import React from "react";

import Lottie from 'react-lottie';
import animationData from "../../assets/chemistry-class.json";

import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const worldWarIPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <div className={styles.basicTopPartOfPage}>
        <Lottie options={defaultOptions} height={250} width={250} />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">Gdy 1 sierpnia 1914 </em> wybuchła I wojna światowa, siedemnastoletnia Irène i dziesięcioletnia Ève przebywały z dala od Paryża i matki. Były na wakacjach w l’Arcouest pod opieką przyjaciół Marii. Maria Skłodowska-Curie pozostała w Paryżu, by strzec Instytutu Radowego i próbki radu.</p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>Rząd ogłosił, że rad znajdujący się w Instytucie Radowym stanowi dobro narodowe i należy go ochronić. Uczona wywiozła rad na czas wojny do Bordeaux. Maria nie mogąc służyć Polsce, postanowiła służyć Francji. Zebrała aparaty rentgenowskie z paryskich pracowni i zorganizowała specjalne samochody ciężarowe z aparaturą, tzw. „małe Curie” (w lipcu 1916, jako jedna z pierwszych kobiet, uzyskała prawo jazdy na ciężarówki, by móc te samochody prowadzić). Były to pionierskie działania z zakresu diagnostyki zdrowia. Dzięki jej pracy i wytrwałości można było wykonywać zdjęcia rentgenowskie w polowych warunkach. Marii towarzyszyli lekarze wojskowi i Irène, która razem z matką szkoliła techników radiologów. Ta działalność uratowała wielu żołnierzy od pewnej śmierci. Była także członkinią Szwajcarskiego Komitetu Generalnego Pomocy Ofiarom Wojny w Polsce. </p>
      </div>

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default worldWarIPage;