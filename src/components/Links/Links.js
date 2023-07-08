import React from "react";

import SingleLink from "./SingleLink";

const Links = ({ translate }) => {
  return (
    <section className="py-6 pb-0 lg:pt-10 lg:pb-4">
      <SingleLink translate={translate} />
    </section>
  );
};

export default Links;
