import React from "react";
import Link from "next/link";

import { links } from "@/constans/links";

import styles from "@/styles/styles";

const SingleLink = ({ translate }) => {
  return (
    <div className="pb-6 lg:py-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:w-[70%] mx-auto">
      {links.map((item, id) => {
        return (
          <div
            key={item.id}
            className={`${styles.linkStyle} w-[90%] min-[600px]:w-[70%] md:w-[60%] lg:w-[100%] mx-auto my-4 lg:my-0 rounded-full lg:flex lg:items-center lg:justify-center`}
          >
            <Link
              href={item.link}
              className="font-semibold text-center lg:text-xl"
            >
              {translate(item.translate)}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SingleLink;
