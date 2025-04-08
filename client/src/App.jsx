import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar/Navbar";
import HomePage from "../src/components/Navbar/HomePage/HomePage";
import RecipeCard from "../src/components/Navbar/RecipeCard/RecipeCard";
import Footer from "../src/components/Navbar/Footer/Footer";
import AddRecipeForm from "../src/components/Navbar/AddRecipeForm/AddRecipeForm";
import EditRecipeForm from "../src/components/Navbar/EditRecipeForm/EditRecipeForm";
import LoginForm from "../src/components/Navbar/LoginForm/LoginForm";
import RegisterForm from "../src/components/Navbar/RegisterForm/RegisterForm";

const App = () => {
    return (
        <div style={{ backgroundColor: "rgb(195, 179, 197)" }}>
            <Navbar />
            <Routes>
                {/* Публични маршрути */}
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<RecipeCard />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                {/* Частни маршрути */}
                <Route path="/add-recipe" element={<AddRecipeForm />} />
                <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;


