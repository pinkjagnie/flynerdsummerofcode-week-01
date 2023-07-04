import React from "react";
import Link from "next/link";

import styles from "@/styles/styles";

const GoHomeLink = () => {
  return(
    <div className="py-6 flex items-center justify-center">
      <Link href='/' className={styles.linkStyle}>Wróć do strony głównej</Link>
    </div>
  )
};

export default GoHomeLink;