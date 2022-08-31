import React from "react";
import NavigationBar from "../Home/NavigationBar";

const AppWrap = (Component) =>
  function HOC() {
    return (
      <>
        <Component />
        <NavigationBar />
      </>
    );
  };

export default AppWrap;
