import React from "react";

import Lottie from 'react-lottie';
import animationData from "../../../assets/lotties/chemistry.json";

import styles from "@/styles/styles";

const LifeInParisContent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return(
    <>
      <div className={styles.basicTopPartOfPage}>
        <Lottie options={defaultOptions} height={250} width={250} />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">Maria Skłodowska</em> rozpoczęła naukę na Sorbonie w listopadzie 1891. Jako przedmiot studiów wybrała matematykę i fizykę. Jej nauczycielami akademickimi byli Paul Appel, Henri Poincaré oraz Gabriel Lippmann – wybitni uczeni o światowej sławie. </p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>Życie i czas w Paryżu Maria dzieliła pomiędzy naukę i grę w amatorskim teatrze. To właśnie w czasie studiów podczas jednego z przedstawień pt. „Polska, która kruszy kajdany” poznała i zaprzyjaźniła się z 7 lat starszym pianistą – Ignacym Janem Paderewskim. 28 lipca 1893 otrzymała licencjat z fizyki z pierwszą lokatą, a rok później licencjat z matematyki z drugą lokatą.</p>
        <p className={styles.basicParagraph}>Po ukończonych studiach, Gabriel Lippmann pomógł Marii otrzymać stypendium naukowe nad badaniami naukowymi związanymi z magnetycznymi właściwościami różnych rodzajów stali. W tym samym czasie Maria poznała u prof. Józefa Wierusza-Kowalskiego skromnego naukowca – Pierre’a Curie. Był on o osiem lat starszy od Marii, był wspólnie z bratem Jacques’m odkrywcą piezoelektryczności, autorem „prawa Curie” i zasady symetrii, konstruktorem piezokwarcu i „wagi Curie”. Maria i Pierre szybko znaleźli wspólne tematy do rozmów. 26 lipca 1895 Maria Skłodowska i Pierre Curie zawarli cywilny związek małżeński. Podczas ceremonii towarzyszyli im tylko najbliższa rodzina i kilku przyjaciół. W podróż poślubną pojechali na rowerach – prezencie ślubnym od jednego z przyjaciół. </p>
      </div>
    </>
  )
};

export default LifeInParisContent;