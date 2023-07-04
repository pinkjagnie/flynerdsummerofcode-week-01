import React from "react";

import Lottie from 'react-lottie';
import animationData from "../../assets/science.json";

import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const nobelPrizesPage = () => {
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
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">W 1903 Maria i Pierre Curie</em> otrzymali wspólnie z Becquerelem Nagrodę Nobla z fizyki za badania nad zjawiskiem promieniotwórczości. 6 grudnia 1904 Maria urodziła trzecią córkę, Ève – przyszłą biografkę matki, pianistkę i działaczkę pokojową.</p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>W czwartek 19 kwietnia 1906 Pierre Curie, wracając z zebrania Stowarzyszenia Profesorów Wydziałów Nauk Ścisłych, zginął potrącony przez konny wóz ciężarowy; miał wtedy 47 lat. Zrozpaczona Maria przez rok prowadziła tzw. „Dziennik żałobny”, w którym opisywała ból, żal i pustkę, jaka jej pozostała po śmierci ukochanego męża, przyjaciela, towarzysza. W maju 1906 38-letnia Maria dostała katedrę fizyki po mężu. Pierwszy wykład prowadziła 5 listopada 1906. Została tym samym pierwszą kobietą profesorem na paryskiej Sorbonie. </p>
        <p className={styles.basicParagraph}>Po śmierci Pierre’a Maria oddała się całkowicie pracy: otrzymała rad w stanie metalicznym, opracowała i udoskonaliła metody izolowania i otrzymywania nowych substancji, podała definicję międzynarodowego wzorca radu. Brała także czynny udział w konferencjach i spotkaniach międzynarodowych m.in. w konferencji Solvaya. Wspólnie z grupą przyjaciół stworzyła szkołę, gdzie dzieci uczono w nowatorski sposób (w laboratoriach, muzeach, teatrach). W 1911 Maria zgłosiła swoją kandydaturę do Francuskiej Akademii Nauk, ale przepadła w głosowaniu. Warto w tym miejscu podkreślić, że Maria była laureatką Nagrody Nobla, trzykrotną laureatką Akademii Nauk w Paryżu, posiadała doktoraty honorowe uniwersytetów m.in. w Edynburgu, Genewie, Manchesterze, była członkiem Akademii Nauk w Petersburgu, Bolonii, Pradze, członkiem Akademii Umiejętności w Krakowie. Zwyciężyły jednak seksistowska postawa wobec kobiet i ksenofobiczna postawa wobec cudzoziemców. Pierwszą kobietę członkowie Akademii Nauk przyjęli ponad pół wieku później, w 1962. Była nią Marguerite Perey, doktorantka Marii Skłodowskiej-Curie.</p>
        <p className={styles.basicParagraph}>Wkrótce po porażce w Akademii ujawniony został romans Marii Skłodowskiej-Curie z fizykiem francuskim Paulem Langevinem, który trwał około roku, w latach 1910–1911. Langevin był żonaty i porzucił swoją rodzinę. Maria Skłodowska-Curie w oczach prasy, zwłaszcza brukowej, była osobą rozbijającą rodzinę Langevinów, w dodatku była od Paula o 4 lata starsza, a poza tym była cudzoziemką. Michel Langevin, wnuk Paula, ożenił się wiele lat później z Hélène Joliot, wnuczką Marii Skłodowskiej-Curie. Oboje byli, podobnie jak ich rodzice i dziadkowie, naukowcami (w ich przypadku – fizykami nuklearnymi). Hélène Langevin-Joliot jest obecnie emerytowaną dyrektorką badań w Centre national de la recherche scientifique w Paryżu. </p>
        <p className={styles.basicParagraph}>Maria była zdeklarowaną niewierzącą i pochodziła z Polski, która przez większość Francuzów była utożsamiana z bliżej nieokreślonym terytorium pod berłem rosyjskiego cara, gdzie znaczny procent ludności stanowili Żydzi – snuto przypuszczenia, że badaczka jest Żydówką (co w tamtych czasach było w ksenofobicznych kręgach Francji uważane za mocno podejrzane – nie ucichły bowiem jeszcze resentymenty, które kilkanaście lat wcześniej doprowadziły do sprawy Dreyfusa), pomimo że w rzeczywistości pochodziła ze szlacheckiego polskiego rodu Dołęga-Skłodowskich, a w dzieciństwie została ochrzczona w wierze katolickiej. Domniemania paryskich brukowców oparte były na tym, że Maria Skłodowska-Curie nosiła po babce drugie imię Salomea, które w Polsce było popularnym imieniem chrześcijańskim, zaś we Francji kojarzyło się z Salomé, używanym przez Żydówki.</p>
        <p className={styles.basicParagraph}>7 listopada 1911 Szwedzka Akademia Nauk przyznała Marii drugą, tym razem samodzielną Nagrodę Nobla z chemii za odkrycie polonu i radu. Została pierwszym człowiekiem wyróżnionym tą nagrodą dwukrotnie i pierwszą kobietą laureatką Nobla w dziedzinie chemii. </p>
      </div>

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default nobelPrizesPage;