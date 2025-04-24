import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import BaseUrl from "../../services/http";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";

interface PastEventDetails {
  id: number;
  title: string;
  description: string;
  image: string;
  youtube_link?: string;
  slug: string;
  start_date: string;
  end_date: string;
  event_photos?: string[];
}

const PastEventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [eventDetails, setEventDetails] = useState<PastEventDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!slug) {
        setError("No event slug provided");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const response = await BaseUrl.httpGetEventBySlug(slug);
        console.log("Full API Response:", response);

        if (response?.event) {
          setEventDetails(response.event);
        } else {
          setError("Event not found");
        }
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(
          err?.response?.data?.message ||
            "Failed to fetch event details. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventDetails();
  }, [slug]);

  // Function to convert YouTube link to embed URL
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return "";
    // Handle different YouTube URL formats
    const videoId = url.match(
      /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/
    );
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : "";
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/4 mb-8" />
        <Skeleton className="h-40 w-full mb-8" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (error || !eventDetails) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-red-500 mb-4">
            {error || "Unable to load event details"}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Please try again later or contact support if the problem persists.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blockfuse Labs - Past Events</title>
        <meta
          name="description"
          content="Explore past events hosted by Blockfuse Labs, showcasing groundbreaking blockchain innovations, workshops, and community meetups."
        />
        <meta property="og:title" content="Past Events - Blockfuse Labs" />
        <meta
          property="og:description"
          content="Discover highlights from past events by Blockfuse Labs, featuring expert panels, project launches, and insights into blockchain technology."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="max-w-4xl min-h-screen mx-auto px-6 py-36">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">
          {eventDetails.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {new Date(eventDetails.start_date).toLocaleDateString()}
          <div className="flex justify-items-center gap-4 mt-4">
            {eventDetails.youtube_link && (
              <a
                href={eventDetails.youtube_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 cursor-pointer hover:underline dark:text-blue-400"
                aria-label="YouTube link"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a2.99 2.99 0 00-2.108-2.118C19.354 3.5 12 3.5 12 3.5s-7.354 0-9.39.568A2.99 2.99 0 00.502 6.186 31.836 31.836 0 000 12a31.841 31.841 0 00.502 5.814 2.99 2.99 0 002.108 2.118C4.646 20.5 12 20.5 12 20.5s7.354 0 9.39-.568a2.99 2.99 0 002.108-2.118A31.838 31.838 0 0024 12a31.834 31.834 0 00-.502-5.814zM9.75 15.019v-6.038L15.5 12l-5.75 3.019z" />
                </svg>
                YouTube
              </a>
            )}
            {eventDetails.twitter_link && (
              <a
                href={eventDetails.twitter_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 cursor-pointer hover:underline dark:text-blue-400"
                aria-label="Twitter link"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.944 4.569a9.972 9.972 0 01-2.828.775A4.92 4.92 0 0023.337 3.2a9.864 9.864 0 01-3.127 1.184A4.916 4.916 0 0016.616 2c-2.736 0-4.96 2.228-4.96 4.964 0 .39.04.765.127 1.124C7.692 7.85 4.064 5.885 1.64 2.905a4.935 4.935 0 00-.671 2.49c0 1.72.877 3.235 2.214 4.117a4.92 4.92 0 01-2.248-.622v.062c0 2.404 1.706 4.418 3.963 4.872a4.935 4.935 0 01-2.237.085 4.921 4.921 0 004.604 3.419A9.867 9.867 0 010 19.543a13.906 13.906 0 007.548 2.209c9.056 0 14.004-7.506 14.004-14.004 0-.21-.004-.422-.014-.632a10.004 10.004 0 002.406-2.547z" />
                </svg>
                Twitter
              </a>
            )}
          </div>
        </p>

        {eventDetails.image && (
          <div className="mb-8">
            <img
              src={eventDetails.image}
              alt={eventDetails.title}
              className="w-full h-[500px] object-contain rounded shadow-lg"
            />
          </div>
        )}

        <ReactMarkdown className="dark:text-white text-lg prose dark:prose-invert max-w-none mb-12">
          {eventDetails.description}
        </ReactMarkdown>

        {eventDetails.event_photos && eventDetails.event_photos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Event Photos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {eventDetails.event_photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo.photo_url}
                  alt={`Event photo ${index + 1}`}
                  className="cursor-pointer rounded-lg shadow"
                  onClick={() => {
                    setLightboxIndex(index);
                    setIsLightboxOpen(true);
                  }}
                />
              ))}
            </div>

            <Lightbox
              open={isLightboxOpen}
              close={() => setIsLightboxOpen(false)}
              slides={eventDetails.event_photos.map((photo) => ({
                src: photo.photo_url,
              }))}
              index={lightboxIndex}
              onIndexChange={setLightboxIndex}
            />
          </div>
        )}

        {eventDetails.youtube_link && (
          <div className="mb-12 mt-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Event Recording
            </h2>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={getYoutubeEmbedUrl(eventDetails.youtube_link)}
                title="Event Recording"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PastEventDetail;
