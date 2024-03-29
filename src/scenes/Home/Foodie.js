import React from "react";
import { FaCheck, FaGithub } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../components/common/GoBack";

function Foodie() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>Foodie</h1>
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="/assets/images/project/foodie.png" alt="Foodie" />
                                </div>
                                <div className="post-content">
                                    <p className="first">An app that allows users to create a list of eateries.</p>
                                    <br/>
                                    <p>
                                        <b>Technologies Used:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            Front-end:<br/>
                                            　・React.js <br/>
                                            　・Material-UI
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Back-end:<br/>
                                            　・Node.js <br/>
                                            　・Express.js <br/>
                                            　・Knex.js <br/>
                                            　・PostgreSQL
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Data and APIs:<br/>
                                            　・HotPepper API
                                        </li>
                                    </ul>
                                    <br/>
                                    <div className="second">
                                        <p>・Rolled out a front end interface with <b>React</b> and <b>Axios</b>.</p>
                                        <p>・Augmented <b>Material-UI</b> to design the front end.</p>
                                        <p>・Created using a <b>RESTful API</b> server in <b>Node.js</b> and <b>Express.js</b> to utilize existing user data from a 3rd party API.</p>
                                    </div>
                                    <br/>
                                    <p>
                                        <b>Future Features:</b>
                                    </p>
                                    <div className="second">
                                        <p>・Implementation of the "favorite" button and the "places to go" button.</p>
                                        <p>・Posting function to social media.</p>
                                        <p>・Display eatery on Google Map.</p>
                                    </div>
                                </div>
                                <div class="post-tags">
                                <span>Link:</span>
                                    <ul>
                                        <li>
                                            <a href="https://github.com/misa335/gourmet-api" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
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

export default Foodie;
