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
        <div classNameName="App">
            <div className="container">
                {articles.map(article => (
                    <div className="card">

                        <div className="card__body">
                            <span className="tag tag-green">
                                {article.category}
                            </span>
                            <h4>{article.title}</h4>
                            <p>{article.description}</p>
                        </div>
                        <div className="card__footer">
                            <div className="user">
                                <div className="user__info">
                                    <h5>{article.image}</h5>
                                    <small>{article.createdAt}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
);
}

export default NewsList;