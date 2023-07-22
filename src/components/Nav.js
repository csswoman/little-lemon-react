import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png"

const Nav = () => {
    return (
        <header>
            <nav>
                <a href="/">
                    <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
                </a>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>
                    </li>
                    <li>
                        <a href="/Booking">Order Online</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;