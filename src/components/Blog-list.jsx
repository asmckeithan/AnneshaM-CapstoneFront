
import React, {useState,useEffect} from 'react'
import '../App.css'

function NewsList(){
    const[articles, setArticles] = useState([]);

        useEffect(() => {
            fetch('http://localhost:8000/api/blog/delete/id:')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.log("Error Fetching Articles",err))
        }, [])
return(
    <div className="App">
        <div className="container">
            {articles.map(article => (
            <div key={article.id} className="card">
                <div className='card-body'>
                    <span className='tag'>{article.title}</span>
                    <h4>{article.title}</h4>
                    <p>{article.content}</p>
                </div>
                <div className='card-footer'>
                <div className="user">
                <div className="user__info">
                <h5>{article.author}</h5>
                <small>{article.createdAt}</small>
                </div>
                </div>
            </div>    
        </div>
            ))}    

        </div>
    </div>
)
    
}

export default NewsList