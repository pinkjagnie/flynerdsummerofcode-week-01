import React from "react";

import BioContent from "@/components/content/BioContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const bioPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <BioContent />

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default bioPage;