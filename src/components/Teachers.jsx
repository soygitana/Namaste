import React from "react";
import { slides } from "./database";

const Teachers = () => [
  <section id="teachers" className="teachers">
    <div className="app-container">
      <h2 className="title">our teachers</h2>
      <p className="quote">Yoga is the ultimate practice. It simultaneously stimulates our inner light and quiets our overactive minds. It is both energy and rest. Yin and Yang. We feel the burn and find our bliss.</p>
      <div className="container-flex">
        {slides.map((e) => (
          <Teacher
            key={e.id}
            photo={e.image}
            title={e.title}
            text={e.text2} 
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
      <p className="description">
        <span>{props.title}</span>{props.text}
      </p>
    </div>
  </>,
];

export default Teachers;
