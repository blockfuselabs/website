import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link, Share } from 'lucide-react';
import Button from './Buttons';

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = {
    id: 1,
    title: 'Breaking into Blockchain',
    date: '23 Jan 2024',
    time: '11:23 pm',
    author: 'Lana Steiner',
    authorAvatar: '/api/placeholder/48/48',
    mainImage: '/src/assets/images/Frame-3816.png',
    backgroundSvg: '/src/assets/svgs/box1.svg',
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.`,
    sections: [
      {
        title: 'Introduction',
        content: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.

        Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.`
      },
      {
        title: 'Lorem ipsum mattis nulla',
        content: `Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.

        Eget quis nibh lorem, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In quis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.`
      },
      {
        title: 'Sagittis et eu at elementum',
        content: `Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur nunc ac. Auctor rutrum lacus malesuada mauris massa arcu at. Velit suscipit lacus mi orci, diam dui eget ligula fringilla tincidunt. Arcu sit dignissim massa erat eu cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida purus.

        1. Lectus id duis vulputate etor enim gravida morbi.
        2. Magna ultrices dignissim augue velit, ultrices ultrices suspendisse. Auctor vel in vitae placerat.
        3. Suspendisse dapibus senectus eget sed duis purus.`
      }
    ]
  };

  return (
    <div className="h-auto">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header section with image and details */}
        <div className="grid grid-cols-2 gap-8 pt-12">
          {/* Left column with images */}
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute -top-12 left-4">
              <img 
                src={post.backgroundSvg}
                alt=""
                className="w-72 h-72"
              />
            </div>
            
            {/* Main image */}
            <div className="relative z-10 ml-16">
              <img 
                src={post.mainImage}
                alt={post.title}
                className="w-[480px] h-[480px] object-contain"
              />
            </div>
          </div>
    
          {/* Right column with content */}
          <div>
            {/* Date and time */}
            <div className="text-sm text-gray-400 mb-4">
              {post.date} • {post.time}
            </div>
    
            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-8">
              {post.title}
            </h1>
    
            {/* Buttons */}
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
    
            {/* Author section */}
            <div className="mb-12">
              <h2 className="text-white text-lg mb-4">Author</h2>
              <div className="flex items-center gap-3">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-white font-medium">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
    
        {/* Border line */}
        <div className="w-full h-px bg-gray-800 my-16" />
    
        {/* Content section below the header */}
        <div className="max-w-5xl">
          {/* Article sections */}
          {post.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-white text-2xl font-semibold mb-6">
                {section.title}
              </h2>
              <div className="text-gray-300 space-y-6 w-full">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
