import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HackMD from "../assets/logos/hackmd.svg";
import Ethereum from "../assets/logos/Ethereum-Foundation.png";

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { id: 1, name: "HackMD", logo: HackMD },
    { id: 2, name: "", logo: Ethereum },

 
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  const nextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold dark:text-white text-center mb-12">
        Our Partners
      </h2>
      
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors partner-carousel-button"
          aria-label="Previous partners"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors partner-carousel-button"
          aria-label="Next partners"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="overflow-hidden px-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            <div className="flex gap-8 min-w-full justify-center">
              {partners
                .slice(
                  currentIndex * itemsPerPage,
                  currentIndex * itemsPerPage + itemsPerPage
                )
                .map((partner) => (
                  <div
                    key={partner.id}
                    className="flex flex-col items-center gap-4"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-[300px] h-[100px] object-contain hover:scale-105 transition-transform"
                    />
                    <span className="dark:text-gray-200 text-3xl font-bold">{partner.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-500' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;