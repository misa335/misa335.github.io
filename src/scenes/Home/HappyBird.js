import React from "react";
import { FaCheck, FaGamepad } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../components/common/GoBack";

function HappyBird() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>Happy Bird</h1>
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="/assets/images/project/happybird.png" alt="Happy Bird" />
                                </div>
                                <div className="post-content">
                                    <p className="first">A mini game created in Scratch.</p>
                                    <br/>
                                    <p>
                                        <b>Technologies Used:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            Scratch
                                        </li>
                                    </ul>
                                    <br/>
                                    <div className="second">
                                        <p>・Created as part of Harvard's CS50 assignment.</p>
                                        <p>・Designed animations of a bird flying(bird wings, background transitions).</p>
                                        <p>・Implemented an algorithm to increase or decrease the score when hitting an object.</p>
                                    </div>
                                </div>
                                <div class="post-tags">
                                    <span>Link:</span>
                                    <ul>
                                        <li>
                                            <a href="https://scratch.mit.edu/projects/532243461" target="_blank" rel="noopener noreferrer"><FaGamepad /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default HappyBird;
