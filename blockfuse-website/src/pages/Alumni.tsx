import React from "react";
import box from "../assets/svgs/box1.svg";
import Imageone from "../assets/images/Frame-10-1.png";
import useCohortsQuery from "../../hooks/use-cohorts.guery";
import { useNavigate } from "react-router-dom";

const Alumni = () => {
  const { getAllCohortsData, getAllCohortsError, isGetAllCohortsloading } =
    useCohortsQuery();
  const navigate = useNavigate();
  console.log(getAllCohortsData);

  if (isGetAllCohortsloading) return <p>Loading...</p>;
  if (getAllCohortsError) return <p>Error loading team data</p>;

  return (
    <div className="px-6 py-4 h-full sm:px-8 md:px-16 lg:px-24">
      <section className="relative flex items-center justify-center h-screen px-6 py-36 sm:px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
          <img
            src="/src/assets/svgs/circles.svg"
            alt="Background illustration representing blockchain technology"
            width="800"
            height="400"
            loading="lazy"
            className="w-full h-auto max-w-[800px]"
          />
        </div>

        <div className="relative text-center z-10">
          <header>
            <h1 className="text-5xl md:text-5xl dark:text-white">
              Meet Our Alumni{" "}
              <span className="text-purple-500 font-bold">
                At Blockfuselabs
              </span>
            </h1>
          </header>
          <div className="-space-y-1">
            <p className="mt-4 text-lg md:text-xl w-full md:w-3/4 mx-auto dark:text-gray-300">
              Discover the bright minds shaping the blockchain space! Our alumni
              are pioneers, creators, and leaders who drive innovation and
              inspire the next generation in the world of decentralized
              technology. Blockfuse Labs Alumni is where graduates connect,
              collaborate, and continue to drive the future of decentralized
              technology.
            </p>
          </div>
        </div>
      </section>

      <section
        className="space-y-5 h-auto px-4 py-10 sm:px-6 md:px-16 lg:px-24 dark:text-white"
        role="region"
        aria-labelledby="about-us"
      >
        <p className="dark:text-gray-300 text-xl pb-10 md:pb-0 lg:pb-0 leading-[26px] font-light sm:w-[90%] md:w-[700px] mx-auto text-center md:text-left md:ml-[290px]">
          At Blockfuse Labs, we see education as a journey. Whether you're new
          to blockchain or an experienced developer, we offer resources, expert
          instructors, and tools for every stage of your growth.
        </p>
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="flex justify-center">
              <img
                src={Imageone}
                alt="Main Image"
                className="relative z-10 w-[90%] sm:w-full md:w-full"
              />
            </div>
            <img
              src={box}
              alt="Box svgs"
              className="absolute top-0 left-0 z-0 h-[250px] sm:h-[350px] md:h-[450px]"
              style={{ transform: "translate(-20%, -20%)" }}
            />
          </div>
        </div>
        <p className="text-xl md:text-2xl md:pt-0 lg:pt-0 pt-14 flex justify-center items-center text-center dark:text-white px-4 sm:px-6">
          From developers and innovators to thought leaders in the Web3 space,
          our graduates are transforming the future of technology.
        </p>
      </section>

      <div className="px-4 md:px-8 lg:px-16 py-10">
        <h1 className="flex justify-center items-center text-3xl dark:text-white font-bold">
          Our Alumni
        </h1>
        {/* <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center items-center">
          {getAllCohortsData.data.cohorts?.map((cohort:any) => (
            <div
            key={cohort.id}
            onClick={() => navigate(`/alumni/${cohort.slug}`, { state: { cohort } })}
            className="w-full md:w-[48%] lg:w-[45%] xl:w-[48%] border shadow-lg  overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
          >
              <div className="p-4">
                <img src={cohort.image} alt={cohort.name} className="w-full h-auto object-cover rounded-lg" />
                <h2 className="text-xl font-bold mt-4 dark:text-white">{cohort.name}</h2>
                <p className="text-gray-500 dark:text-gray-300">Start Date: {new Date(cohort.start_date).toLocaleDateString()}</p>
                <p className="text-gray-500 dark:text-gray-300">End Date: {new Date(cohort.end_date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center items-center">
          {getAllCohortsData.data.cohorts?.map((cohort: any) => (
            <div
              key={cohort.id}
              onClick={() =>
                navigate(`/alumni/${cohort.slug}`, { state: { cohort } })
              }
              className="relative w-full md:w-[48%] lg:w-[45%] xl:w-[48%] border h-[280px] shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            >
            
              <img
                src={cohort.image}
                alt={cohort.name}
                className="absolute inset-0 w-full h-full z-0"
              />

          
              <div className="relative z-10  p-5 mt-40  bg-black bg-opacity-50 text-white rounded-lg">
                <h2 className="text-xl font-bold mt-4">{cohort.name}</h2>
                <p className="text-gray-300">
                  Start Date: {new Date(cohort.start_date).toLocaleDateString()}
                </p>
                <p className="text-gray-300">
                  End Date: {new Date(cohort.end_date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
