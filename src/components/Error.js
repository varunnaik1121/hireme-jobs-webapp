import React from "react";
import "./Error.css";
import AnimatedPage from "./AnimatedPage";

import { Link } from "react-router-dom";
const Error = () => {
  return (
    <AnimatedPage>
      <section className="page_404">
        <h1 className="text-center ">404</h1>
        <div className="gif"></div>
        <div className="sec-below">
          <h3>Look like you're lost</h3>
          <p>the page you are looking for not avaible!</p>
          <button className="btn-error">
            <Link to={"/"} className="link">
              Go to Home Page
            </Link>
          </button>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Error;
