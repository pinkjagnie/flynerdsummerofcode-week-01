import React from "react";

import WorldWarIContent from "@/components/content/life/WorldWarIContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const worldWarIPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <WorldWarIContent />

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default worldWarIPage;