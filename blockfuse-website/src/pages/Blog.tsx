import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import useArticlesQuery from "../../hooks/useArticlesQuery";
import Blockies from "react-blockies"; 

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
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
  console.log(currentPosts);
  const totalPages = Math.ceil(
    (Array.isArray(articles) ? articles.length : 0) / postsPerPage
  );

  const navigateToBlogPost = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const SkeletonCard = () => (
    <div className="overflow-hidden bg-gray-700 animate-pulse p-6">
      <div className="h-48 bg-gray-600 mb-4"></div>
      <div className="h-6 bg-gray-500 w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-500 w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-500 w-full mb-2"></div>
      <div className="h-4 bg-gray-500 w-4/5 mb-2"></div>
      <div className="h-4 bg-gray-500 w-2/3"></div>
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
    <div className="min-h-screen px-6 py-12 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-4xl text-purple-500 text-center mb-16">Blog</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isArticlesLoading
          ? Array.from({ length: postsPerPage }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : currentPosts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden cursor-pointer group border border-purple-500 hover:bg-gray-700 transition-all duration-300"
                onClick={() => navigateToBlogPost(post.slug)}
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="py-6 px-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-purple-400">Article</span>
                    <ArrowUpRight className="w-5 h-5 text-purple-400 transform group-hover:translate-x-1 transition-transform" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.content}
                  </p>

                  <div className="flex items-center gap-3">
                  <Blockies
                    seed={post.author || "default-seed"} 
                    size={10}
                    scale={3}
                    className="rounded-full"
                  />
                    <div className="flex flex-col">
                      <span className="text-sm text-white">
                        {post.author_name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
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
  );
};

export default BlogPage;
