import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import AnimatedRoutes from "./components/AnimatedRoutes";
import Toast from "./components/Toast";

import { useAuthListener } from "./services/firebase";
import { UserContext } from "./context/useUser";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const { currentUser } = useAuthListener();

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Toast />
        <AnimatePresence exitBeforeEnter>
          <BrowserRouter>
            {/* <Suspense fallback={<Loading />}>
              <Routes key={location.pathname} location={location}>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  exact
                  path="/"
                  element={
                    <ProtectedRoute user={currentUser}>
                      <Home />
                    </ProtectedRoute>
                  }
                ></Route>
              </Routes>
            </Suspense> */}
            <AnimatedRoutes currentUser={currentUser} />
          </BrowserRouter>
        </AnimatePresence>
      </UserContext.Provider>
    </>
  );
};

export default App;
