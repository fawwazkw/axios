import React, { useState, useEffect } from 'react';
import { Header } from '../assets/components/Header';
import '../assets/css/memory.css';

const Memory = () => {
  const [posts, setPosts] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch('http://localhost:3004/postgenerated') // Ganti dengan URL mockoon Anda
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));

    // Update viewport width saat ukuran window berubah
    const handleWindowResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        {viewportWidth > 900 && (
          <div className="sidebar">
            <div className="grid">
              {posts.map(post => {
                const author = `${post.author} ${post.lastName}`;
                const datePost = post.datePost;
                return (
                  <div key={post.post_id}>
                    <img src={post.img} alt={post.title} style={{ width: '200px' }} />
                    <h3>{post.title}</h3>
                    <p>{author}</p>
                    <p>{datePost}</p>
                    <p>{post.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className={`content ${viewportWidth > 900 ? 'wide' : 'narrow'}`}>
          {posts.map(post => {
            const author = `${post.author} ${post.lastName}`;
            const datePost = post.datePost;
            return (
              <div key={post.post_id}>
                <h3>{post.title}</h3>
                <p>{author}</p>
                <p>{datePost}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Memory;
