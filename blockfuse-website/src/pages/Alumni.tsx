import React from "react";
import AluminiCohorts from "../components/AluminiCohorts";
import Alumnicohorts from "../components/Alumnicohorts";
import OurAlumni from "../components/OurAlumni";

const Alumni = () => {
  return (
    <div className="px-6 py-4 h-full sm:px-8 md:px-16 lg:px-24">
      <AluminiCohorts />
      <Alumnicohorts/>
      <OurAlumni/>

    </div>
  );
};

export default Alumni;
