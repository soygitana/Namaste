import React from "react";

const Footer = () => (
  <section className="footer">
    <div className="app-container">
      <div className="container-flex">
        <div className="box-flex  about">
          <h2 className="title">about our club</h2>
          <p className="text">
            Lorem ipsum dolor sit amet NAMASTE adipisicing elit. Blanditiis
            vitae cupiditate doloremque perspiciatis voluptatem necessitatibus
            aspernatur.
          </p>
        </div>
        <div className="box-flex teachers">
          <h2 className="title">our teachers</h2>
          <p className="text">
            Rugiat dolore non atque NAMASTE temporibus accusamus placeat
            pariatur.
          </p>
        </div>
        <div className="box-flex rules">
          <h2 className="title">rules and regulations</h2>
          <p className="text">
            Sit amet consectur, blanditiis vitae cupiditate doloremque
          </p>
          <a href="#">read</a>
        </div>
        <div className="box-flex">
          <h2 className="title">hours</h2>
          <p className="text">
            <span>Monday</span>6am - 10pm
          </p>
          <p className="text">
            <span>Tuesday</span>6am - 10pm
          </p>
          <p className="text">
            <span>Wednesday</span>6am - 10pm
          </p>
          <p className="text">
            <span>Thursday</span>6am - 10pm
          </p>
          <p className="text">
            <span>Friday</span>6am - 10pm
          </p>
          <p className="text">
            <span>Saturday</span>8am - 9pm
          </p>
        </div>
      </div>
    </div>
    <div className="container-flex">
      <p className="copy">
        © 2019 - All rights reserverd by{" "}
        <a href="https://github.com/soygitana" target="_blank">
          soygitana
        </a>
      </p>
    </div>
  </section>
);

export default Footer;


