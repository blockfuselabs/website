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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Array.isArray(articles)
    ? articles.slice(indexOfFirstPost, indexOfLastPost)
    : [];

  const totalPages = Math.ceil(
    (Array.isArray(articles) ? articles.length : 0) / postsPerPage
  );

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

  if (articlesError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">
          Error loading articles. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Blockfuse Labs Blog</title>
        <meta
          name="description"
          content="Blockchain technology, distributed ledgers, zero-knowledge proofs, consensus mechanisms, smart contracts, and cryptographic security."
        />
        <meta property="og:title" content="Blockfuse Labs Blog" />
        <meta
          property="og:description"
          content="Blockchain technology, distributed ledgers, zero-knowledge proofs, consensus mechanisms, smart contracts, and cryptographic security."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Header with gradient background */}
        <div className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-32 md:py-40 lg:py-40 px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Blockfuse Labs Blog
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Blockchain technology, distributed ledgers, zero-knowledge proofs,
              consensus mechanisms, smart contracts, and cryptographic security.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 py-16">
          {/* Featured Post - Large Banner */}
          {isArticlesLoading ? (
            <div className="w-full h-[500px] bg-gray-800 animate-pulse rounded-lg mb-16"></div>
          ) : articles.length > 0 ? (
            <div className="mb-16">
              <FeatureCard article={articles[0]} formatDate={formatDate} navigateToBlogPost={navigateToBlogPost} />
            </div>
          ) : null}

          {/* First Row of Cards - Two Cards */}
          {isArticlesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : articles.length > 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <BlogCard article={articles[1]} size="large" formatDate={formatDate} navigateToBlogPost={navigateToBlogPost} />
              <BlogCard article={articles[2]} size="large" formatDate={formatDate} navigateToBlogPost={navigateToBlogPost} />
            </div>
          ) : null}

          {/* Second Row of Cards - Two Cards */}
          {isArticlesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : articles.length > 4 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <BlogCard article={articles[3]} formatDate={formatDate} navigateToBlogPost={navigateToBlogPost} />
              <BlogCard article={articles[4]} formatDate={formatDate} navigateToBlogPost={navigateToBlogPost} />
            </div>
          ) : null}

          {/* Remaining Cards - Three per Row */}
          {isArticlesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : articles.length > 5 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(5).map((article) => (
                <BlogCard key={article.id} article={article} formatDate={formatDate} navigateToBlogPost={navigateToBlogPost} />
              ))}
            </div>
          ) : null}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16 gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-md transition-colors duration-200 
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