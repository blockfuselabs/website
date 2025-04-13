import React from "react";
import { ArrowUpRight } from "lucide-react";
import Blockies from "react-blockies";

const FeatureCard = ({ article, formatDate, navigateToBlogPost }) => {
  return (
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
};

export default FeatureCard;