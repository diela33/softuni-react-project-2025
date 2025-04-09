import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar/Navbar";
import HomePage from "../src/components/Navbar/HomePage/HomePage";
import RecipeCard from "../src/components/Navbar/RecipeCard/RecipeCard";
import Footer from "../src/components/Navbar/Footer/Footer";
import AddRecipeForm from "../src/components/Navbar/AddRecipeForm/AddRecipeForm";
import EditRecipeForm from "../src/components/Navbar/EditRecipeForm/EditRecipeForm";
import LoginForm from "../src/components/Navbar/LoginForm/LoginForm";
import RegisterForm from "../src/components/Navbar/RegisterForm/RegisterForm";
import PrivateRoute from "../src/components/Navbar/PrivateRoute/PrivateRoute";
import { AuthContext } from "../src/context/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: "rgb(195, 179, 197)" }}>
      <Navbar />
      <Routes>
        {/* Началната страница е достъпна за всички */}
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<RecipeCard />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginForm />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterForm />} />
        
        {/* Частни маршрути */}
        <Route
          path="/add-recipe"
          element={
            <PrivateRoute>
              <AddRecipeForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-recipe/:id"
          element={
            <PrivateRoute>
              <EditRecipeForm />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

