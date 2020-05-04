import React from "react";
import ArticleList from "./ArticlesList.jsx";
import ClassesList from "./ClassesList.jsx";

const Classes = () => (
  <section id="classes" className="home-classes">
    <div className="app-container">
      <h2 className="title">classes</h2>
      <div className="container">
        <div className="container-flex container-flex-classes">
        <ArticleList />
        </div>
      </div>
      <div className="container-flex container-flex-classes">
        <ClassesList />
      </div>
      <p className="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corporis
        impedit accusantium, aperiam esse incidunt libero, tempore molestiae
        unde obcaecati doloremque eius vero repellendus perspiciatis voluptate.
        Quaerat earum delectus magni.
      </p>
      <h2>Lorem ipsum dolor</h2>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </section>
);

export default Classes;
