import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import BaseUrl from "../../services/http";

interface PastEventDetails {
    id: number;
    title: string;
    description: string;
    image: string;
    youtube_link?: string; 
    slug: string;
    start_date: string;
    end_date: string;
}

const PastEventDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [eventDetails, setEventDetails] = useState<PastEventDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
        if (!url) return '';
        // Handle different YouTube URL formats
        const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/);
        return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : '';
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
        <div className="max-w-4xl min-h-screen mx-auto px-6 py-36">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">
                {eventDetails.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                {new Date(eventDetails.start_date).toLocaleDateString()}
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

            <div className="dark:text-white text-lg prose dark:prose-invert max-w-none mb-12">
                <p>{eventDetails.description}</p>
            </div>

            {eventDetails.youtube_link && (
                <div className="mb-12">
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
    );
};

export default PastEventDetail;