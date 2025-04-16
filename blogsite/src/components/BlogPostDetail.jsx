import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link as LinkIcon, Share, ChevronLeft, Copy, Check } from "lucide-react";
import { RWebShare } from "react-web-share";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import Blockies from "react-blockies";
import BaseUrl from "../services/http";
import useArticlesQuery from "../../hooks/useArticlesQuery";

// New component for code blocks with copy functionality
const CodeBlock = ({ language, value }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy code:', err));
  };
  
  return (
    <div className="relative group">
      <button 
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-700 rounded-md text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </button>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        className="rounded-md my-6"
        wrapLines={true}
        wrapLongLines={true}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

const BlogPostDetail = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Fetch all articles for the related posts section
  const { 
    articles: allArticles, 
    isArticlesLoading 
  } = useArticlesQuery();

  const truncateContent = (content, maxLength = 150) => {
    if (!content) return "";
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        
        if (response && response.article) {
          setPost(response.article);
         
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

    // Find articles with the same category first
    const sameCategory = allArticles.filter(
      article => article.id !== post.id && article.category === post.category
    );
    
   
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }
    
  
    const otherArticles = allArticles.filter(
      article => article.id !== post.id && article.category !== post.category
    );
    
    return [...sameCategory, ...otherArticles].slice(0, 3);
  };

  // Generate schema.org JSON-LD for better SEO
  const generateSchemaMarkup = () => {
    if (!post) return null;
    
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.subtitle || truncateContent(post.content),
      "image": post.image,
      "datePublished": post.createdAt,
      "dateModified": post.updatedAt || post.createdAt,
      "author": {
        "@type": "Person",
        "name": post.author_name || post.author || "Anonymous"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Blockfuse Labs",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yoursite.com/logo.png" 
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };
    
    return JSON.stringify(articleSchema);
  };

  if (isLoading) {
    return (
      <div className="mx-auto min-h-screen px-4 sm:px-6 py-10 bg-black text-white overflow-x-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="h-8 w-4/5 mb-6 bg-gray-800 animate-pulse rounded"></div>
          <div className="h-12 w-full mb-8 bg-gray-800 animate-pulse rounded"></div>
          <div className="h-8 w-3/4 mb-12 bg-gray-800 animate-pulse rounded"></div>
          <div className="h-64 w-full mb-8 bg-gray-800 animate-pulse rounded"></div>
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-800 animate-pulse rounded"></div>
            <div className="h-4 w-full bg-gray-800 animate-pulse rounded"></div>
            <div className="h-4 w-3/4 bg-gray-800 animate-pulse rounded"></div>
            <div className="h-4 w-5/6 bg-gray-800 animate-pulse rounded"></div>
            <div className="h-4 w-full bg-gray-800 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 overflow-x-hidden">
        <div className="text-xl mb-4">{error}</div>
        <button 
          onClick={() => navigate('/')}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 overflow-x-hidden">
        <div className="text-xl mb-4">Article not found.</div>
        <button 
          onClick={() => navigate('/')}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const articleUrl = window.location.href;
  const relatedArticles = getRelatedArticles();

  return (
    <>
      <Helmet>
        <title>{post.title} | Blockfuse Labs - Blog</title>
        <meta name="description" content={post.subtitle || truncateContent(post.content, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.subtitle || truncateContent(post.content, 160)} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.subtitle || truncateContent(post.content, 160)} />
        <meta name="twitter:image" content={post.image} />
        <meta name="author" content={post.author_name || post.author || "Blockfuse Labs"} />
        <meta property="article:published_time" content={post.createdAt} />
        <meta property="article:section" content={post.category || "Blockchain"} />
        <meta property="article:tag" content={post.tags || post.category || "blockchain,crypto,web3"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={articleUrl} />
        <script type="application/ld+json">
          {generateSchemaMarkup()}
        </script>
      </Helmet>

      
      <div className="bg-black text-white min-h-screen overflow-x-hidden w-full">
       
        <button 
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-10 md:hidden bg-black bg-opacity-60 text-white p-2 rounded-full"
          aria-label="Go back"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Sticky header  */}
        {isScrolled && (
          <div className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90 border-b border-gray-800 py-3 px-4 md:hidden transition-opacity duration-300">
            <h1 className="text-sm font-semibold truncate break-words">
              {post.title}
            </h1>
          </div>
        )}

        <div className="max-w-7xl py-8 sm:py-12 md:py-16 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tag */}
          <div className="text-center mb-4">
            <span className="text-purple-400 text-sm uppercase tracking-wider font-medium break-words">
              {post.category || "Distributed Systems"}
            </span>
          </div>
          
          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 leading-tight break-words px-2 max-w-full">
            {post.title}
          </h1>
          
          {/* Article Subtitle */}
          {post.subtitle && (
            <p className="text-gray-400 text-center mb-6 text-base sm:text-lg px-2 break-words max-w-full">
              {post.subtitle}
            </p>
          )}
          
          {/* Date and Author with Avatar*/}
          <div className="flex items-center justify-center mb-8 sm:mb-10">
            <div className="mr-3">
              <Blockies
                seed={post.author || "default-seed"}
                size={10}
                scale={2}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="font-medium break-words">
                {post.author_name || post.author || "Anonymous"}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                • {post.read_time || "5 min"} read
              </div>
            </div>
          </div>
          
          {/* Share Buttons*/}
          <div className="flex justify-center flex-wrap space-x-3 sm:space-x-4 mb-8 sm:mb-12 px-2">
            <button
              onClick={handleCopy}
              className="bg-purple-500 flex items-center justify-center text-white px-3 py-1 sm:px-4 md:px-6 md:py-2 rounded text-sm sm:text-base mb-2 sm:mb-0"
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
              <button className="bg-purple-500 flex items-center justify-center text-white px-3 py-1 sm:px-4 md:px-6 md:py-2 rounded text-sm sm:text-base">
                <Share className="w-4 h-4" />
                <span className="ml-2">Share</span>
              </button>
            </RWebShare>
          </div>
          {copySuccess && (
            <p className="text-green-500 text-center text-sm mb-4">URL copied to clipboard!</p>
          )}
          
          {/* Main Image*/}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="w-full max-w-3xl px-2">
              <img
                src={post.image || "/default-main-image.png"}
                alt={post.title}
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
                width="960"
                height="540"
              />
              {post.image_caption && (
                <p className="text-sm text-gray-500 text-center mt-2 italic px-4 break-words">
                  {post.image_caption}
                </p>
              )}
            </div>
          </div>
          
          {/* Article Content with Markdown Rendering */}
          <div className="max-w-3xl mx-auto mb-12 sm:mb-20 px-2 sm:px-4">
            <div className="text-gray-300 space-y-4 lg:space-y-6 w-full prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none blog-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                     
                      <CodeBlock 
                        language={match[1]} 
                        value={String(children).replace(/\n$/, '')} 
                      />
                    ) : (
                      <code className="bg-gray-800 px-2 py-0.5 rounded text-gray-200" {...props}>
                        {children}
                      </code>
                    );
                  },
                  pre({node, children, ...props}) {
                    return (
                      <pre className="overflow-x-auto bg-gray-900 rounded-md py-2 px-4 my-6" {...props}>
                        {children}
                      </pre>
                    );
                  },
                  p({node, children, ...props}) {
                    return (
                      <p className="my-4 break-words" {...props}>
                        {children}
                      </p>
                    );
                  },
                  h1({node, children, ...props}) {
                    return (
                      <h1 className="text-2xl font-bold my-6 break-words" {...props}>
                        {children}
                      </h1>
                    );
                  },
                  h2({node, children, ...props}) {
                    return (
                      <h2 className="text-xl font-bold my-4 break-words" {...props}>
                        {children}
                      </h2>
                    );
                  },
                  h3({node, children, ...props}) {
                    return (
                      <h3 className="text-lg font-bold my-3 break-words" {...props}>
                        {children}
                      </h3>
                    );
                  },
                  ul({node, children, ...props}) {
                    return (
                      <ul className="list-disc pl-6 my-4" {...props}>
                        {children}
                      </ul>
                    );
                  },
                  ol({node, children, ...props}) {
                    return (
                      <ol className="list-decimal pl-6 my-4" {...props}>
                        {children}
                      </ol>
                    );
                  },
                  li({node, children, ...props}) {
                    return (
                      <li className="my-1 break-words" {...props}>
                        {children}
                      </li>
                    );
                  },
                  blockquote({node, children, ...props}) {
                    return (
                      <blockquote className="border-l-4 border-purple-500 pl-4 px-3 py-2 my-4 text-gray-400 italic" {...props}>
                        {children}
                      </blockquote>
                    );
                  },
                  table({node, children, ...props}) {
                    return (
                      <div className="overflow-x-auto my-6">
                        <table className="min-w-full divide-y divide-gray-700" {...props}>
                          {children}
                        </table>
                      </div>
                    );
                  },
                  th({node, children, ...props}) {
                    return (
                      <th className="px-4 py-2 bg-gray-800 text-left text-sm font-medium text-gray-200 uppercase tracking-wider" {...props}>
                        {children}
                      </th>
                    );
                  },
                  td({node, children, ...props}) {
                    return (
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300 border-t border-gray-700" {...props}>
                        {children}
                      </td>
                    );
                  },
                  a({node, children, ...props}) {
                    return (
                      <a className="text-purple-400 hover:text-purple-300 underline break-words" {...props}>
                        {children}
                      </a>
                    );
                  },
                  img({node, ...props}) {
                    return (
                      <img className="max-w-full h-auto my-6 rounded-md" loading="lazy" {...props} />
                    );
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            
            {/* Tags */}
            {post.tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.split(',').map((tag, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs break-words">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Subscribe Section */}
          <div className="mt-10 sm:mt-20 text-center px-4" id="subscribe-section">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 break-words">Sign up for more like this.</h2>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow p-3 rounded-t sm:rounded-t-none sm:rounded-l text-black outline-none w-full break-words"
                  aria-label="Email address"
                />
                <button 
                  type="submit" 
                  className="bg-pink-500 text-white px-4 py-3 rounded-b sm:rounded-b-none sm:rounded-r hover:bg-pink-600 transition duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-2">We'll never share your email. Unsubscribe anytime.</p>
            </div>
          </div>
          
          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-10 sm:mt-16 mb-10 sm:mb-16 px-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center break-words">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedArticles.map((article) => (
                  <div 
                    key={article.id || article._id} 
                    className="cursor-pointer rounded-lg overflow-hidden border border-gray-800 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                    onClick={() => navigate(`/blog/${article.slug}`)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article.image || "/default-article-image.png"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="225"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 break-words">{article.title}</h3>
                      <p className="text-gray-400 text-sm mb-2 line-clamp-2 break-words">
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
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Bottom Subscribe  */}
          <div className="fixed bottom-4 right-4 md:hidden z-10">
            <button 
              onClick={() => document.getElementById('subscribe-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-pink-500 text-white rounded-full p-4 shadow-lg hover:bg-pink-600 transition-colors"
              aria-label="Subscribe to newsletter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetail;