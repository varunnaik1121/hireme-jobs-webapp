import React from "react";
import "./testimonials.css";
const TestimonialCard = ({ image, name, jobTitle, description }) => {
  return (
    <figure class="snip1192">
      <blockquote>{description}</blockquote>
      <div class="author">
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
