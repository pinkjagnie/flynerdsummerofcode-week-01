import React from "react";

import AwardsContent from "@/components/content/AwardsContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const awardsPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <AwardsContent />

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default awardsPage;