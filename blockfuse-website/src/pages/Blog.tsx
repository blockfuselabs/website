import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import useArticlesQuery from "../../hooks/useArticlesQuery";
import Blockies from "react-blockies";
import { Helmet } from "react-helmet";

// TypeScript interfaces
interface Article {
  id: string;
  slug: string;
  title: string;
  content: string;
  image: string;
  author?: string;
  author_name?: string;
  createdAt?: string;
  category?: string;
  readTime?: string;
}

const BlogPage: React.FC = () => {
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

  const navigateToBlogPost = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const SkeletonCard = () => (
    <div className="overflow-hidden bg-gray-800 animate-pulse rounded-md p-6">
      <div className="h-48 bg-gray-700 mb-4 rounded"></div>
      <div className="h-6 bg-gray-700 w-1/2 mb-2 rounded"></div>
      <div className="h-4 bg-gray-700 w-1/3 mb-4 rounded"></div>
      <div className="h-4 bg-gray-700 w-full mb-2 rounded"></div>
      <div className="h-4 bg-gray-700 w-4/5 mb-2 rounded"></div>
      <div className="h-4 bg-gray-700 w-2/3 rounded"></div>
    </div>
  );

  const FeatureCard = ({ article }: { article: Article }) => (
    <div
      className="relative w-full overflow-hidden cursor-pointer group bg-black rounded-lg min-h-[400px] md:min-h-[500px]"
      onClick={() => navigateToBlogPost(article.slug)}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full">
            Featured
          </span>
          <ArrowUpRight className="w-5 h-5 text-purple-300 transform group-hover:translate-x-1 transition-transform" />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
          {article.title}
        </h1>

        <p className="text-gray-300 mb-6 line-clamp-2">{article.content}</p>

        <div className="flex items-center gap-3">
          <Blockies
            seed={article.author || "default-seed"}
            size={10}
            scale={3}
            className="rounded-full"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm text-white">
              {article.author_name || "Anonymous"}
            </span>
            <span className="text-xs text-gray-400">
              {formatDate(article.createdAt)} • {article.readTime || "5 min"} read
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const BlogCard = ({
    article,
    size = "normal",
  }: {
    article: Article;
    size?: "large" | "normal";
  }) => (
    <div
      className={`overflow-hidden cursor-pointer group bg-black rounded-lg transition-all duration-300 h-full`}
      onClick={() => navigateToBlogPost(article.slug)}
    >
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className={`w-full object-cover ${
            size === "large" ? "h-72" : "h-56"
          }`}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-purple-300">
            {article.category || "Article"}
          </span>
          <ArrowUpRight className="w-5 h-5 text-purple-300 transform group-hover:translate-x-1 transition-transform" />
        </div>

        <h3
          className={`${
            size === "large" ? "text-2xl" : "text-xl"
          } font-semibold mb-3 line-clamp-2 text-white group-hover:text-purple-300 transition-colors`}
        >
          {article.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {article.content}
        </p>

        <div className="flex items-center gap-3">
          <Blockies
            seed={article.author || "default-seed"}
            size={10}
            scale={3}
            className="rounded-full"
          />
          <div className="flex flex-col items-start -ml-10">
            <span className="text-sm text-white">
              {article.author_name || "Anonymous"}
            </span>
            <span className="text-xs text-gray-400">
              {formatDate(article.createdAt)} • {article.readTime || "5 min"} read
            </span>
          </div>
        </div>
      </div>
    </div>
  );

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
              <FeatureCard article={articles[0]} />
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
              <BlogCard article={articles[1]} size="large" />
              <BlogCard article={articles[2]} size="large" />
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
              <BlogCard article={articles[3]} />
              <BlogCard article={articles[4]} />
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
                <BlogCard key={article.id} article={article} />
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