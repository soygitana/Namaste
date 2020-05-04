import React from "react";
import { Link } from "react-router-dom";

const PriceBox = (props) => (
  <div className="box-flex">
    <div className="number">
      <h3>{props.num}</h3>
      <p>/monthly</p>
    </div>
    <div className="price">
      <span>$</span>
      <p>{props.price}</p>
    </div>
    <div className="description">
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
      <p>{props.text4}</p>
    </div>
    <Link to="/membership" className="button">
      buy
    </Link>
  </div>
);

export default PriceBox;
