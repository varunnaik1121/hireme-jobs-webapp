import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";
import { UserContext } from "./context/userContext";
import { auth } from "./services/firebase";

const App = () => {

  return (
    <>
      <UserContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default App;
