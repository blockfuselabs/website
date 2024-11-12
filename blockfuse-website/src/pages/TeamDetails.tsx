import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import useTeamArticlesQuery from "../../hooks/use-teamArticles.query";
import { Article } from "../../types/generated"; 

interface Member {
  id: number;
  fullname: string;
  position: string;
  linkedin?: string;
  warpcast?: string;
  twitter?: string;
  github?: string;
  about: string;
  image: string;
}

const TeamDetails: React.FC = () => {
  const location = useLocation();
  const member = location.state?.member as Member | undefined;

  // Only call useTeamArticlesQuery if member.id is defined
  const {
    data: getAllTeamArticlesData,
    error: getAllTeamArticlesError,
    isLoading: isGetAllArticlesloading,
    isSuccess: isGetAllTeamArticlesSuccess,
  } = useTeamArticlesQuery(member?.id ?? -1); // Using -1 as a fallback if member.id is undefined

  if (!member) {
    return <p className="text-center mt-10 dark:text-white">Team member not found</p>;
  }

  if (isGetAllArticlesloading) return <p>Loading articles...</p>;
  if (getAllTeamArticlesError) return <p>Error loading articles.</p>;

  return (
    <>
      {/* Member Profile Section */}
      <div className="flex justify-center items-center py-10 dark:text-white">
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl w-full p-6 md:p-10 shadow-lg rounded-lg">
          <Link
            to="/team"
            className="flex items-center mr-20 p-2 text-xs border border-purple-500 hover:bg-purple-700 rounded-lg text-black dark:text-white"
          >
            <FaLongArrowAltLeft size={20} />
            <span className="text-sm p-1">Back to Team</span>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <h1 className="text-3xl font-bold">{member.fullname}</h1>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {member.position}
              </p>
              <div className="flex gap-4 mt-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 cursor-pointer hover:underline dark:text-blue-400"
                  >
                    LinkedIn
                  </a>
                )}
                {member.warpcast && (
                  <a
                    href={member.warpcast}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 cursor-pointer hover:underline dark:text-blue-400"
                  >
                    Warpcast
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 cursor-pointer hover:underline dark:text-blue-400"
                  >
                    Twitter
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 cursor-pointer hover:underline dark:text-blue-400"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <p className="text-base text-gray-700 dark:text-gray-400 max-w-md">
                {member.about}
              </p>
            </div>
            <img
              src={member.image}
              alt={member.fullname}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover border border-purple-500 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Articles by {member.fullname}
        </h2>
        <div className="space-y-6">
          {getAllTeamArticlesData?.data.articles.map((article: Article) => (
            <div
              key={article.id}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              {/* Article Title */}
              <h3 className="text-2xl font-semibold text-center p-4 dark:text-white">
                {article.title}
              </h3>
              
              {/* Article Content */}
              <div className="flex flex-col gap-4 md:flex-row items-start">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full md:w-1/2 h-48 md:h-auto object-cover rounded-lg"
                />
                <div className="p-6 md:w-1/2">
                  <p className="text-gray-700 dark:text-gray-400 mb-4">
                    {article.content.slice(0, 150)}...
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </p>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-600 font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
