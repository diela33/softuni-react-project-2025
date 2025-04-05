import React from "react";
import "./HomePage.css";

const HomePage = () => (
  <section id="home-page" className="view-section">
    <div className="jumbotron jumbotron-fluid text-light">
      <h1 className="display-4">Top Recipes from The Kitchen</h1>
      <p className="lead">" The spice in the dish is a pinch of LOVE "</p>
    </div>
    <h1 className="text-center">Top Recipes</h1>
    <section id="add-recipe-button" className="user">
      <button id="createLink" className="btn btn-warning">Add Recipe</button>
    </section>
    <section id="recipe">
      <div className="mt-3">
        <div className="row d-flex flex-wrap justify-content-center">
          <ul id="recipes-list" className="card-deck"></ul>
        </div>
      </div>
    </section>
  </section>
);

export default HomePage;
