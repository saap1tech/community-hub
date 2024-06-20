import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/example";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = blogs

      const foundPost = posts.find((p) => p.id === parseInt(id));
      setPost(foundPost);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <p className="text-gray-400 mb-8">{post.content}</p>
    </div>
  );
};

export default BlogPost;
