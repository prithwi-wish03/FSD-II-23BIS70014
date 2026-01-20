
import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState("user");

  const login = (name) => {
    setRole(name === "admin" ? "admin" : "user");
  };

  return (
    <AuthContext.Provider value={{ role, login }}>
      {children}
    </AuthContext.Provider>
  );
};
