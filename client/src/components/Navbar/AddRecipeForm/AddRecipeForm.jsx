import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddRecipeForm.css";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({ title: "", description: "", img: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, img } = formData;

    try {
      if (title === "" || description === "" || img === "") {
        throw new Error("All fields are required!");
      }

      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log("User Data:", userData); // Debugging log
      if (!userData?.accessToken) {
        throw new Error("User is not authenticated!");
      }

      const response = await fetch("http://localhost:3030/jsonstore/toprecipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": userData.accessToken, // Correctly passing accessToken
        },
        body: JSON.stringify({ title, description, img }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Failed to add recipe.");
      }

      const data = await response.json();
      console.log("New Recipe Added:", data);

      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <section id="add-recipe" className="view-section">
      <form id="add-recipe-form" className="text-center border border-light p-5" onSubmit={handleSubmit}>
        <h1>Add Recipe</h1>
        {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
        <div className="form-group">
          <label htmlFor="title">Recipe Title</label>
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Recipe Description</label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            id="imageUrl"
            type="text"
            className="form-control"
            placeholder="Image URL"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default AddRecipeForm;

