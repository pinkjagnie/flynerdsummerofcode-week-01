import React from "react";

import NobelPrizesContent from "@/components/content/life/NobelPrizesContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const nobelPrizesPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <NobelPrizesContent />

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default nobelPrizesPage;