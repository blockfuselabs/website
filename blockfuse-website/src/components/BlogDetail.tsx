import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link, Share } from 'lucide-react';
import Button from './Buttons';
import BaseUrl from '../../services/http';

const BlogPostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const article = await BaseUrl.httpGetArticleById(id);
                setPost(article);
            } catch (err) {
                setError('Failed to load the article.');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <div className='dark:text-white min-h-screen flex items-center justify-center'>Loading...</div>;
    if (error) return <div className='dark:text-white min-h-screen flex items-center justify-center'>{error}</div>;
    if (!post) return <div className='dark:text-white min-h-screen flex items-center justify-center'>Article not found.</div>;

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 gap-8 pt-12">
                    {/* Left column with images */}
                    <div className="relative">
                        <div className="absolute -top-12 left-4">
                            <img 
                                src="/src/assets/svgs/box1.svg" 
                                alt="Background decoration"
                                className="w-72 h-72"
                            />
                        </div>
                        
                        {/* Main image from backend */}
                        <div className="relative z-10 ml-16">
                            <img 
                                src={post.image || '/default-main-image.png'}
                                alt={post.title}
                                className="w-[480px] h-[480px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Right column with post details */}
                    <div>
                        <div className="text-sm text-gray-400 mb-4">
                            {new Date(post.createdAt).toLocaleDateString()} • {new Date(post.createdAt).toLocaleTimeString()}
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-8">
                            {post.title}
                        </h1>
                        <div className="flex gap-4 mb-12">
                            <Button style={{ width: "800px" }}>
                                <Link className="w-4 h-4" />
                                Copy link
                            </Button>
                            <Button style={{ width: "800px" }}>
                                <Share className="w-4 h-4" />
                                Share
                            </Button>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-white text-lg mb-4">Author</h2>
                            <div className="flex items-center gap-3">
                                <img
                                    src={post.authorAvatar || '/default-avatar.png'}
                                    alt={post.author || 'Author'}
                                    className="w-12 h-12 rounded-full"
                                />
                                <span className="text-white font-medium">{post.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Article content */}
                <div className="w-full h-px bg-gray-800 my-16" />
                <div className="max-w-5xl">
                    <div className="text-gray-300 space-y-6 w-full">
                        {post.content && post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="leading-relaxed">
                                {paragraph.trim()}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostDetail;