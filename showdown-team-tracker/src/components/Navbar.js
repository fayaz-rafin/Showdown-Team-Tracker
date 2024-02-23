import React from "react";
import { NavLink } from "react-router-dom";
//import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">
                    <img className="rhydon" src="https://www.pokencyclopedia.info/sprites/gen1/spr_red-blue_gb/spr_rb-gb_112.png" alt="Rhydon"></img>
                </NavLink>
                <div
                    className={"nav__menu"}
                    id="nav-menu"
                >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/news" className="nav__link">
                                News
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/about-us"
                                className="nav__link"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/favorite"
                                className="nav__link"
                            >
                                Favorite
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/location"
                                className="nav__link"
                            >
                                Format
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;