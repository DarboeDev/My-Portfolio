import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { abouts as aboutData } from "../../data/abouts";
import "./About.scss";

// About
const About = () => {
  const [abouts, setAbouts] = useState([]);

  // set static about data
  useEffect(() => {
    setAbouts(aboutData);
  }, []);

  return (
    <>
      {/* Heading */}
      <h2 className="head-text">
        I Know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <div className="app__profiles-icon">
              <span>{about.icon}</span>
            </div>
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text">{about.description}</p>
            <div className="app__profiles-skills">
              {about.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
