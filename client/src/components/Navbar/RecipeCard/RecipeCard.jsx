import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ title, image }) => (
  <li className="card">
    <img className="card-img-top" src={image} alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </li>
);

export default RecipeCard;