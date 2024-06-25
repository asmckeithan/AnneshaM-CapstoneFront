
import React, { useState, useEffect } from 'react';
import '../blog-list.css'
 
function NewsList() {
    const [articles, setArticles] = useState([]);
 
    useEffect(() => {
        // Fetch articles from backend when component mounts
        fetch('http://localhost:5000/api/blog')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error =>
                console.error('Error fetching articles:', error));
    }, []);
    return (
        <div>
            <div className="App">
                <div class="container">
                    {articles.map(article => (
                        <div class="card">
 
                            <div class="card__body">
                                <span class="tag tag-green">
                                    {article.category}
                                </span>
                                <h4>{article.title}</h4>
                                <p>{article.description}</p>
                            </div>
                            <div class="card__footer">
                                <div class="image">
                                    <div class="image">
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
export default NewsList