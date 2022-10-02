import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const Profile = () => {
  const auth = useContext(AuthContext);
  console.log(auth);

  const handleLogout = () => {
    auth.logout("");
  };
  return (
    <>
      <h1>Profile</h1>
      <br />
      {auth.user && <h3> Welcome {auth.user} </h3>}
      <br />
      <button onClick={() => handleLogout()}> LogOut </button>
    </>
  );
};
