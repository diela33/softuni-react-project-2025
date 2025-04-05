import React from "react";
import Navbar from "../src/components/Navbar/Navbar/Navbar"
import HomePage from "../src/components/Navbar/HomePage/HomePage";
import RecipeCard from "../src/components/Navbar/RecipeCard/RecipeCard"
import Footer from "../src/components/Navbar/Footer/Footer";
import AddRecipeForm from "../src/components/Navbar/AddRecipeForm/AddRecipeForm"
import EditRecipeForm from "../src/components/Navbar/EditRecipeForm/EditRecipeForm"
import LoginForm from "../src/components/Navbar/LoginForm/LoginForm";
import RegisterForm from "../src/components/Navbar/RegisterForm/RegisterForm";


const App = () => (
    <div style={{ backgroundColor: "rgb(195, 179, 197)" }}>
        <Navbar />
        <HomePage />
        <RecipeCard />
        <AddRecipeForm />
        <EditRecipeForm />
        <LoginForm />
        <RegisterForm />
        <Footer />
    </div >
);

export default App;

