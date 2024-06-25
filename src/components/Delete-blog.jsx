import React from "react";
import '../blog-list.css'
import { useEffect, useState } from "react";
 
const DeleteArticle = () => {
    const [articles, setArticles] = useState([]);
    const [deleted, setDelete] = useState(true);
 
    useEffect(() => {
        // Fetch articles from backend when component mounts
        fetch("http://localhost:8000/api/blog")
            .then((response) => response.json())
            .then((data) => {setArticles(data.blogs);console.log("Test",data.blogs)}) 
            .catch((error) =>
                console.error("Error fetching articles:", error));
    }, [deleted]);
 
    const handleDelete = async (articleid) => {
        try {//fetch delete 
            const response = await fetch(
                `http://localhost:8000/api/blog/delete/${articleid}`,
                {
                    method: "DELETE",
                }
            );
 
            if (!response.ok) {
                throw new Error("Failed to delete article");
            }
 
            alert("Article deleted");
            setDelete(!deleted);
            /* 
                Assuming you have a state or effect 
                to update the list of articles after deletion
                */
        } catch (error) {
            console.error("Error deleting article:", error);
        }
    };
    return (
        <div id="tbl-head">
            <h1>----------------------Remove Articles Here ----------------------</h1>
            <table id="tbl">
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Video</th>
                </tr>
                <tbody>
                  {articles.map((article) => (
                    <tr>
                      <td>{article.category}</td>
                        <td>{article.title}</td>
                        <td>{article.description}</td>
                        <td>{article.image}</td>
                        <td>{article.video}</td>
                        <td>
                            <button
                                className="dl-btn"
                                onClick={() => handleDelete(article._id)}>
                                Remove
                            </button>
                        </td>
                    </tr>
                   
                ))}</tbody>
            </table>
        </div>
    );
};
 
export default DeleteArticle;