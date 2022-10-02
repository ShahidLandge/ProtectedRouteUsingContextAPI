import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  const location = useLocation();
  // console.log(auth)
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  } else return children;
};
