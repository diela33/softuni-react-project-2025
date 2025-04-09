import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Server Error");
      }

      const userData = await response.json();
      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/"); // Пренасочване след успешен вход
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    navigate("/login"); // Пренасочване след изход
  };

  useEffect(() => {
    // Позволява на гости да остават на HomePage
    if (!user && (window.location.pathname === "/add-recipe" || window.location.pathname === "/edit-recipe/:id")) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

