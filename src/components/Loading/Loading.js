import React from "react";
import { FadeLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="loading-container">
      <FadeLoader loading size={70} speedMultiplier={1} />
    </div>
  );
};

export default Loading;
