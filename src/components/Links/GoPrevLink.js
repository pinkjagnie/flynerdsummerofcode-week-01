import React from "react";
import Link from "next/link";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const GoPrevLink = (props) => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <BsFillArrowLeftCircleFill size={50} className="text-[#d66382]" />
      </Link>
    </div>
  );
};

export default GoPrevLink;
