import React from "react";

import LifeInParisContent from "@/components/content/life/LifeInParisContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const lifeInParisPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <LifeInParisContent />

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default lifeInParisPage;