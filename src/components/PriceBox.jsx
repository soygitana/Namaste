import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PriceBox extends Component {
    render() {
        const { num, price, text1, text2, text3, text4 } = this.props
        return (
            <div className="box-flex">
            <div className="number">
        <h3>{num}</h3>
        <p>/monthly</p>
            </div>
            <div className="price">
                <span>$</span>
        <p>{price}</p>
            </div>
            <div className="description">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>  
        <p>{text4}</p>
            </div>
            <Link to='/membership' className="button">buy</Link>
        </div>
        )
    }
}


export default PriceBox;

