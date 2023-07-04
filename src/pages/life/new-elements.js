import React from "react";

import Lottie from 'react-lottie';
import animationData from "../../assets/microscope-ib.json";

import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const newElementsPage = () => {
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
          <p className={styles.basicParagraph}><em className="text-[#d66382] font-bold uppercase">W 1896 Henri Becquerel</em> (1852–1908), fizyk francuski, rozpoczął badania nad solami uranu (siarczanem potasu-uranylu K<sub>2</sub>[UO<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>](H<sub>2</sub>O)<sub>2</sub>), które wykazują silną fosforescencję. 2 marca 1896 na posiedzeniu Akademii Nauk ogłosił, że minerał zawierający uran emituje nowe, nieznane promieniowanie bez uprzedniego naświetlania. </p>
        </div>
      </div>

      <div>
        <p className={styles.basicParagraph}>Becquerel przeprowadził kilka doświadczeń, na podstawie których stwierdził m.in. że uran i jego związki chemiczne w stanie krystalicznym, rozpuszczone czy też stopione samorzutnie emitują promieniowanie, które zaczernia kliszę fotograficzną, jonizuje powietrze i przenika przez nieprzezroczyste ciała. Ponadto stwierdził (błędnie), że promieniowanie uranowe jest zbliżone właściwościami do zwykłego światła i podobnie jak ono ulega odbiciu, załamaniu i polaryzacji. Z końcem 1897 Maria Skłodowska-Curie poszukując tematu do rozprawy w celu uzyskania stopnia doktora podjęła pierwsze badania naukowe z promieniami Becquerela.</p>
        <p className={styles.basicParagraph}>W tym samym roku, 12 września przyszła na świat pierwsza córka Marii i Pierre’a – Irène, późniejsza laureatka Nagrody Nobla z chemii (była drugą kobietą wyróżnioną tą nagrodą w dziedzinie chemii). </p>
        <p className={styles.basicParagraph}>Maria podejmując prace naukowe nad promieniowaniem odkrytym przez Becquerela zastosowała przede wszystkim zamiast kliszy fotograficznej używanej przez uczonego bardzo czuły elektrometr, skonstruowany przez Pierre’a i jego brata Jacques’a Curie. Dzięki temu wynalazkowi stwierdziła, że natężenie promieni Becquerela zależy od zawartości uranu w próbce i jest do niej proporcjonalne. To spostrzeżenie umożliwiło jej wyciągnięcie słusznego wniosku, że jest ono właściwością atomową uranu. Kolejnym osiągnięciem Marii było udowodnienie, że poza uranem także tor emituje promieniowanie. Następnie Maria Curie dowiodła, że emisja promieniowania niektórych minerałów zawierających uran (blenda smolista, chalkolit czy autunit) jest znacznie silniejsza niż wynikałoby to z zawartości uranu w ich składzie. Ponieważ znała skład chemiczny chalkolitu [Cu(UO<sub>2</sub>)<sub>2</sub>(PO<sub>4</sub>)<sub>2</sub>·(8–12)H<sub>2</sub>O] stwierdziła, że tylko uran jest pierwiastkiem promieniotwórczym w tym minerale. Wysunęła więc słuszną hipotezę, że minerał ten musi zawierać domieszkę nowego, nieznanego pierwiastka chemicznego. Maria otrzymała w laboratorium chalkolit i udowodniła tym samym, że syntetyczny chalkolit emituje słabsze promieniowanie. Był to dowód eksperymentalny na istnienie nowego pierwiastka chemicznego. Do badań Marii dołączył Pierre Curie. Małżonkowie Curie opracowali metodę wskaźników promieniotwórczych, dzięki czemu określili zdolność promieniowania nowego pierwiastka. Za pomocą przemian chemicznych wyodrębnili nowy, nieznany dotąd pierwiastek chemiczny. 18 lipca 1898 przedstawili dzieło naukowe, w którym donosili o odkryciu polonu (symbol Po, liczba atomowa 84), pierwiastka nazwanego na cześć Polski. Na kolejny sukces małżonkowie Curie nie musieli zbyt długo czekać. 26 grudnia 1898 wspólnie z Gustavem Bémontem donieśli o odkryciu kolejnego pierwiastka chemicznego – radu (symbol Ra, liczba atomowa 88). </p>
        <p className={styles.basicParagraph}>Małżonkowie Curie zbadali promieniowanie emitowane przez rad i polon, stwierdzając m.in., że związki promieniotwórcze świecą, sole radu wydzielają ciepło, zabarwiają porcelanę i szkło, promieniowanie przechodzi przez powietrze i pewne ciała, że może przekształcić tlen cząsteczkowy (O<sub>2</sub>) w ozon (O<sub>3</sub>). Pierre Curie poddał swoje ramię kilkugodzinnemu działaniu radu, a powstałą trudno gojącą się ranę obserwował i opisał. Za swoje prace małżonkowie Curie zostali wyróżnieni licznymi nagrodami m.in. Plante, Lacaze, Gegner, Osiris, Medalem Davy`ego.</p>
        <p className={styles.basicParagraph}>W 1903 Maria przedstawiła tezy swojej rozprawy doktorskiej pt. „Badanie ciał radioaktywnych”. W sierpniu tego roku urodziła drugą córkę, która zmarła po porodzie.</p>
        <p className={styles.basicParagraph}>W 1903 Maria i Pierre Curie otrzymali wspólnie z Becquerelem Nagrodę Nobla z fizyki za badania nad zjawiskiem promieniotwórczości. 6 grudnia 1904 Maria urodziła trzecią córkę, Ève – przyszłą biografkę matki, pianistkę i działaczkę pokojową.</p>
      </div>

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default newElementsPage;