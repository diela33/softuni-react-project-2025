import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("userData");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error loading user data:", error);
      return null;
    }
  });

  const navigate = useNavigate();

  const login = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem("userData");
      navigate("/login");
    } catch (error) {
      console.error("Error clearing user data:", error);
    }
  };

  useEffect(() => {
    if (!user && window.location.pathname !== "/login" && window.location.pathname !== "/register") {
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
