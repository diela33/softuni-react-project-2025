import React from "react";
import "./EditRecipeForm.css";

const EditRecipeForm = () => (
  <section id="edit-recipe" className="view-section">
    <form className="text-center border border-light p-5">
      <h1>Edit Recipe</h1>
      <div className="form-group">
        <label htmlFor="title">Recipe Title</label>
        <input id="title" type="text" className="form-control" placeholder="Recipe Title" name="title" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Recipe Description</label>
        <textarea className="form-control" placeholder="Recipe Description" name="description"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Image url</label>
        <input id="imageUrl" type="text" className="form-control" placeholder="Image Url" name="img" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </section>
);

export default EditRecipeForm;
