CREATE DATABASE community_db;
USE community_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255),
  banner VARCHAR(255),
  description TEXT,
  verification_token VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  reset_token VARCHAR(255),
  reset_token_expires DATETIME
);
CREATE TABLE spaces (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  space_id INT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  upvotes INT DEFAULT 0,
  downvotes INT DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (space_id) REFERENCES spaces(id)
);
CREATE TABLE blog_tags (
  blog_id INT,
  tag_id INT,
  PRIMARY KEY (blog_id, tag_id),
  FOREIGN KEY (blog_id) REFERENCES blogs(id),
  FOREIGN KEY (tag_id) REFERENCES tags(id)
);
CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  blog_id INT,
  user_id INT,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (blog_id) REFERENCES blogs(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE user_followers (
  user_id INT,
  follower_id INT,
  PRIMARY KEY (user_id, follower_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (follower_id) REFERENCES users(id)
);
CREATE TABLE user_education (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  degree VARCHAR(255) NOT NULL,
  university VARCHAR(255) NOT NULL,
  years VARCHAR(50) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE user_experience (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  years VARCHAR(50) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE user_projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  link VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE user_skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  skill VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);