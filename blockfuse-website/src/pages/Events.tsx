import React, { useState, useEffect } from 'react';
import Button from '../components/Buttons';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface APIEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
  start_date: string;
  end_date: string;
  createdAt: string;
  updatedAt: string;
}

interface APIResponse {
  message: string;
  data: {
    events: APIEvent[];
    pagination: {
      total: number;
      per_page: number;
      current_page: number;
      total_pages: number;
      has_next_page: boolean;
      has_prev_page: boolean;
    };
    filters: Record<string, unknown>;
    sorting: {
      sortBy: string;
      sortOrder: string;
    };
  };
}

interface ProcessedEvent {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  link: string;
  endDate: Date;
  slug: string;
}

interface SortedEvents {
  upcoming: ProcessedEvent[];
  past: ProcessedEvent[];
}

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState<'upcoming' | 'past'>('upcoming');
  const [events, setEvents] = useState<APIResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/events`);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const processEvents = (): SortedEvents => {
    const defaultSort: SortedEvents = { upcoming: [], past: [] };
    
    if (!events?.data?.events) return defaultSort;

    const currentDate = new Date();
    const sortedEvents: SortedEvents = {
      upcoming: [],
      past: []
    };

    events.data.events.forEach((event: APIEvent) => {
      const eventStartDate = new Date(event.start_date);
      const category = eventStartDate >= currentDate ? 'upcoming' : 'past';
      
      const processedEvent: ProcessedEvent = {
        id: event.id,
        title: event.title,
        date: new Date(event.start_date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
        image: event.image,
        description: event.description,
        link: event.link,
        endDate: new Date(event.end_date),
        slug: event.slug
      };

      sortedEvents[category].push(processedEvent);
    });

    return sortedEvents;
  };

  const allEvents = processEvents();
  const currentEvents = allEvents[activeFilter];
  const eventsPerPage = 6;
  const totalPages = Math.ceil((currentEvents?.length || 0) / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const paginatedEvents = currentEvents?.slice(indexOfFirstEvent, indexOfLastEvent) || [];

  const handleFilterChange = (filter: 'upcoming' | 'past') => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-purple-500">Loading events...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <section className="relative flex items-center justify-center py-20 px-6 sm:px-8 md:px-16 lg:px-24">
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

      <section className="px-6 py-16 sm:px-8 md:px-16 lg:px-24">
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
              className={`px-6 py-2 transition-all ${
                activeFilter === 'past'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Past Events
            </Button>
          </div>
        </div>

        {paginatedEvents.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl dark:text-gray-300">
              No {activeFilter} events available at this time.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-[#1F1E23] overflow-hidden shadow-lg border border-purple-400 relative h-[600px]">
                <div className="relative h-96">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${event.image}`}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
                    <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm opacity-90">{event.date}</p>
                  </div>
                </div>
                
                <div className="px-6 py-8 flex flex-col justify-between h-[calc(600px-384px)]">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    {event.link && (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        See more
                      </a>
                    )}
                    <Button
                      className={`w-full max-w-[200px] py-2 ${
                        activeFilter === 'past' 
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                          : 'bg-purple-500 text-white'
                      }`}
                      disabled={activeFilter === 'past'}
                    >
                      {activeFilter === 'past' ? 'Ended' : 'Register now!'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentEvents?.length > eventsPerPage && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              className="bg-gray-700 p-2 disabled:opacity-50"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            
            <span className="text-sm dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              className="bg-gray-700 p-2 disabled:opacity-50"
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