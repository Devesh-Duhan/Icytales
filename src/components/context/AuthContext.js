"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, logoutUser, registerUser } from "@/lib/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser =
      typeof window !== "undefined"
        ? localStorage.getItem("icytales_user")
        : null;
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const persistUser = (userData) => {
    setUser(userData);
    if (typeof window !== "undefined") {
      localStorage.setItem("icytales_user", JSON.stringify(userData));
    }
  };

  const login = async (credentials) => {
    const data = await loginUser(credentials);
    persistUser(data);
    return data;
  };

  const register = async (credentials) => {
    const data = await registerUser(credentials);
    persistUser(data);
    return data;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("icytales_user");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
