<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const BlogPage = () => {
  
  const samplePosts = [
    {
      id: 1,
      title: 'Breaking into Blockchain',
      description: 'Discover how our bootcamps provide the skills and confidence you need to launch a successful career in blockchain development.',
      date: '19 Jan 2024',
      author: 'Phoenix Baker',
      authorAvatar: '/src/assets/images/founder_TradeBrigde_Portrait.JPG',
      category: 'Product',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 2,
      title: 'Top Skills for Web3 Developers in 2024',
      description: 'Stay ahead in blockchain with essential Web3 skills, from smart contract programming to dApp development.',
      date: '19 Jan 2024',
      author: 'Phoenix Baker',
      authorAvatar: '/src/assets/images/founder_TradeBrigde_Portrait.JPG',
      category: 'Product',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 3,
      title: 'How Mentorship Boosts Your Blockchain Career',
      description: 'Explore the benefits of one-on-one mentorship in our bootcamps and how it accelerates learning and career growth.',
      date: '19 Jan 2024',
      author: 'Phoenix Baker',
      authorAvatar: '/src/assets/images/founder_TradeBrigde_Portrait.JPG',
      category: 'Product',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 4,
      title: 'Blockchain Beyond Bitcoin',
      description: 'Learn how blockchain technology is evolving and impacting various industries beyond just cryptocurrency.',
      date: '20 Jan 2024',
      author: 'Jordan Smith',
      authorAvatar: '/src/assets/images/founder_TradeBrigde_Portrait.JPG',
      category: 'Industry',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 5,
      title: 'Smart Contracts 101',
      description: 'A beginner’s guide to understanding and writing smart contracts in the Ethereum blockchain.',
      date: '21 Jan 2024',
      author: 'Alex Doe',
      authorAvatar: '/src/assets/images/founder_TradeBrigde_Portrait.JPG',
      category: 'Education',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 6,
      title: 'The Future of Decentralized Finance (DeFi)',
      description: 'An overview of DeFi’s potential to revolutionize finance and its key challenges.',
      date: '22 Jan 2024',
      author: 'Taylor Lee',
      authorAvatar: '/src/assets/images/founder_TradeBrigde_Portrait.JPG',
      category: 'Finance',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 7,
      title: 'NFTs: Beyond Art and Collectibles',
      description: 'Exploring practical uses for NFTs beyond art, including gaming, identity, and more.',
      date: '23 Jan 2024',
      author: 'Casey White',
      authorAvatar: '/api/placeholder/32/32',
      category: 'Innovation',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 8,
      title: 'Intro to DAOs',
      description: 'Discover the basics of Decentralized Autonomous Organizations and their role in the blockchain ecosystem.',
      date: '24 Jan 2024',
      author: 'Jamie Brown',
      authorAvatar: '/api/placeholder/32/32',
      category: 'Community',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 9,
      title: 'Blockchain Security Best Practices',
      description: 'Learn essential security practices to keep your blockchain assets and data safe.',
      date: '25 Jan 2024',
      author: 'Morgan Green',
      authorAvatar: '/api/placeholder/32/32',
      category: 'Security',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 10,
      title: 'The Role of AI in Blockchain',
      description: 'How artificial intelligence can enhance blockchain efficiency, scalability, and security.',
      date: '26 Jan 2024',
      author: 'Jordan Smith',
      authorAvatar: '/api/placeholder/32/32',
      category: 'Tech',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 11,
      title: 'Building a Web3 Portfolio',
      description: 'Tips and strategies for creating a diversified portfolio in the Web3 space.',
      date: '27 Jan 2024',
      author: 'Chris Lane',
      authorAvatar: '/api/placeholder/32/32',
      category: 'Investment',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 12,
      title: 'The Importance of Privacy in Web3',
      description: 'An in-depth look at privacy concerns and solutions in the decentralized web.',
      date: '28 Jan 2024',
      author: 'Sandy Kim',
      authorAvatar: '/api/placeholder/32/32',
      category: 'Privacy',
      image: 'https://via.placeholder.com/800x400',
    },
  ];

=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import useArticlesQuery from "../../hooks/useArticlesQuery";
import Blockies from "react-blockies"; 

const BlogPage = () => {
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const navigate = useNavigate();

<<<<<<< HEAD
  // Calculate indexes for slicing posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = samplePosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(samplePosts.length / postsPerPage);

  // Navigate to blog post page
  const navigateToBlogPost = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="min-h-screen  px-6 py-12 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl dark:text-white text-center mb-16">Blog</h1>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {currentPosts.map((post) => (
        <div
          key={post.id}
          className="overflow-hidden cursor-pointer group hover:bg-gray-700 transition-all duration-300"
          onClick={() => navigateToBlogPost(post.id)}
        >
          <div className="relative h-48">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="py-6 px-3">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-purple-400">{post.category}</span>
              <ArrowUpRight className="w-5 h-5 text-purple-400 transform group-hover:translate-x-1 transition-transform" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 line-clamp-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {post.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {post.description}
            </p>
            
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm text-white">{post.author}</span>
                <span className="text-xs text-gray-400">{post.date}</span>
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
              ${currentPage === index + 1 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    )}
  </div>
  );
};

=======
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

>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
export default BlogPage;
