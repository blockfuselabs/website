import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link as LinkIcon, Share } from "lucide-react";
import { RWebShare } from "react-web-share";
import Skeleton from "../components/Skeleton";

import Button from "./Buttons";
import BaseUrl from "../../services/http";
import { BlogPost, APIError } from "../../types/generated";

import Blockies from "react-blockies"; 


const BlogPostDetail = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const { slug } = useParams<{ slug: string }>();
  const [articleDetails, setArticleDetails] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [copySuccess, setCopySuccess] = useState(false);

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  
  useEffect(() => {
    const fetchArticleDetails = async () => {
      if (!slug) {
        setError("No article slug provided");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const response = await BaseUrl.httpGetArticleBySlug(slug);
        console.log(response.article);
        if (response.article != undefined) {
          setArticleDetails(response.article);
          setPost(response.article);
        } else {
          setError("Article not found");
        }
      } catch (err: any) {
        setError(
          err?.response?.data?.message ||
            "Failed to fetch article details. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticleDetails();
  }, [slug]);

  if (isLoading)
    return (
      <div className="max-w-4xl mx-auto px-6 py-28">
                <Skeleton className="h-40 w-full mb-8" />
          
            </div>
    );
  if (error)
    return (
      <div className="dark:text-white min-h-screen flex items-center justify-center">
        {error}
      </div>
    );
  if (!post)
    return (
      <div className="dark:text-white min-h-screen flex items-center justify-center">
        Article not found.
      </div>
    );

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const articleUrl = window.location.href;
 

  return (
    <>
      <Helmet>
        <title>{post.title} | Your Blog Name</title>
        <meta name="description" content={truncateContent(post.content)} />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={truncateContent(post.content)}
        />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="author" content={post.author} />
        <meta property="article:published_time" content={post.createdAt} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="">
        <div className="max-w-7xl  py-32 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 lg:pt-12">
            {/* Left column with images */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-12 left-4 hidden lg:block">
                <img
                  src="/src/assets/svgs/box1.svg"
                  alt="Background decoration"
                  className="w-48 h-48 lg:w-72 lg:h-72"
                />
              </div>

              {/* Main image from backend */}
              <div className="relative z-10 ml-0 lg:ml-16">
                <img
                  src={post.image || "/default-main-image.png"}
                  alt={post.title}
                  className="w-full h-auto lg:w-[480px] lg:h-[480px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right column with post details */}
            <div className="order-1 lg:order-2">
              <div className="text-sm text-gray-400 mb-4">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                • {new Date(post.createdAt).toLocaleTimeString()}
              </div>
              <h1 className="text-2xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
                {post.title}
              </h1>
              <div className="flex space-x-4">
                <button
                  onClick={handleCopy}
                  className="bg-purple-500 flex items-center justify-center text-white px-4 py-1 md:px-20 md:py-2"
                >
                  <LinkIcon className="w-4 h-4" />
                  <span className="ml-2">Copy link</span>
                </button>
                <RWebShare
        data={{
          text: post.title,
          url: articleUrl, 
          title: post.title,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="bg-purple-500 flex items-center justify-center text-white px-7 py-1 md:px-20 md:py-2 ">
          <Share className="w-4 h-4" />
          <span className="ml-2">Share</span>
        </button>
      </RWebShare>
              </div>
              {copySuccess && (
                <p className="text-green-500 mt-2">URL copied to clipboard!</p>
              )}
            
              <div className="mb-8 mt-3 lg:mb-12">
                <div className="flex items-center gap-3">
                <Blockies
                    seed={post.author || "default-seed"} 
                    size={10}
                    scale={3}
                    className="rounded-full"
                  />
                  <span className="text-white font-medium">{post.author}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article content */}
          <div className="w-full h-auto my-8 lg:my-16" />
          <div className="max-w-5xl mx-auto">
            <article className="text-gray-300 space-y-4 lg:space-y-6 w-full prose prose-invert prose-lg">
              {post.content &&
                post.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base lg:text-lg leading-relaxed"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetail;
