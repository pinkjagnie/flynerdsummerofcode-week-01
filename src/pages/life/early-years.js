import React from "react";
import Image from "next/image";
import Link from "next/link";

import { curie04Big } from "@/assets/index";
import styles from "@/styles/styles";

const earlyYearsPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <div className={styles.basicTopPartOfPage}>
        <Image src={curie04Big} width={250} height={250} className="pb-4 lg:w-[300px] lg:h-[300px]" alt="Maria Skłodowska Curie" />
        <div className="lg:w-[90%]">
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">Maria Skłodowska</em> urodziła się w Warszawie (wtedy znajdującej się w Królestwie Polskim, będącym częścią Imperium Rosyjskiego) jako piąte i ostatnie dziecko w rodzinie nauczycielskiej, wywodzącej się z drobnej szlachty. Jej ojciec Władysław, pochodził z rodziny, która miała prawo do posługiwania się herbem Dołęga, zaś matka z rodziny z herbem Topór. Dziadek Józef Skłodowski był szanowanym lubelskim pedagogiem. Ojciec Władysław Skłodowski był nauczycielem matematyki i fizyki oraz dyrektorem kolejno dwóch warszawskich gimnazjów męskich, zmuszony przez władze carskie prowadził również w domu stancję dla chłopców. Matka Bronisława Boguska, była przełożoną warszawskiej pensji dla dziewcząt z dobrych domów.</p>
        </div>
      </div>
      
      <div>
        <p className={styles.basicParagraph}>Oboje rodzice wychowywali swoje dzieci w duchu głębokiego patriotyzmu. Rodzeństwem Marii byli: Zofia (1861–1876), Józef (1863–1937) – znany warszawski lekarz, Bronisława (1865–1939) – lekarka i działaczka społeczna i Helena (1866–1961) – nauczycielka. Kiedy Maria miała 9 lat, jej najstarsza siostra Zofia zmarła na tyfus. Dwa lata później, w wieku 42 lat zmarła jej matka, która od lat chorowała na gruźlicę. Ojciec był ateistą, matka zaś głęboko wierzącą katoliczką. Po śmierci siostry i matki Maria wpadła w depresję, straciła też wiarę w Boga i stała się ateistką, a według Reida agnostyczką.</p>
        <p className={styles.basicParagraph}>Gdy Maria miała 10 lat rozpoczęła naukę na pensji dla dziewcząt, którą wcześniej prowadziła jej matka. Następnie kształciła się w III Żeńskim Gimnazjum Rządowym, które ukończyła w 1883 ze złotym medalem. Kolejny rok spędziła na wsi u ziemiańskiej rodziny jej ojca, gdzie regenerowała siły fizyczne i psychiczne po bolesnych przeżyciach związanych ze śmiercią matki i siostry. Po powrocie do Warszawy udzielała korepetycji z matematyki, fizyki, języków obcych (znała polski, rosyjski, niemiecki, angielski, francuski). W Warszawie Maria poznała Bronisławę Piasecką – nauczycielkę, którą przepełniały idee pozytywizmu. Pod jej wpływem Maria wraz z siostrami – Bronią i Helą wstąpiły na Uniwersytet Latający. Był to czas, kiedy młode Skłodowskie poznały wybitnych profesorów, którzy przekazali im zakazaną przez władzę wiedzę. W wieku około 16 lat, ostatecznie zadeklarowała się jako ateistka zamieszczając w swoim pamiętniku racjonalistyczną krytykę przeciwko instytucjonalnemu oszukiwaniu w Kościele, jak również fragmenty obrazoburczej książki „Żywot Jezusa” autorstwa byłego księdza Josepha Ernesta Renana. Kienzler podsumowuje: „Odtąd w jej życiu miejsce wiary i Boga zastąpiła nauka”.</p>
        <p className={styles.basicParagraph}>Zafascynowane nauką, Maria i Bronia zawarły umowę, w myśl której najpierw na studia do Paryża wyjedzie starsza z nich, a młodsza będzie pracować w kraju na jej utrzymanie. Po zakończonych studiach we Francji, Bronia miałaby utrzymywać Marię. W związku z tym została guwernantką najpierw w prawniczej rodzinie z Krakowa, a następnie u ziemiańskiej rodziny Żorawskich, mieszkających w majątku ziemskim w Szczukach. Tam Maria uczyła dwie córki Żorawskich, a w wolnych chwilach, za zgodą Żorawskiego, uczyła wiejskie dzieci czytania, pisania i liczenia; działalność ta była zabroniona i bardzo surowo karana przez carskie władze.</p>
        <p className={styles.basicParagraph}>W Szczukach Maria poznała syna Żorawskich, Kazimierza, wtedy młodego studenta matematyki. Młodzi zakochali się w sobie i dość szybko zaręczyli. Rodzice Kazimierza jednak stanowczo odrzucili pomysł ślubu ich syna z ubogą guwernantką, a sam Kazimierz nie potrafił się im przeciwstawić. Upokorzona Maria pracowała w Szczukach jeszcze piętnaście miesięcy. Żyjąc nadzieją na małżeństwo, raz jeszcze spotkała się z Kazimierzem w Zakopanem. Spotkanie potwierdziło jednak tylko obawy Marii, że do małżeństwa nie dojdzie. Ostatecznie zerwała znajomość z młodym Żorawskim. W 1889 upokorzona i odtrącona Maria, po czterech latach żalu, bólu, samotności i ciężkiej pracy powróciła do Warszawy. Tutaj zaczęła uzupełniać swoją wiedzę z chemii i fizyki na Uniwersytecie Latającym, m.in. uczestnicząc w laboratoriach Muzeum Przemysłu i Rolnictwa przy Krakowskim Przedmieściu. Pomagali jej cioteczny brat Józef Boguski, były asystent Dymitra Mendelejewa, oraz chemik Napoleon Milicer, były współpracownik Roberta Bunsena. To właśnie ci uczeni nauczyli młodą Skłodowską analizy chemicznej, którą później mogła wykorzystać przy pracach umożliwiających jej wyizolowanie radu i polonu.</p>
        <p className={styles.basicParagraph}>Na początku 1890, zgodnie z wcześniejszą umową, Bronisława, która kilka miesięcy wcześniej poślubiła Kazimierza Dłuskiego (także lekarza), zaprosiła ją do swojego paryskiego mieszkania, oferując pełne utrzymanie. Maria jeszcze przez rok się wahała, dokształcała, udzielała korepetycji, aż na początku 1891 zdecydowała się wyjechać do Paryża. </p>
      </div>

      {/* go home */}
      <div className="py-6 flex items-center justify-center">
        <Link href='/' className={styles.linkStyle}>Wróć do strony głównej</Link>
      </div>

    </section>
  )
};

export default earlyYearsPage;