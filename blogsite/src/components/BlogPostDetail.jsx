import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link as LinkIcon, Share } from "lucide-react";
import { RWebShare } from "react-web-share";
import ReactMarkdown from "react-markdown";
import Blockies from "react-blockies";
import BaseUrl from "../services/http";
import useArticlesQuery from "../../hooks/useArticlesQuery";

const BlogPostDetail = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [email, setEmail] = useState("");
  
  // Fetch all articles for the related posts section
  const { 
    articles: allArticles, 
    isArticlesLoading 
  } = useArticlesQuery();

  const truncateContent = (content, maxLength = 200) => {
    if (!content) return "";
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
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
        console.log("API Response:", response);
        
        if (response && response.article) {
          setPost(response.article);
          // Scroll to top when article loads
          window.scrollTo(0, 0);
        } else {
          setError("Article not found");
        }
      } catch (err) {
        console.error("Error fetching article:", err);
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

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
  
    console.log("Subscribing email:", email);
   
    setEmail("");
   
    alert("Thanks for subscribing!");
  };

  
  const getRelatedArticles = () => {
    if (!allArticles || !post) return [];

    return allArticles
      .filter(article => article.id !== post.id)
      .slice(0, 3); 
  };

  if (isLoading) {
    return (
      <div className=" mx-auto h-screen px-6 mt-10 py-20 bg-black text-white">
        <div className="h-40 w-full mb-8 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-40 w-full mb-8 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-40 w-full mb-8 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-40 w-full mb-8 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-40 w-full mb-8 bg-gray-800 animate-pulse rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        {error}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Article not found.
      </div>
    );
  }

  const articleUrl = window.location.href;
  const relatedArticles = getRelatedArticles();

  return (
    <>
      <Helmet>
        <title>{post.title} | Blockfuse Labs - Blog Details</title>
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

      <div className="bg-black text-white min-h-screen">
        <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tag */}
          <div className="text-center mb-4">
            <span className="text-gray-400 text-sm">{post.category || "Distributed Systems"}</span>
          </div>
          
          {/* Article Title */}
          <h1 className="text-3xl lg:text-5xl font-bold text-center mb-4">
            {post.title}
          </h1>
          
          {/* Article Subtitle*/}
          {post.subtitle && (
            <p className="text-gray-400 text-center mb-6 text-lg">
              {post.subtitle}
            </p>
          )}
          
          {/* Date and Author with Avatar*/}
          <div className="flex items-center justify-center mb-10">
            <div className="mr-3">
              <Blockies
                seed={post.author || "default-seed"}
                size={10}
                scale={3}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="font-medium">
                {post.author_name || post.author || "Anonymous"}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                • {new Date(post.createdAt).toLocaleTimeString()}
              </div>
            </div>
          </div>
          
          {/* Share Buttons*/}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={handleCopy}
              className="bg-purple-500 flex items-center justify-center text-white px-4 py-1 md:px-10 md:py-2 rounded"
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
            >
              <button className="bg-purple-500 flex items-center justify-center text-white px-7 py-1 md:px-10 md:py-2 rounded">
                <Share className="w-4 h-4" />
                <span className="ml-2">Share</span>
              </button>
            </RWebShare>
          </div>
          {copySuccess && (
            <p className="text-green-500 text-center mt-2 mb-4">URL copied to clipboard!</p>
          )}
          
          {/* Main Image*/}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-3xl">
              <img
                src={post.image || "/default-main-image.png"}
                alt={post.title}
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
              {post.image_caption && (
                <p className="text-sm text-gray-500 text-center mt-2 italic">
                  {post.image_caption}
                </p>
              )}
            </div>
          </div>
          
          {/* Article Content */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="text-gray-300 space-y-4 lg:space-y-6 w-full prose prose-invert prose-lg">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
          
          {/* Subscribe Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Sign up for more like this.</h2>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow p-3 rounded-l text-black outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-pink-500 text-white px-4 py-3 rounded-r hover:bg-pink-600 transition duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((article) => (
                  <div key={article.id || article._id} className="cursor-pointer" onClick={() => navigate(`/blog/${article.slug}`)}>
                    <div className="mb-4 h-48 overflow-hidden">
                      <img
                        src={article.image || "/default-article-image.png"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {article.excerpt || truncateContent(article.content)}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>
                        {new Date(article.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="mx-1">•</span>
                      <span>{article.read_time || "5 min"} read</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Bottom Subscribe Button (Mobile) */}
          <div className="fixed bottom-4 right-4 md:hidden">
            <button 
              onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-pink-500 text-white rounded-full p-4 shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetail;