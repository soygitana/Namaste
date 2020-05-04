import React, { Component } from "react";
import PriceBox from "./PriceBox.jsx";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";

const Membership = () => (
  <section id="membership" className="boxes home-membership">
    <div className="app-container">
      <h2 className="title">membership</h2>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        quidem quia velit nostrum ratione alias molestiae nobis officia, minima
        quibusdam reprehenderit laudantium temporibus praesentium obcaecati. Ea
        neque fugit praesentium. Sit amet consectetur adipisicing elit.
      </p>
      <h2>Lorem ipsum dolor</h2>
      <div className="container-flex">
        <PriceBox
          num="1 class"
          price="10"
          text1="Lorem ipsum dolor"
          text2="Sit amet consectetur"
          text3="Nostrum officia corporis"
          text4="Veritatis ipsa qui"
        />
        <PriceBox
          num="4 classes"
          price="30"
          text1="Lorem ipsum dolor"
          text2="Sit amet consectetur"
          text3="Nostrum officia corporis"
          text4="Veritatis ipsa qui"
        />
        <PriceBox
          num="8 classes"
          price="50"
          text1="Lorem ipsum dolor"
          text2="Sit amet consectetur"
          text3="Nostrum officia corporis"
          text4="Veritatis ipsa qui"
        />
        <PriceBox
          num="12 classes"
          price="55"
          text1="Lorem ipsum dolor"
          text2="Sit amet consectetur"
          text3="Nostrum officia corporis"
          text4="Veritatis ipsa qui"
        />
      </div>
      <h2>Lorem ipsum dolor</h2>
      <div className="container-flex">
        <PriceBox
          num="1 month"
          price="60"
          text1="Lorem ipsum dolor"
          text2="Sit amet consectetur"
          text3="Nostrum officia corporis"
          text4="Veritatis ipsa qui"
        />
        <PriceBox
          num="3 months"
          price="110"
          text1="Lorem ipsum dolor"
          text2="Sit amet consectetur"
          text3="Nostrum officia corporis"
          text4="Veritatis ipsa qui"
        />
        <PriceBox
          num="6 months"
          price="200"
          text1="Lorem ipsum dolor"
          text2="Sit amet consectetur"
          text3="Nostrum officia corporis"
          text4="Veritatis ipsa qui"
        />
        <PriceBox
          num="12 months"
          price="320"
          text1="Lorem ipsum dolor"
          text2="Sit amet consectetur"
          text3="Nostrum officia corporis"
          text4="Veritatis ipsa qui"
        />
      </div>
    </div>
    <div className="app-container">
      <h2>Lorem ipsum dolor</h2>
      <div className="container-flex container-flex-cards">
        <img src={card1} alt="card" />
        <img src={card2} alt="card" />
        <img src={card3} alt="card" />
        <img src={card4} alt="card" />
      </div>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cumque
        quidem quia velit nostrum ratione alias molestiae nobis officia. Ducimus
        cumque quidem quia velit nostrum ratione alias molestiae nobis officia.
      </p>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </section>
);

export default Membership;
