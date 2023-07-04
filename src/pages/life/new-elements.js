import React from "react";

import NewElementsContent from "@/components/content/life/NewElementsContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const newElementsPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <NewElementsContent />

      {/* go home */}
      <GoHomeLink />

    </section>
  )
};

export default newElementsPage;