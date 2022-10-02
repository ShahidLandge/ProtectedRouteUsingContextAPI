import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./components/AuthContext";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./styles.css";

export default function App() {
  const Header = () => {
    const auth = useContext(AuthContext);
    // console.log(auth);
    return (
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/profile">Profile </Link>
        {auth.user ? (
          <h4 style={{ color: "yellow" }}>Welcome {auth.user}</h4>
        ) : (
          <Link to="/login">Login </Link>
        )}
      </nav>
    );
  };
  return (
    <div className="App">
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
