import React, { useState, useEffect, useContext } from "react";
import "./HomePage.css";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = ({ showDetails }) => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:3030/jsonstore/toprecipes");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch recipes!");
      }

      const data = await response.json();
      setRecipes(Object.values(data));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleRedirect = () => {
    console.log("Redirecting to /add-recipe");
    navigate("/add-recipe");
  };

  return (
    <section id="home-page" className="view-section">
      <div className="jumbotron jumbotron-fluid text-light">
        <h1 className="display-4">Top Recipes from The Kitchen</h1>
        <p className="lead">"The spice in the dish is a pinch of LOVE"</p>
      </div>
      <h1 className="text-center">Top Recipes</h1>

      {user && (
        <section id="add-recipe-button" className="user">
          <button id="createLink" className="btn btn-warning" onClick={handleRedirect}>
            Add Recipe
          </button>
        </section>
      )}

      <section id="recipe">
        {error && <p className="error-message">{error}</p>}
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
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => showDetails(recipe._id)}
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
