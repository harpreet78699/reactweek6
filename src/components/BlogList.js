// src/components/BlogList.js
import React from 'react';
import BlogPost from './BlogPost';

function BlogList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <img src={post.image} alt={post.title} className="post-image" />
          <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;