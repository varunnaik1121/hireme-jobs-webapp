import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import "../Home/Home.css";
import { useGlobalUser } from "../../context/userContext";
import { UserContext } from "../../context/useUser";

export const Home = () => {
  const { logOut } = useGlobalUser();
  const handleLogOut = () => {
    logOut();
  };

  const currentUser = useContext(UserContext);

  useEffect(() => {
    toast.dismiss();
    if (currentUser) {
      toast.success("logged in as " + currentUser?.email, {
        duration: 2000,
      });
    }
  }, [currentUser]);

  return (
    <div className="Home-container">
      <h1>This is Home page and this is protected</h1>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button onClick={handleLogOut} className="">
          logout
        </button>
      </nav>
      <div>content will deliver here later🙂..</div>
    </div>
  );
};
