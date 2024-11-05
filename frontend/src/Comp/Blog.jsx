import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'How to Elevate Your Shopping Experience',
    description: 'Learn how to improve your online shopping experience with these simple tips and tricks...',
    content: 'Full content of blog post 1...',
  },
  {
    id: 2,
    title: 'Top 5 Fashion Trends in 2024',
    description: 'Explore the latest fashion trends that are dominating the online shopping world in 2024...',
    content: 'Full content of blog post 2...',
  },
  {
    id: 3,
    title: 'Benefits of Shopping Online',
    description: 'Discover the key benefits of shopping online and how it can save you time and money...',
    content: 'Full content of blog post 3...',
  },

  {
    id: 4,
    title: 'Top 5 Fashion Trends in 2024',
    description: 'Explore the latest fashion trends that are dominating the online shopping world in 2024...',
    content: 'Full content of blog post 2...',
  },
  {
    id: 5,
    title: 'Benefits of Shopping Online',
    description: 'Discover the key benefits of shopping online and how it can save you time and money...',
    content: 'Full content of blog post 3...',
  },
  {
    id: 6,
    title: 'How to Elevate Your Shopping Experience',
    description: 'Learn how to improve your online shopping experience with these simple tips and tricks...',
    content: 'Full content of blog post 1...',
  },
];

function BlogList() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="border-4 border-[#FF7602] bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <Link to={`/blog/${blog.id}`} className="text-[#FF7602] font-bold">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
