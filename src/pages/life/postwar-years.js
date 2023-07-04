import React from "react";

import PostwarYearsContent from "@/components/content/life/PostwarYearsContent";
import GoHomeLink from "@/components/GoHomeLink";

import styles from "@/styles/styles";

const postwarYearsPage = () => {
  return(
    <section className={`${styles.sectionPaddingTop} min-h-screen`}>
      <PostwarYearsContent />  

      {/* go home */}
      <GoHomeLink />
    </section>
  )
};

export default postwarYearsPage;