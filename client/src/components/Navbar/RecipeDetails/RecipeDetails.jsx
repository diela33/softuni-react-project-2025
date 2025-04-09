import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipeForm = () => {
  const { id } = useParams(); // Вземане на ID от URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", description: "", img: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3030/jsonstore/toprecipes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details.");
        }
        const data = await response.json();
        setFormData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = JSON.parse(localStorage.getItem("userData"));

      const response = await fetch(`http://localhost:3030/jsonstore/toprecipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": userData.accessToken,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update recipe.");
      }

      alert("Recipe updated successfully!");
      navigate(`/details/${id}`);
    } catch (err) {
      console.error(err.message);
      alert("Error: " + err.message);
    }
  };

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <section id="edit-recipe" className="view-section">
      <form onSubmit={handleSubmit}>
        <h1>Edit Recipe</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img">Image URL</label>
          <input
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </section>
  );
};

export default EditRecipeForm;


