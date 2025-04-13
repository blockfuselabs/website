import React from "react";
import { ArrowUpRight } from "lucide-react";
import Blockies from "react-blockies";

const BlogCard = ({ article, size = "normal", formatDate, navigateToBlogPost }) => {
  return (
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
};

export default BlogCard;