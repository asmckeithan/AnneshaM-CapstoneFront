import React, { useState } from 'react';
import '../CSS/report.css'
 
function ReportForm({ setAuther }) {
    const [formData, setFormData] = useState({
        category:'',
        title: '',
        description: '',
        image: '',
        video: '',
        // user: '' 
        
    });
 
    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
 
    const handleSubmit = async event => {
        event.preventDefault();
 
        try {
            const response = await
                fetch('http://localhost:8000/api/blog/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
 
            if (!response.ok) {
                throw new Error('Failed to create article');
            }
 
            // Reset form data after successful submission
            setFormData({
                category:'',
                title: '',
                description: '',
                image: '',
                video: '',
              
            });
 
            alert("Article Added..")
            setAuther(false)
 
        } catch (error) {
            console.error('Error creating article:', error);
        }
    };
 
    return (
        <div> 
            <div className="form-container">
                <h2>Report Local News Here</h2>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label >
                            Category:
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label >
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Description:
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </label>
                    </div><br />
                    <div className="form-group">
                    <form onSubmit={handleSubmit}>
                    <label>
                        Image:
                        <input
                        type="file"
                        name="imageFile"
                        onChange={handleChange}
                        className="form-input"/>
                        </label>
                        <button className="submit-button" type="submit">Upload Image</button>
                    </form>
                    </div><br />
                    <div className="form-group">
                    <form onSubmit={handleSubmit}>
                    <label>
                        Video:
                        <input
                        type="file"
                        name="video"
                        onChange={handleChange}
                        className="form-input"/>
                        </label>
                        <button className="submit-button" type="submit">Upload Video</button>
                    </form>
                    </div><br />
                    {/* <div className="form-group">
                        <label>
                            Username:
                            <input
                                type="text"
                                name="category"
                                value={formData.username}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </label>
                    </div> */}
                    <button type="submit"
                        className="submit-button">
                        Submit Article
                    </button>
                </form>
            </div>
 
 
        </div>
    );
}
 
export default ReportForm;