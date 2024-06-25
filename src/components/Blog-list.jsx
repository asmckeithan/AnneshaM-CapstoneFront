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
      setArticles(data.blogs); // Assuming 'articles' is the key in your response
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
        <div>
            <h2>Latest Articles</h2>
            <div id="tbl-head">
            <table id="tbl">
                <tbody>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Video</th>
                </tbody>
                {articles.map((article) => (
                    <tbody>
                      <td>{article.category}</td>
                        <td>{article.title}</td>
                        <td>{article.description}</td>
                        <td>{article.image}</td>
                        <td>{article.video}</td>
                    </tbody>
                ))}
            </table>
            </div>  
            </div>  
  );
}

export default NewsList;