import React, { Component } from "react";
import Carousel from "./Carousel.jsx";
import img from "../assets/about.jpg";

class About extends Component {
  render() {
    return (
      <>
        <section id="about" className="about">
          <div className="app-container">
            <h2 className="title">about</h2>

            <div className="container-flex">
              <div className="box-flex">
                <img className="img-fluid" src={img} alt="yoga" />
              </div>
              <div className="box-flex">
                <h2 className="title">Welcome to Namaste!</h2>
                <h2 className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  inventore quisquam sapiente a. Laudantium consectetur dolorum
                  officiis quas facilis ducimus saepe ipsa fugiat ea odit nemo,
                  reprehenderit porro voluptates excepturi.
                </h2>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="container-flex">
              <div className="box-flex">
                <ul>
                  <li>convallis cubilia dictum dictumst quis</li>
                  <li>sagittis sapien senectus sociis vehicula</li>
                  <li>landit cum egestas eleifend facilisis</li>
                  <li>platea proin purus quis risus sed tempor</li>
                  <li>eleifend faucibus fusce gravida habitant</li>
                </ul>
              </div>
              <div className="box-flex">
                <h2 className="title">Aptent dignissim felis?</h2>
                <h2 className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  inventore quisquam sapiente a. Laudantium consectetur dolorum
                  officiis quas facilis ducimus saepe ipsa fugiat ea odit nemo,
                  reprehenderit porro voluptates excepturi.
                </h2>
              </div>
            </div>
            <div className="container-flex">
              <h2 className="title">our teachers</h2>
              <div className="box-flex">
                <Carousel />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
