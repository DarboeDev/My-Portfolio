import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { testimonials as testimonialsData } from "../../data/testimonials";
import "./Testimonial.scss";

// Testimonial
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // handle btn click
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  // set static testimonials data
  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  // current testimonial
  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            {/* customer image */}
            <img src={`/testimonials/${test.imgurl}`} alt={test.name} />
            <div className="app__testimonial-content">
              {/* customer feedback */}
              <p className="p-text">{test.feedback}</p>
              {/* customer info */}
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            {/* Left */}
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            {/* Right */}
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
