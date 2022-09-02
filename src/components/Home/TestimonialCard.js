import React from "react";
import "./testimonials.css";
const TestimonialCard = ({ image, name, jobTitle, description }) => {
  return (
    <figure className="snip1192">
      <blockquote>{description}</blockquote>
      <div className="author">
        <img src={image} alt="sq-sample1" />
        <h5>
          {jobTitle}
          <span>{name}</span>
        </h5>
      </div>
    </figure>
  );
};

export default TestimonialCard;
