import React, { useState } from 'react';
import Button from '../components/Buttons';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('upcoming'); // 'upcoming' or 'past'
  
  // Sample events data - replace with your actual data
  const allEvents = {
    upcoming: [
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
    ],
    past: [
      {
        id: 4,
        title: "Web3 Summit 2023",
        date: "December 15, 2023",
        image: "/src/assets/images/event1.png",
        description: "Lorem ipsum dolor sit amet consectetur. Faucibus enim eleifend pretium massa risus orci dignissim. In et ornare ullamcorper.",
      },
      {
        id: 5,
        title: "DeFi Conference",
        date: "November 20, 2023",
        image: "/src/assets/images/event2.png",
        description: "Lorem ipsum dolor sit amet consectetur. Faucibus enim eleifend pretium massa risus orci dignissim. In et ornare ullamcorper.",
      },
    ]
  };

  const eventsPerPage = 6;
  const currentEvents = allEvents[activeFilter];
  const totalPages = Math.ceil(currentEvents.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const paginatedEvents = currentEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); 
  };

  return (
    <>
      <section className="relative flex items-center justify-center h-screen px-6 sm:px-8 md:px-16 lg:px-24">
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
        {/* Filter Buttons */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl dark:text-white">
            {activeFilter === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
          </h1>
          <div className="flex gap-4">
            <Button
              onClick={() => handleFilterChange('upcoming')}
              className={`px-6 py-2 transition-all ${
                activeFilter === 'upcoming'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Upcoming Events
            </Button>
            <Button
              onClick={() => handleFilterChange('past')}
              className={`px-6 py-2  transition-all ${
                activeFilter === 'past'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Past Events
            </Button>
          </div>
        </div>
{/* Events Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedEvents.map((event) => (
          <div key={event.id} className="bg-white dark:bg-[#1F1E23] overflow-hidden shadow-lg border border-purple-400 relative h-[600px]">
            {/* Image Container with Gradient Overlay */}
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
                <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                <p className="text-sm opacity-90">{event.date}</p>
              </div>
            </div>
            
            {/* Description Section */}
            <div className="px-6 py-8 flex flex-col justify-between h-[calc(600px-384px)]">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {event.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-800 dark:hover:text-gray-200">
                  See more
                </button>
                <Button
                 style={{
                  width: "100%",
                  maxWidth: "200px",
                }}
              >
                  Register now!
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div> 
        {/* Pagination */}
        {currentEvents.length > eventsPerPage && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              className="bg-gray-700 p-2"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            
            <span className="text-sm dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              className="bg-gray-700 p-2"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default EventsPage;