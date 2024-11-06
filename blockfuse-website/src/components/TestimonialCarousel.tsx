import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Create data array for testimonials
const testimonialData = [
  {
    date: "May 8, 2023",
    name: "Person's Full Name",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    image: "Testimonial",
    boxImage: "Box1"
  },
  {
    date: "June 15, 2023",
    name: "John Anderson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    image: "Testimonial",
    boxImage: "Box1"
  },
  {
    date: "July 22, 2023",
    name: "Sarah Johnson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    image: "Testimonial",
    boxImage: "Box1"
  },
  {
    date: "August 10, 2023",
    name: "Michael Chen",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    image: "Testimonial",
    boxImage: "Box1"
  },
  {
    date: "September 5, 2023",
    name: "Emma Wilson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    image: "Testimonial",
    boxImage: "Box1"
  }
];

const TestimonialsSection = ({ Testimonial, Box1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="px-6 py-20 sm:px-8 md:px-16 lg:px-24"
      role="region"
      aria-labelledby="testimonials"
    >
      <header id="testimonials" className="text-center mb-12">
        <h2 className="text-3xl font-semibold dark:text-white">
          Testimonials
        </h2>
      </header>

      <div className="max-w-4xl mx-auto relative">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-purple-600 p-2 rounded-full sm:-left-10"
        >
          <ChevronLeft className="dark:text-white" size={20} />
        </button>

        {/* Testimonial Cards Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialData.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0"
              >
                <div className="dark:bg-black border border-purple-500 mx-4 h-auto sm:mx-12 sm:h-60">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
                    <div className="w-full sm:w-52 h-48 sm:h-[14.8rem] flex-shrink-0">
                      <img
                        src={Testimonial}
                        alt="Testimonial"
                        className="w-full h-full object-cover relative z-10"
                      />
                      {/* Box1 behind Imageone */}
                      <img
                        src={Box1}
                        alt="Secondary Image"
                        className="absolute w-40 h-40 sm:w-32 sm:h-60 -top-6 sm:-top-2 left-2 sm:left-0 z-0"
                        style={{ transform: "translate(-25%, -10%)" }}
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="text-xs sm:text-sm dark:text-gray-400 mb-2">
                        {testimonial.date}
                      </p>
                      <h3 className="text-lg sm:text-xl font-semibold dark:text-white mb-2 sm:mb-4">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm dark:text-gray-300">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-purple-600 p-2 rounded-full sm:-right-10"
        >
          <ChevronRight className="dark:text-white" size={20} />
        </button>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonialData.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-purple-600' : 'bg-gray-600'
              } cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;