import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link as LinkIcon, Share } from "lucide-react";
import Button from "./Buttons";
import BaseUrl from "../../services/http";
import { BlogPost, APIError } from "../../types/generated";

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [copySuccess, setCopySuccess] = useState(false);

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const article = await BaseUrl.httpGetArticleById(id);
        setPost(article);
      } catch (err) {
        setError("Failed to load the article.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading)
    return (
      <div className="dark:text-white min-h-screen flex items-center justify-center">
        Loading...
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

  const handleShare = () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      navigator
        .share({
          title,
          url,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      const shareOptions = [
        {
          name: "Twitter",
          url: `https://twitter.com/share?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
        },
        {
          name: "LinkedIn",
          url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
        },
        {
          name: "Facebook",
          url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
        },
        {
          name: "WhatsApp",
          url: `https://wa.me/?text=${encodeURIComponent(
            title
          )}%20${encodeURIComponent(url)}`,
        },
        {
          name: "Mail",
          url: `mailto:?subject=${encodeURIComponent(
            title
          )}&body=${encodeURIComponent(url)}`,
        },
      ];

      const option = window.prompt(
        "Share via (Twitter, LinkedIn, Facebook, WhatsApp, Mail):"
      );

      if (option && option.trim()) {
        const selectedOption = shareOptions.find(
          (opt) => opt.name.toLowerCase() === option.trim().toLowerCase()
        );

        if (selectedOption) {
          window.open(selectedOption.url, "_blank");
        } else {
          alert("Invalid option");
        }
      } else {
        alert("No option selected or invalid input");
      }
    }
  };

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
                {new Date(post.createdAt).toLocaleDateString()} •{" "}
                {new Date(post.createdAt).toLocaleTimeString()}
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
                <button
                  onClick={handleShare}
                  className="bg-purple-500 flex items-center justify-center text-white px-7 py-1 md:px-20 md:py-2 "
                >
                  <Share className="w-4 h-4" />
                  <span className="ml-2">Share</span>
                </button>
              </div>
              {copySuccess && (
                <p className="text-green-500 mt-2">URL copied to clipboard!</p>
              )}
              <div className="mb-8 mt-3 lg:mb-12">
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorAvatar || "/default-avatar.png"}
                    alt={post.author || "Author"}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
                    loading="lazy"
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
