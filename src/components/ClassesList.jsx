import React from "react";
import { yoga } from "./database";

const ClassesList = () => (
  <>
    {yoga.map((e) => (
      <ClassesItem
        key={e.id}
        photo={e.photo}
        title={e.title}
        text={e.description}
      />
    ))}
  </>
)

const ClassesItem = props => (
  <div className="container-flex box-flex-yoga">
    <div class="img-hover-zoom">
      <img className="img-fluid" src={props.photo} alt="img" />
    </div>
    <p className="title">{props.title}</p>
    <p className="text">{props.text}</p>
  </div>
)

export default ClassesList;

