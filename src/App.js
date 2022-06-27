import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Toast from "./components/Toast";
import { Home } from "./components/Home/Home";
import { useAuthListener } from "./services/firebase";
import { UserContext } from "./context/useUser";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { connectFirestoreEmulator } from "firebase/firestore";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  const { currentUser } = useAuthListener();

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Toast />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route exact path="/"
              element={
                <ProtectedRoute user={currentUser}>
                  <Home />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default App;
