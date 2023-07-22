import React from "react";
import food1 from "../images/food1.avif"
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <section className="hero container">
            <div>
                <h1>Little Lemon</h1>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={food1} />
            </div>
        </section>
    )
}

export default Hero;