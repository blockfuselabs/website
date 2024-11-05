import React from "react";
const AluminiCohorts = () => {
  return (
    <div className="flex justify-center items-center h-[1000px]">
      <div className="max-w-[1169px] w-full text-center bg-alumni-cohorts bg-cover  h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Meet graduates of{" "}
          <span className="text-[#BF64E7]">Blockfuse Labs</span>
        </h1>
        <h3 className="text-3xl md:text-4xl lg:text-5xl mt-4">
          Cohort 1 alumni - Jan. 2024
        </h3>
        <p className="text-lg md:text-xl font-medium leading-relaxed mt-4">
          Here, we celebrate their achievements and share the stories that
          inspire us.
        </p>
      </div>
    </div>
  );
};

export default AluminiCohorts;
