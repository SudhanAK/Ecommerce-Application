import React from 'react';
import './blog.css';

function Blog() {
  const posts = [
    {
      title: 'Top 10 Sneakers for 2025',
      description: 'Check out the hottest trending sneakers this year!',
      date: 'July 20, 2025',
    },
    {
      title: 'How to Pick the Right Shoe Size Online',
      description: 'Tips and tricks for buying shoes without trying them on.',
      date: 'July 18, 2025',
    },
    {
      title: 'Sneaker Cleaning Guide',
      description: 'Learn how to keep your sneakers looking fresh.',
      date: 'July 15, 2025',
    },
  ];

  return (
    <div className="blog-page">
      <h1>📝 Blog</h1>
      <div className="blog-posts">
        {posts.map((post, i) => (
          <div className="blog-card" key={i}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <span>{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
