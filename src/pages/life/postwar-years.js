import React from "react";
import Image from "next/image";
import Link from "next/link";

import { curie03Big } from "@/assets/index";
import styles from "@/styles/styles";

const postwarYearsPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <div className={styles.basicTopPartOfPage}>
        <Image src={curie03Big} width={250} height={250} className="pb-4 lg:w-[300px] lg:h-[300px]" alt="Maria Skłodowska Curie" />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">W maju 1921 </em> dzięki amerykańskiej dziennikarce Marii Meloney, Maria wraz z córkami wyruszyła w podróż do Stanów Zjednoczonych, gdzie dzięki zbiórce pieniędzy wśród Polonii amerykańskiej oraz amerykańskich milionerów otrzymała pieniądze na zakup grama radu do Instytutu Radowego. Oprócz wymarzonego grama radu Maria dostała dodatkową gotówkę na wyposażenie laboratorium. Kluczyk do szkatułki z cennym radem wręczył Marii prezydent USA Warren Harding.</p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>W 1926 Irène poślubiła Frédérica Joliot. Małżeństwo Joliot-Curie dokonało w 1934 wielkiego odkrycia – sztucznej radioaktywności, za co w 1935 oboje otrzymali Nagrodę Nobla z chemii. Pod koniec lat dwudziestych zdrowie Marii Skłodowskiej-Curie zaczęło się coraz bardziej pogarszać. Maria zaczęła tracić słuch i wzrok. W 1929 Maria Meloney zaprosiła Marię Curie jeszcze raz do Stanów Zjednoczonych. Tym razem za zebrane pieniądze Maria kupiła gram radu dla Instytutu Radowego w Warszawie (obecnie Narodowy Instytut Onkologii im. Marii Skłodowskiej-Curie – Państwowy Instytut Badawczy w Warszawie). Kluczyk do szkatułki z radem wręczył tym razem prezydent USA Herbert Hoover. Maria przekazała bezcenny dar swojej siostrze Bronisławie. Szpital został otwarty przez obie siostry w maju 1932. W 1934 Maria zaczęła czuć się coraz gorzej: miała wysoką temperaturę, pojawiły się dreszcze. Lekarze zdiagnozowali grypę, później gruźlicze zmiany w płucach. Zaproponowali wyjazd do sanatorium. Maria wraz z córką Ève jako pielęgniarką wyjechała do sanatorium Sancellemoz w Passy. Tam na miejscu lekarze znaleźli prawdziwą przyczynę osłabienia Marii – niedokrwistość aplastyczną (miała także chorobę popromienną wywołaną przez promieniowanie jonizujące) o przebiegu piorunującym. Maria Skłodowska-Curie zmarła tam 4 lipca 1934 o godz. 4 rano. Pogrzeb odbył się 6 lipca 1934 w gronie rodziny i najbliższych przyjaciół. Maria spoczęła obok Pierre’a na cmentarzu w Sceaux. 20 kwietnia 1995 szczątki Marii i Pierre’a Curie zostały przeniesione do Panteonu w Paryżu. </p>
      </div>

      {/* go home */}
      <div className="py-6 flex items-center justify-center">
        <Link href='/' className={styles.linkStyle}>Wróć do strony głównej</Link>
      </div>
    </section>
  )
};

export default postwarYearsPage;