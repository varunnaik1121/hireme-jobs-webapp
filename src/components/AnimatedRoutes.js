import React, { useEffect } from "react";
import { Suspense } from "react";
import Error from "./Error";
import Home from "./Home/Home";
import { Route, Routes, useLocation } from "react-router";
import Loading from "./Loading/Loading";
import PostJobPage from "./Post-A-Job/PostJobPage";
import SingleJobPage from "./JobPage/comps/SingleJobPage";
import { useNavigate } from "react-router-dom";
import JobApplications from "./JobPage/comps/JobApplications";
import Dummy from "../Dummy";

const Login = React.lazy(() => import("../components/Login/Login"));
const ProtectedRoute = React.lazy(() => import("../components/ProtectedRoute"));
const Jobs = React.lazy(() => import("./JobPage/Jobs"));
const CompaniesPage = React.lazy(() => import("./company/CompaniesPage"));
const CompanyProfile = React.lazy(() => import("./company/CompanyProfile"));
const AnimatedRoutes = ({ currentUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
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
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/jobDetails/:id" element={<SingleJobPage />}></Route>
        <Route path="/jobApplications" element={<JobApplications />}></Route>
        <Route path="/companies" element={<CompaniesPage />}></Route>
        <Route path="/dummy" element={<Dummy />}></Route>
        <Route path="/companyProfile" element={<CompanyProfile />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AnimatedRoutes;
