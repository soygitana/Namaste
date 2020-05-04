import React from "react";
import { slides } from "./database";

const Teachers = () => [
  <section id="teachers" className="teachers">
    <div className="app-container">
      <h2 className="title">our teachers</h2>
      <div className="container-flex">
        {slides.map((e, idx) => (
          <Teacher
            photo={e.image}
            title={e.title.toUpperCase}
            text={e.text}
            key={idx}
          />
        ))}
      </div>
    </div>
  </section>,
];

const Teacher = (props) => [
  <>
    <div className="box-flex">
      <img className="img-fluid" src={props.photo} alt="img" />
      <p className="text">
        {props.title} {props.text}
      </p>
    </div>
  </>,
];

export default Teachers;
