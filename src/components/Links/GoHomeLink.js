import React from "react";
import Link from "next/link";

import styles from "@/styles/styles";

const GoHomeLink = ({ translate }) => {
  return(
    <div className="py-6 flex items-center justify-center">
      <Link href='/' className={styles.linkStyle}>{translate('go home link')}</Link>
    </div>
  )
};

export default GoHomeLink;