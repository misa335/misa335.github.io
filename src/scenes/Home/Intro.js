import React from "react";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Intro() {
    return (
        <section className="section section-hero section-hero-2 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/home.png)` }}>
            <span className="el-circle-side right"></span>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 300,
                            density: {
                                enable: true,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        move: {
                            direction: "top",
                            out_mode: "out",
                        },
                        line_linked: {
                            enable: false,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble",
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 3,
                            },
                            repulse: {
                                distance: 400,
                                duration: 4,
                            },
                        },
                    },
                }}
            />
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">I'm Misako Kondoh.</span>
                        </p>
                        
                        <h1>
                            I am 
                            <Typewriter
                            // loop={true}
                            // autoStart={true}
                            // onInit={(typewriter)=> {
                            //     typewriter
                            //     .typeString("I'm a Software Engineer.")
                            //     .pauseFor(1000)
                            //     .deleteChars(18)
                            //     .typeString("Multipotentialite.")
                            //     .deleteAll()
                            //}}
                            options={{
                                autoStart:true,
                                loop:true,
                                strings:['a Software Engineer.', 'a Multipotentialite.', 'Bilingual (JP & EN).']
                            }}
                        />
                            Based in Tokyo, Japan
                        </h1>
                        <Link to="//portfolio">
                        <button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <span className="text">My Portfolio</span>
                        </button>
                        </Link>
                        <a href="https://drive.google.com/file/d/1iF5TqXgEuyTg1gQ22KupS8_QOlNtKkih/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="button button-lg button-dark">
                                <span className="text">My Resume</span>
                            </button>
                        </a>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
