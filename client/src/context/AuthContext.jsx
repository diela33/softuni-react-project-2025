import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
        throw new Error(errorData.message || "Login failed!");
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

  const register = async (credentials) => {
    try {
      const response = await fetch("http://localhost:3030/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed!");
      }

      const userData = await response.json();
      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/"); // Пренасочване след успешна регистрация
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    navigate("/login"); // Пренасочване след изход
  };

  useEffect(() => {
    // Уверява се, че гостите нямат достъп до частни страници
    if (!user && (window.location.pathname === "/add-recipe" || window.location.pathname.includes("/edit-recipe"))) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
