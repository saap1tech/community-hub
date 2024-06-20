import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { postsData, users } from "../data/example";

const Feed = () => {
  const [posts, setPosts] = useState(postsData);
  const [newComment, setNewComment] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImageUrl, setNewPostImageUrl] = useState("");

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleAddComment = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: `${post.comments.length + 1}`,
              userId: "user1",
              username: "Sebti",
              content: newComment,
            },
          ],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewComment("");
  };

  const handleAddPost = () => {
    const newPost = {
      id: `${posts.length + 1}`,
      userId: "user1",
      username: "Sebti",
      content: newPostContent,
      imageUrl: newPostImageUrl,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostImageUrl("");
  };

  const getUserAvatar = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.avatar : "https://via.placeholder.com/50";
  };

  const getUsername = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.username : "Unknown";
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <div className="container mx-auto flex pt-16">
        <aside className="w-1/4 p-4 hidden lg:block">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">My Network</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/network" className="hover:text-[#38b2ac]">
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/network" className="hover:text-[#38b2ac]">
                  Groups
                </Link>
              </li>
              <li>
                <Link to="/network" className="hover:text-[#38b2ac]">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/activity" className="hover:text-[#38b2ac]">
                  Sebti liked a post
                </Link>
              </li>
              <li>
                <Link to="/activity" className="hover:text-[#38b2ac]">
                  Malek commented on a post
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className="w-full lg:w-3/4 p-4">
          <div className="p-4">
            <div className="bg-gray-800 p-6 rounded-xl mb-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Create a New Post
              </h3>
              <textarea
                className="w-full p-2 mb-4 bg-gray-700 rounded-lg text-gray-300"
                rows="3"
                placeholder="What's on your mind?"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
              <input
                type="text"
                className="w-full p-2 mb-4 bg-gray-700 rounded-lg text-gray-300"
                placeholder="Image URL (optional)"
                value={newPostImageUrl}
                onChange={(e) => setNewPostImageUrl(e.target.value)}
              />
              <button
                className="bg-[#38b2ac] hover:bg-[#2c9a8a] text-white px-4 py-2 rounded-lg"
                onClick={handleAddPost}
              >
                Post
              </button>
            </div>
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800 p-6 rounded-xl mb-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={getUserAvatar(post.userId)}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4 border-2 border-[#38b2ac]"
                  />
                  <div>
                    <Link to={`/profile/${post.userId}`}>
                      <span className="font-semibold text-white text-lg">
                        {getUsername(post.userId)}
                      </span>
                    </Link>
                  </div>
                </div>
                <p className="text-white mb-4">{post.content}</p>
                <div className="flex justify-center items-center">
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt="Post"
                      className="rounded-xl mb-4"
                    />
                  )}
                </div>
                <div className="flex justify-center items-center space-x-4 text-[#38b2ac]">
                  <button
                    className="flex items-center space-x-1 hover:text-[#e57373]"
                    onClick={() => handleLike(post.id)}
                  >
                    <FaHeart />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-[#4fc3f7]">
                    <FaComment />
                    <span>{post.comments.length}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-[#81c784]">
                    <FaShare />
                    <span>Share</span>
                  </button>
                </div>
                <div className="mt-4">
                  <div className="max-h-24 overflow-y-auto">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex items-center mb-2">
                        <img
                          src={getUserAvatar(comment.userId)}
                          alt="Comment User"
                          className="w-8 h-8 rounded-full mr-2 border-2 border-[#38b2ac]"
                        />
                        <div className="bg-gray-700 p-2 rounded-lg w-full">
                          <Link to={`/profile/${comment.userId}`}>
                            <span className="font-semibold text-white">
                              {comment.username}
                            </span>
                          </Link>
                          <p className="text-gray-300">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex">
                    <input
                      className="w-full p-2 bg-gray-700 rounded-lg text-gray-300"
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                      className="bg-[#38b2ac] hover:bg-[#2c9a8a] text-white px-4 py-2 rounded-lg ml-2"
                      onClick={() => handleAddComment(post.id)}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feed;
