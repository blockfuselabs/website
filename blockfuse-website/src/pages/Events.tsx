import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../components/Buttons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  APIEvent,
  APIResponse,
  ProcessedEvent,
  SortedEvents,
} from "../../types/generated";

const EventsPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState<"upcoming" | "past">(
    "upcoming"
  );
  const [events, setEvents] = useState<APIResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 
  const truncateDescription = (
    description: string,
    maxLength: number = 200
  ) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + "...";
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/events`
        );
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();
        setEvents(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch events");
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
    const sortedEvents: SortedEvents = { upcoming: [], past: [] };

    events.data.events.forEach((event: APIEvent) => {
      const eventStartDate = new Date(event.start_date);
      const category = eventStartDate >= currentDate ? "upcoming" : "past";

      const processedEvent: ProcessedEvent = {
        id: event.id,
        title: event.title,
        date: new Date(event.start_date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        image: event.image,
        description: truncateDescription(event.description),
        link: event.link,
        registration_link: event.registration_link || "https://lu.ma/",
        endDate: new Date(event.end_date),
        slug: event.slug,
        past_event_details: event.past_event_details,
      };

      sortedEvents[category].push(processedEvent);
    });

    return sortedEvents;
  };

  const handleEventClick = (event: ProcessedEvent) => {
    if (activeFilter === "past") {
      navigate(`/events/${event.slug}`);
    } else {
      window.open(event.registration_link, "_blank", "noopener,noreferrer");
    }
  };

  const allEvents = processEvents();
  const currentEvents = allEvents[activeFilter];
  const eventsPerPage = 6;
  const totalPages = Math.ceil((currentEvents?.length || 0) / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const paginatedEvents =
    currentEvents?.slice(indexOfFirstEvent, indexOfLastEvent) || [];

  const handleFilterChange = (filter: "upcoming" | "past") => {
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
      {/* SEO Optimization */}
      <Helmet>
        <title>
          Blockchain Events | Discover Upcoming Conferences and Workshops
        </title>
        <meta
          name="description"
          content="Stay ahead of the curve with our curated selection of exclusive blockchain conferences, workshops, and meetups. Find and register for upcoming blockchain events."
        />
        <meta
          name="keywords"
          content="blockchain events, crypto conferences, blockchain workshops, web3 meetups"
        />
        <meta
          property="og:title"
          content="Blockchain Events | Upcoming Conferences and Workshops"
        />
        <meta
          property="og:description"
          content="Discover and register for exclusive blockchain events, conferences, and workshops."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <section className="relative flex items-center justify-center min-h-[50vh] md:h-screen px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="relative text-center z-10">
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Discover Upcoming{" "}
              <span className="text-purple-500 font-bold">
                Blockchain Events
              </span>
            </h1>
          </header>
          <div className="space-y-2 md:space-y-0 md:flex md:flex-col">
            <p className="mt-4 text-base sm:text-lg md:text-xl dark:text-gray-300">
              Stay ahead of the curve with our curated selection of
            </p>
            <p className="text-base sm:text-lg md:text-xl dark:text-gray-300">
              exclusive blockchain conferences, workshops, and meetups
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl dark:text-white">
            {activeFilter === "upcoming" ? "Upcoming Events" : "Past Events"}
          </h1>
          <div className="flex gap-4 w-full sm:w-auto">
            <Button
              onClick={() => handleFilterChange("upcoming")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 transition-all ${
                activeFilter === "upcoming"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Upcoming Events
            </Button>
            <Button
              onClick={() => handleFilterChange("past")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 transition-all ${
                activeFilter === "past"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {paginatedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-[#1F1E23] overflow-hidden shadow-lg border border-purple-400 relative h-[500px] sm:h-[600px]"
              >
                <div className="relative h-64 sm:h-96">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                  <img
                    src={`${event.image}`}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm opacity-90">{event.date}</p>
                  </div>
                </div>

                <div className="px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-between h-[calc(100%-16rem)] sm:h-[calc(600px-384px)]">
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-md">
                    {event.description}
                  </p>
                  <div className="flex justify-end gap-4 sm:gap-10 items-center mt-4">
                    {activeFilter === "past" && (
                      <a
                        href={`/events/${event.slug}`}
                        className="text-gray-600 dark:text-gray-400 text-base sm:text-lg hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        See more
                      </a>
                    )}
                    {activeFilter === "upcoming" ? (
                      <Button
                        onClick={() => handleEventClick(event)}
                        className="w-full max-w-[200px] py-2 bg-purple-500 text-white text-sm sm:text-base"
                      >
                        Register now!
                      </Button>
                    ) : (
                      <Button
                        className="w-full max-w-[200px] py-2 bg-gray-400 text-gray-600 cursor-not-allowed text-sm sm:text-base"
                        disabled
                      >
                        Ended
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentEvents?.length > eventsPerPage && (
          <div className="mt-8 sm:mt-12 flex justify-center items-center gap-4">
            <button
              className="bg-gray-700 p-2 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>

            <span className="text-sm dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="bg-gray-700 p-2 disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
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
