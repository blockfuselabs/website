import React, { useState } from 'react';
import Button  from '../components/Buttons';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample events data - replace with your actual data
  const events = [
    {
      id: 1,
      title: "Ripple Effects: Wallet Integration and Innovation",
      date: "April 28, 2024",
      image: "/src/assets/images/event1.png",
      description: "Lorem ipsum dolor sit amet consectetur. Faucibus enim eleifend pretium massa risus orci dignissim. In et ornare ullamcorper.",
    },
    {
      id: 2,
      title: "Bitcoin Development Workshop",
      date: "April 28, 2024",
      image: "/src/assets/images/event2.png",
      description: "Lorem ipsum dolor sit amet consectetur. Faucibus enim eleifend pretium massa risus orci dignissim. In et ornare ullamcorper.",
    },
    {
      id: 3,
      title: "Binance Trading Masterclass",
      date: "April 28, 2024",
      image: "/src/assets/images/event2.png",
      description: "Lorem ipsum dolor sit amet consectetur. Faucibus enim eleifend pretium massa risus orci dignissim. In et ornare ullamcorper.",
    },
    // Add more events as needed
  ];

  const eventsPerPage = 6;
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen px-6 py-36 sm:px-8 md:px-16 lg:px-24">
        {/* Background Image */}
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

        {/* Text Content */}
        <div className="relative text-center z-10">
          <header>
            <h1 className="text-5xl md:text-6xl dark:text-white">
              Discover Upcoming{" "}
              <span className="text-purple-500 font-bold">Blockchain Events</span>
            </h1>
          </header>
          <div className="-space-y-1">
            <p className="mt-4 text-lg md:text-xl dark:text-gray-300">
              Stay ahead of the curve with our curated selection of
            </p>
            <p className="mt-4 text-lg md:text-xl dark:text-gray-300">
              exclusive blockchain conferences, workshops, and meetups
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-6 py-16 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event) => (
            <div key={event.id} className="bg-white dark:bg-gray-800  overflow-hidden shadow-lg">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{event.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{event.date}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <Button variant="secondary" size="sm">
                  See more
                </Button>
              </div>
            </div>
          ))}
        </div>

     {/* Pagination */}
     <div className="mt-12 flex justify-center items-center gap-4">
          <button
           className='bg-gray-700 p-2'
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>
          
          <span className="text-sm dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            className='bg-gray-700 p-2'
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      </section>
    </>
  );
};

export default EventsPage;