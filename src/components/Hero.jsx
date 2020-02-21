import React, { Component } from "react";
import { Link } from 'react-router-dom';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';


class Hero extends Component {
    render() {
        return (
            <>
                <div className="app-container">
                    <section id="about" className="hero">

                     
                        <div className="container-flex">
                            <div className="box-flex">
                                <img className="img-fluid" src={home1} alt="yoga" />
                                <h2 className="title">The best Yoga in the Town</h2>
                                <Link to='/classes' className="button">Check classes</Link>
                            </div>
                            <div className="box-flex">
                                <img className="img-fluid" src={home2} alt="yoga" />
                                <h2 className="title">Find your place in Namaste</h2>
                                <Link to='/membership' className="button">Check timetable</Link>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="container-flex">
                            <div className="box-flex">
                                <i className="fas fa-sun"></i>
                                <h2 className="title">Find your balance</h2>
                                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quam repellendus iusto laboriosam veniam iste aliquid accusantium animi facilis laborum tempore maiores sequi fugit.</p>
                                <a className="button button-circle" href="#">More</a>
                            </div>
                            <div className="box-flex">
                                <i className="fas fa-spa"></i>
                                <h2 className="title">Inhale the future</h2>
                                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quam repellendus iusto laboriosam veniam iste aliquid accusantium animi facilis laborum tempore maiores sequi fugit.</p>
                                <a className="button button-circle" href="#">More</a>
                            </div>
                            <div className="box-flex">
                                <i className="fas fa-certificate"></i>
                                <h2 className="title">Stay strong</h2>
                                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quam repellendus iusto laboriosam veniam iste aliquid accusantium animi facilis laborum tempore maiores sequi fugit.</p>
                                <a className="button button-circle" href="#">More</a>
                            </div>
                        </div>

                    </section>
                </div>
            </>
        )
    }
}
export default Hero;