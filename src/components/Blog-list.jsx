import React, { useState, useEffect } from 'react';

function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from your API or database
    fetchArticles();
  }, []); // Empty dependency array means this effect runs once, on mount

  const fetchArticles = async () => {
    try {
      // Example fetch using fetch API
      const response = await fetch('http://localhost:8000/api/blog');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArticles(data.articles); // Assuming 'articles' is the key in your response
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    
    <div>
    <h1>Articles</h1>
    {articles.length === 0 ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {articles.map(articles => (
          <li key={articles.id}>
            <h2>{articles.title}</h2>
            <p>{articles.content}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
  );
}

export default NewsList;