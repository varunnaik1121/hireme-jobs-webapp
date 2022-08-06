import React from "react";
import { Suspense } from "react";
import Error from "./Error";
import { Home } from "./Home/Home";
import { Route, Routes, useLocation } from "react-router";
import Loading from "./Loading/Loading";
import PostJobPage from "./Post-A-Job/PostJobPage";

const Login = React.lazy(() => import("../components/Login/Login"));
const ProtectedRoute = React.lazy(() => import("../components/ProtectedRoute"));

const AnimatedRoutes = ({ currentUser }) => {
  const location = useLocation();
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading height={50} width={50} color={"blue"} />
        </div>
      }
    >
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
        <Route
          path="/postJob"
          element={<PostJobPage currentUser={currentUser} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AnimatedRoutes;
