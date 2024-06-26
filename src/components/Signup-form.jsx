import React, { useState } from "react";
import "../CSS/sign-up.css"

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.password.trim()) {
            errors.password = "Password is required";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            // No validation errors, proceed with signup (fetch data)
            setIsSubmitting(true);
            try {
                const response = await fetch("http://localhost:8000/api/user/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error("Sign up failed");
                }

                const data = await response.json();
                console.log("Signup successful:", data);
                alert("Signup successful!");
                setIsSubmitting(false);
                // Optionally, reset form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                });
            } catch (error) {
                console.error("Error signing up:", error);
                alert("Sign up failed. Please try again.");
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="signup-container">
            <h2 className="header1">Signup Here!</h2>
            <p>Subscribe Here <br /> Where you can recieve weekly updates on all the local news . <br /> Our Users have full control to their stories and we do our part to make sure every article is published.</p>
            <p className="flag">Select the Report Section at the top to post your first article.</p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group1">
                    <label>Username:</label>
                    <input
                    className="all-input"
                        type="text"
                        name="name"
                        placeholder="Required"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && (
                        <span className="error">{formErrors.name}</span>
                    )}
                </div>
                <div className="form-group1">
                    <label>Email:</label>
                    <input
                        className="all-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && (
                        <span className="error">{formErrors.email}</span>
                    )}
                </div>
                <div className="form-group1">
                    <label>Password:</label>
                    <input
                        className="all-input"
                        type="password"
                        name="password"
                        placeholder="Required"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && (
                        <span className="error">{formErrors.password}</span>
                    )}
                </div>
                <button className="sign"type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Signup"}
                </button>
               
            </form>
           
        </div>
    );
};

export default SignupForm;
