import React from "react";
import "./TestimonialCard.css";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        {/* Profile Image */}
        <img src={testimonial.img} className="testimonial-card__image" alt={testimonial.name} />

        {/* Date in the top-right */}
        <span className="testimonial-date">
          {testimonial.time
            ? testimonial.time.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No timestamp available"}
        </span>
      </div>

      {/* Name under the image */}
      <div className="testimonial-content">
        <h2 className="testimonial-name">{testimonial.name} 
        <span className="testimonial-relation"> {testimonial.relation} </span>
        </h2>
        
        <p className="testimonial-message">{testimonial.message}</p>
      </div>
    </div>
  );
};
