import React, { Component } from "react";
import Logo from './Logo.jsx'
import { Link } from 'react-router-dom';


class Navigation extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        
        this.setState({
          showMenu: !this.state.showMenu
        });
      }

    render() {
        return (
            <>
                <div className="app-container">
                    <div className="hero">
                        <div className="container-flex contact">
                            <i class="fa fa-phone"></i>
                            <p>500 987 xxx</p>
                            <a href="#"><i class="fab fa-facebook-square"></i></a>
                        </div>
                    </div>
                    <nav className="page-nav">
                        <Logo />
                        <h1>Namaste</h1>
                        <ul className="page-nav-list">
                            <li><Link to='/'>home</Link></li>
                            <li>
                                <Link onClick={this.showMenu} to='/' className="page-nav-about">about<i class="fa fa-angle-down"></i></Link>
                                {
                                    this.state.showMenu
                                        ? (
                                            <div className="drop-list">
                                                <Link to="/about" className="drop-list-item">about our club</Link>
                                                <Link to="/" className="drop-list-item">yoga teachers</Link>
                                                <Link to="/" className="drop-list-item">gallery</Link>
                                            </div>
                                        )
                                        : (
                                            null
                                        )
                                }
                            </li>
                            <li><Link to='/classes'>classes</Link></li>
                            <li><Link to='/schedule'>class schedule</Link></li>
                            <li><Link to='/membership'>membership</Link></li>
                            <li><Link to='/contact'>contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default Navigation;





