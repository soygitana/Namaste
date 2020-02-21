import React, { Component } from "react";
import home2 from '../assets/home2.jpg';

class About extends Component {
    render() {
        return (
            <>
            <section id="about" className="about">
                <div className="app-container">
                    <h2 className="title">about</h2>

                        <div className="container-flex">
                            <div className="box-flex">
                                <img className="img-fluid" src={home2} alt="yoga" />
                            </div>
                            <div className="box-flex">
                                <h2 className="title">Welcome to Namaste!</h2>
                                <h2 className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore quisquam sapiente a. Laudantium consectetur dolorum officiis quas facilis ducimus saepe ipsa fugiat ea odit nemo, reprehenderit porro voluptates excepturi.</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="container-flex">
                            <div className="box-flex">
                                <img className="img-fluid" src={home2} alt="yoga" />
                            </div>
                            <div className="box-flex">
                                <h2 className="title">Welcome to Namaste!</h2>
                                <h2 className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore quisquam sapiente a. Laudantium consectetur dolorum officiis quas facilis ducimus saepe ipsa fugiat ea odit nemo, reprehenderit porro voluptates excepturi.</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="container-flex">
                            <div className="box-flex">
                                <img className="img-fluid" src={home2} alt="yoga" />
                            </div>
                            <div className="box-flex">
                                <h2 className="title">Welcome to Namaste!</h2>
                                <h2 className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore quisquam sapiente a. Laudantium consectetur dolorum officiis quas facilis ducimus saepe ipsa fugiat ea odit nemo, reprehenderit porro voluptates excepturi.</h2>
                                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                
                </div>
                </section>
        </>
        )
    }
}
export default About;