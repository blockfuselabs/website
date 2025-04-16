import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet";
import Blockies from "react-blockies";
import useArticlesQuery from "../../hooks/useArticlesQuery";
import BlogCard from "../components/BlogCard";
import FeatureCard from "../components/FeatureCard";
import SkeletonCard from "../components/SkeletonCard";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const navigate = useNavigate();

  const {
    articles = [],
    articlesError,
    isArticlesLoading,
  } = useArticlesQuery(true);

  // Process articles to remove markdown syntax
  const processedArticles = Array.isArray(articles) 
    ? articles.map(article => ({
        ...article,
        title: cleanMarkdown(article.title || ''),
        subtitle: cleanMarkdown(article.subtitle || ''),
        excerpt: cleanMarkdown(article.excerpt || ''),
        content: cleanMarkdown(article.content || '')
      }))
    : [];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = processedArticles.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(processedArticles.length / postsPerPage);

  // Function to clean markdown syntax from text
  function cleanMarkdown(text) {
    if (!text) return '';
    
    return text
      // Remove headers (# Header)
      .replace(/#+\s+/g, '')
      // Remove bold/italic markers
      .replace(/\*\*|__|\*|_/g, '')
      // Remove image markdown ![alt](url)
      .replace(/!\[(.*?)\]\((.*?)\)/g, '$1')
      // Remove link markdown [text](url)
      .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
      // Remove blockquotes
      .replace(/^\>\s+/gm, '')
      // Remove horizontal rules
      .replace(/^\-{3,}|^\*{3,}|^_{3,}/gm, '')
      // Remove code blocks and inline code
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`([^`]+)`/g, '$1')
      // Remove task lists
      .replace(/- \[ \]|- \[x\]/g, '')
      // Remove HTML tags
      .replace(/<[^>]*>/g, '')
      // Remove excess whitespace
      .replace(/\s+/g, ' ')
      .trim();
  }

  const navigateToBlogPost = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Function to truncate content without breaking words
  const truncateContent = (content, maxLength = 150) => {
    if (!content) return "";
    if (content.length <= maxLength) return content;
    // Find the last space before maxLength
    const lastSpace = content.substring(0, maxLength).lastIndexOf(' ');
    // If no space found, just cut at maxLength
    const truncateAt = lastSpace > 0 ? lastSpace : maxLength;
    return content.substring(0, truncateAt).trim() + "...";
  };

  if (articlesError) {
    return (
      <div className="min-h-screen flex items-center justify-center overflow-x-hidden">
        <div className="text-red-500">
          Error loading articles. Please try again later.
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blockfuse Labs Blog",
    "description": "Blockchain technology, distributed ledgers, zero-knowledge proofs, consensus mechanisms, smart contracts, and cryptographic security.",
    "url": window.location.href,
    "publisher": {
      "@type": "Organization",
      "name": "Blockfuse Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yoursite.com/logo.png" // Update with your actual logo URL
      }
    }
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Blockfuse Labs Blog | Blockchain Technology Insights</title>
        <meta
          name="description"
          content="Explore expert insights on blockchain technology, distributed ledgers, zero-knowledge proofs, consensus mechanisms, smart contracts, and cryptographic security."
        />
        <meta property="og:title" content="Blockfuse Labs Blog | Blockchain Technology Insights" />
        <meta
          property="og:description"
          content="Explore expert insights on blockchain technology, distributed ledgers, zero-knowledge proofs, consensus mechanisms, smart contracts, and cryptographic security."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yoursite.com/blog-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blockfuse Labs Blog | Blockchain Technology Insights" />
        <meta name="twitter:description" content="Explore expert insights on blockchain technology, distributed ledgers, zero-knowledge proofs, consensus mechanisms, smart contracts, and cryptographic security." />
        <meta name="twitter:image" content="https://yoursite.com/blog-preview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Header with gradient background */}
        <div className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 break-words">
              Blockfuse Labs Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl break-words">
              Blockchain technology, distributed ledgers, zero-knowledge proofs,
              consensus mechanisms, smart contracts, and cryptographic security.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
          {/* Featured Post - Large Banner */}
          {isArticlesLoading ? (
            <div className="w-full h-64 sm:h-96 md:h-[400px] lg:h-[500px] bg-gray-800 animate-pulse rounded-lg mb-8 sm:mb-12 md:mb-16"></div>
          ) : processedArticles.length > 0 ? (
            <div className="mb-8 sm:mb-12 md:mb-16">
              <FeatureCard 
                article={processedArticles[0]} 
                formatDate={formatDate} 
                navigateToBlogPost={navigateToBlogPost} 
              />
            </div>
          ) : null}

          {/* First Row of Cards - Two Cards */}
          {isArticlesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : processedArticles.length > 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              <BlogCard 
                article={processedArticles[1]} 
                size="large" 
                formatDate={formatDate} 
                navigateToBlogPost={navigateToBlogPost} 
              />
              <BlogCard 
                article={processedArticles[2]} 
                size="large" 
                formatDate={formatDate} 
                navigateToBlogPost={navigateToBlogPost} 
              />
            </div>
          ) : null}

          {/* Second Row of Cards - Two Cards */}
          {isArticlesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : processedArticles.length > 4 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              <BlogCard 
                article={processedArticles[3]} 
                formatDate={formatDate} 
                navigateToBlogPost={navigateToBlogPost} 
              />
              <BlogCard 
                article={processedArticles[4]} 
                formatDate={formatDate} 
                navigateToBlogPost={navigateToBlogPost} 
              />
            </div>
          ) : null}

          {/* Remaining Cards - Three per Row */}
          {isArticlesLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : processedArticles.length > 5 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {processedArticles.slice(5).map((article) => (
                <BlogCard 
                  key={article.id} 
                  article={article} 
                  formatDate={formatDate} 
                  navigateToBlogPost={navigateToBlogPost} 
                />
              ))}
            </div>
          ) : null}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center flex-wrap mt-10 sm:mt-16 gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 sm:px-4 py-2 rounded-md transition-colors duration-200 
                  ${
                    currentPage === index + 1
                      ? "bg-purple-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;