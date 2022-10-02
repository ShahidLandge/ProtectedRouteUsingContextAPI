import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useContext(AuthContext);
  console.log(auth);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleLogin = (e) => {
    auth.login(user);
    let redirect = location.state ? location.state.path : "/";
    navigate(redirect, { replace: true });
  };
  return (
    <>
      <br />
      <h1>Login</h1>
      <br />
      <label htmlFor="name"> Username: </label>
      <input
        id="name"
        type="text"
        placeholder="username"
        onChange={(e) => setUser(e.target.value)}
      />

      <button type="submit" onClick={(e) => handleLogin(e)}>
        Login{" "}
      </button>
    </>
  );
};
