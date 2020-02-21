import React, { Component } from "react";
import Hero from './Hero.jsx'
import HomeClasses from './HomeClasses.jsx'
import HomeVideo from './HomeVideo.jsx'
import HomePrices from './HomePrices.jsx'
import HomeVoucher from './HomeVoucher.jsx'


class Home extends Component {
    render() {
        return (
            <>
                <div className="app-container">

                    <Hero />
                    <HomeClasses />
                    <HomeVideo />
                    <HomePrices />

                </div>
                <HomeVoucher />
            </>
        )
    }
}

export default Home;
