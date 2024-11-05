


import React from "react";
import item1 from "../assets/images/team9.png";
import item2 from "../assets/images/team10.png";
import item3 from "../assets/images/team7.png";
import item4 from "../assets/images/team8.png";

const AlGallery = () => {
  const images = [
    { src: item1, alt: "item1", name: "Team Member 1", desc: "Position 1" },
    { src: item2, alt: "item2", name: "Team Member 2", desc: "Position 2" },
    { src: item3, alt: "item3", name: "Team Member 3", desc: "Position 3" },
    { src: item4, alt: "item4", name: "Team Member 4", desc: "Position 4" },
    { src: item1, alt: "item1", name: "Team Member 5", desc: "Position 5" },
    { src: item2, alt: "item2", name: "Team Member 6", desc: "Position 6" },
    { src: item3, alt: "item3", name: "Team Member 7", desc: "Position 7" },
    { src: item4, alt: "item4", name: "Team Member 8", desc: "Position 8" },
  ];

  return (
    <div className="mt-20 dark:text-white mx-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover"
            />
            <div className="text-center mt-2">
              <p className="font-semibold">{image.name}</p>
              <p className="text-sm text-gray-500">{image.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlGallery;
