import React from "react";
import OLWHero from "../OLWHero";

function AnatomyTitle() {
  return (
    <div className="w-full flex !py-10">
      <div className="olw-hero-pulse-image"></div>

      <OLWHero
        heading="Anatomy of Human System"
        subHeading=""
        fontSize="50px"
      />
      <div className="olw-hero-pulse-image-2"></div>
    </div>
  );
}

export default AnatomyTitle;
