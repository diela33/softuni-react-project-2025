import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams(); // Вземане на ID от URL
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    img: "",
  });
  const [error, setError] = useState(null);
  const userData = JSON.parse(localStorage.getItem("userData")); //Вземане на user от localStorage

  const handleRedirect = () => {
    console.log("Redirecting to /edit-recipe");
    navigate(`/edit-recipe/${recipeData._id}`); // Навигация към страницата за редактиране на рецепта
  };

  const deleteRecipe = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));

      const response = await fetch(
        `http://localhost:3030/jsonstore/toprecipes/${recipeData._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": userData.accessToken,
          },
          body: JSON.stringify(recipeData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete recipe.");
      }
      console.log("Recipe Deleted");

      alert("Recipe deleted successfully!");
      navigate(`/`);
    } catch (err) {
      console.error(err.message);
      alert("Error: " + err.message);
    }
  };

  const editButton = () => {
    if (userData == null) return; // Проверка за логнат потребител

    return (
      <div>
        {userData._id === recipeData._ownerId ? (
          <button
            id="edit-button"
            className="text-center"
            onClick={handleRedirect}
          >
            Edit Details
          </button>
        ) : (
          ""
        )}
      </div>
    );
  };

  const deleteButton = () => {
    if (userData == null) return; // Проверка за логнат потребител
    return (
      <div>
        {userData._id === recipeData._ownerId ? (
          <button
            id="delete-button"
            className="text-center"
            onClick={deleteRecipe}
          >
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    );
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `http://localhost:3030/jsonstore/toprecipes/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details.");
        }
        const data = await response.json();
        setRecipeData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchRecipe();
  }, [id]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <section id="details-recipe" className="view-section">
      <div className="jumbotron jumbotron-fluid text-light">
        <h1 className="display-4 text-center">Recipe Details</h1>
      </div>
      <h1 className="text-center">{recipeData.title}</h1>
      <img
        className="card-img-top"
        src={recipeData.img}
        alt={recipeData.title}
      />
      <p className="card-text text-center">{recipeData.description}</p>
      {editButton()}
      {deleteButton()}
    </section>
  );
};

export default RecipeDetails;
