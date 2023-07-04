import React from "react";

import EarlyYearsContent from "@/components/content/life/EarlyYearsContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const earlyYearsPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <EarlyYearsContent />

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default earlyYearsPage;