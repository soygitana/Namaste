import React from "react";
import { Link } from "react-router-dom";

const HomeClasses = () => (
  <section id="classes" className="home-classes">
    <div className="container-flex">
      <h2 className="title">Choose a Yoga style to fit your intention </h2>
      <Link to="/classes" className="button">
        Check our classes
      </Link>
    </div>
  </section>
);

export default HomeClasses;
