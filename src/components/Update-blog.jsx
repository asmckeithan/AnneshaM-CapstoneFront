import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams and useHistory from React Router
 // Assuming you have CSS for form styling

const UpdateBlog = () => {
    const { id } = useParams(); // Use useParams to get the id parameter from the route
    const [blog, setBlog] = useState({
        title: "",
        category: "",
        description: "",
        image: "",
        video: "",
    });
   

    useEffect(() => {
        // Fetch blog post data when component mounts, using the id from useParams
        fetch(`http://localhost:8000/api/blog`)
            .then((response) => response.json())
            .then((data) => {
                setBlog(data); // Set initial state with fetched blog data
                console.log(data)
            })
            .catch((error) => console.error("Error fetching blog:", error));
    }, [id]); // Include id in the dependency array to fetch data whenever id changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog((prevBlog) => ({
            ...prevBlog,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:8000/api/blog/update/${id}`, // Use id from useParams in the endpoint
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(blog),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update blog post");
            }

            alert("Blog post updated successfully");
            history.push("/blog-list"); // Redirect to blog list page after successful update
        } catch (error) {
            console.error("Error updating blog post:", error);
        }
    };

    return (
        <div className="blog-form-container">
            <h2>Update Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={blog.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={blog.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={blog.description}
                        onChange={handleChange}
                        rows={5}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={blog.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Video URL:</label>
                    <input
                        type="text"
                        name="video"
                        value={blog.video}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Blog Post</button>
            </form>
        </div>
    );
};

export default UpdateBlog;
