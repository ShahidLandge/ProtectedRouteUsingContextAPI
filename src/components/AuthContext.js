import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
console.log(AuthContext)
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser("");
  };
  return (
    <>
      <AuthContext.Provider value={{ user, setUser, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
