import React, { useState, useEffect, useContext } from "react";
import "./HomePage.css";
import { AuthContext } from "../../../context/AuthContext"; // Импортиране на AuthContext
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useContext(AuthContext); // Информация за логнатия потребител
  const [recipes, setRecipes] = useState([]); // Държи данните за рецептите
  const [error, setError] = useState(null); // Държи съобщения за грешки
  const navigate = useNavigate();

  // Функция за извличане на рецепти
  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:3030/jsonstore/toprecipes");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch recipes!");
      }

      const data = await response.json();
      setRecipes(Object.values(data)); // Запазване на данните
    } catch (error) {
      setError(error.message); // Настройване на грешката
    }
  };

  useEffect(() => {
    fetchRecipes(); // Извличане на данните при първоначално зареждане
  }, []);

  const handleRedirect = () => {
    console.log("Redirecting to /add-recipe");
    navigate("/add-recipe"); // Навигация към страницата за добавяне на рецепта
  };

  return (
    <section id="home-page" className="view-section">
      <div className="jumbotron jumbotron-fluid text-light">
        <h1 className="display-4">Top Recipes from The Kitchen</h1>
        <p className="lead">"The spice in the dish is a pinch of LOVE"</p>
      </div>
      <h1 className="text-center">Top Recipes</h1>

      {/* Показване на бутон "Add Recipe", само ако потребителят е логнат */}
      {user && (
        <section id="add-recipe-button" className="user">
          <button id="createLink" className="btn btn-warning" onClick={handleRedirect}>
            Add Recipe
          </button>
        </section>
      )}

      {/* Секция за списък с рецепти */}
      <section id="recipe">
        {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
        <div className="mt-3">
          <div className="row d-flex flex-wrap justify-content-center">
            {recipes.length > 0 ? (
              <ul id="recipes-list" className="card-deck">
                {recipes.map((recipe) => (
                  <li key={recipe._id} className="card mb-4">
                    <img
                      className="card-img-top recipe-img"
                      src={recipe.img}
                      alt={recipe.title}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{recipe.title}</h4>
                      <p className="card-text">
                        {recipe.description.length > 100
                          ? `${recipe.description.substring(0, 100)}...`
                          : recipe.description}
                      </p>
                    </div>
                    <div className="card-footer">
                      {/* Бутон "Details", който пренасочва към /details/:id */}
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => navigate(`/details/${recipe._id}`)} // Пренасочване
                      >
                        Details
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No recipes available.</p>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;


