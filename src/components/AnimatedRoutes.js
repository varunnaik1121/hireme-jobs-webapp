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
import Navbar from "../components/Header/Navbar";
import { useGlobalUser } from "../context/userContext";
import Footer from "./Footer/Footer";
import App from "./company/singleCompanyPage/App";
import Favourites from "./Favourites/Favourites";
import CompanyProfile from "./company/CompanyProfile/CompanyProfile";
import NavigationBar from "./Home/NavigationBar";
const Login = React.lazy(() => import("../components/Login/Login"));
const ProtectedRoute = React.lazy(() => import("../components/ProtectedRoute"));
const Jobs = React.lazy(() => import("./JobPage/Jobs"));
const CompaniesPage = React.lazy(() => import("./company/CompaniesPage"));

const AnimatedRoutes = ({ currentUser }) => {
  const navigate = useNavigate();
  const { isCompany, homeLoading } = useGlobalUser();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]);
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
      <Navbar isCompany={isCompany} loading={homeLoading} />
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
        <Route path="/postJob" element={<PostJobPage />}></Route>
        <Route path="/company/:id" element={<App />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/companyProfile" element={<CompanyProfile />}></Route>
      </Routes>
      <NavigationBar />
      <Footer />
    </Suspense>
  );
};

export default AnimatedRoutes;
