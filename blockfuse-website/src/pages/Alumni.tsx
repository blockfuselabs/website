import React from "react";
import AluminiCohorts from "../components/AluminiCohorts";
import Gallery from "../components/Gallery";
import NextCohorts from "../components/NextCohorts";
import NewsLetters from "../components/NewsLetters";
import AlGallery from "../components/AlGallery";

const Alumni = () => {
  return (
    <div className="px-6 py-4 h-full sm:px-8 md:px-16 lg:px-24">
      <AluminiCohorts />
      <AlGallery />
      <NextCohorts />
      <NewsLetters />
    </div>
  );
};

export default Alumni;
