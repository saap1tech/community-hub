import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/example";

const Blog = () => {
  const [posts, setPosts] = useState(blogs);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-[#38b2ac] hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;