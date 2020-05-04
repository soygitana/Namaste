import React from "react";
import PriceBox from "./PriceBox.jsx";
import { Link } from "react-router-dom";

const HomePrices = () => (
  <section id="membership" className="boxes">
    <h2 className="title">Choose your package</h2>
    <div className="container-flex">
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
    </div>
    <div className="container-flex-button">
      <Link to="/membership" className="button">
        <i className="far fa-credit-card"></i>check prices
      </Link>
    </div>
  </section>
);

export default HomePrices;
