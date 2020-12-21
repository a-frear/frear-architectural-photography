import React from 'react';
import './About.css';

function About(){
    return (
        <section className="about">
        <div>
            <img src="img/amy.jpg" alt="Amy Frear" className="amy-pic"/>
        </div>
        <div >
            <h2>About</h2>
            <p>My name is Amy, I'm an architectural photographer based in Philly. With a background in film and cinema, I'm dedicated to simple, fun, bright photography and work mainly with design build firms.</p>
        </div>
    </section>
    )
}

export default About;