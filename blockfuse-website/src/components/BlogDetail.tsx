<<<<<<< HEAD
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link, Share } from 'lucide-react';
import Button from './Buttons';

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = {
    id: 1,
    title: 'Breaking into Blockchain',
    date: '23 Jan 2024',
    time: '11:23 pm',
    author: 'Lana Steiner',
    authorAvatar: '/api/placeholder/48/48',
    mainImage: '/src/assets/images/Frame-3816.png',
    backgroundSvg: '/src/assets/svgs/box1.svg',
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.`,
    sections: [
      {
        title: 'Introduction',
        content: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.

        Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.`
      },
      {
        title: 'Lorem ipsum mattis nulla',
        content: `Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.

        Eget quis nibh lorem, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In quis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.`
      },
      {
        title: 'Sagittis et eu at elementum',
        content: `Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur nunc ac. Auctor rutrum lacus malesuada mauris massa arcu at. Velit suscipit lacus mi orci, diam dui eget ligula fringilla tincidunt. Arcu sit dignissim massa erat eu cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida purus.

        1. Lectus id duis vulputate etor enim gravida morbi.
        2. Magna ultrices dignissim augue velit, ultrices ultrices suspendisse. Auctor vel in vitae placerat.
        3. Suspendisse dapibus senectus eget sed duis purus.`
      }
    ]
  };

  return (
    <div className="h-auto">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header section with image and details */}
        <div className="grid grid-cols-2 gap-8 pt-12">
          {/* Left column with images */}
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute -top-12 left-4">
              <img 
                src={post.backgroundSvg}
                alt=""
                className="w-72 h-72"
              />
            </div>
            
            {/* Main image */}
            <div className="relative z-10 ml-16">
              <img 
                src={post.mainImage}
                alt={post.title}
                className="w-[480px] h-[480px] object-contain"
              />
            </div>
          </div>
    
          {/* Right column with content */}
          <div>
            {/* Date and time */}
            <div className="text-sm text-gray-400 mb-4">
              {post.date} • {post.time}
            </div>
    
            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-8">
              {post.title}
            </h1>
    
            {/* Buttons */}
            <div className="flex gap-4 mb-12">
              <Button style={{ width: "800px" }}>
                <Link className="w-4 h-4" />
                Copy link
              </Button>
              <Button style={{ width: "800px" }}>
                <Share className="w-4 h-4" />
                Share
              </Button>
            </div>
    
            {/* Author section */}
            <div className="mb-12">
              <h2 className="text-white text-lg mb-4">Author</h2>
              <div className="flex items-center gap-3">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-white font-medium">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
    
        {/* Border line */}
        <div className="w-full h-px bg-gray-800 my-16" />
    
        {/* Content section below the header */}
        <div className="max-w-5xl">
          {/* Article sections */}
          {post.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-6">
                {section.title}
              </h2>
              <div className="text-gray-300 space-y-6 w-full">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
=======
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
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
  );
};

export default BlogPostDetail;
