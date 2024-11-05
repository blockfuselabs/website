import React from "react";
import item1 from "../assets/images/team9.png";
import item2 from "../assets/images/team10.png";
import item3 from "../assets/images/team7.png";
import item4 from "../assets/images/team8.png";
const AlGallery = () => {
  const images = [
    { src: item1, alt: "item1" },
    { src: item2, alt: "item2" },
    { src: item3, alt: "item3" },
    { src: item4, alt: "item4" },
    { src: item1, alt: "item1" },
    { src: item2, alt: "item2" },
    { src: item3, alt: "item3" },
    { src: item4, alt: "item4" },
  ];

  return (
    <div className="mt-20 mx-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlGallery;
