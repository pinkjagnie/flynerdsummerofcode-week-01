import React from "react";
import Link from "next/link";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const GoNextLink = (props) => {
  return (
    <div className="cursor-pointer">
      <Link href={props.link}>
        <BsFillArrowRightCircleFill size={50} className="text-[#d66382]" />
      </Link>
    </div>
  );
};

export default GoNextLink;
