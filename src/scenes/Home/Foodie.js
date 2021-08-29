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
                                    {/* <p>
                                        <span className="category">Mobile App</span>
                                    </p>
                                    <p>
                                        <span class="date">April, 2021</span>
                                    </p> */}
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="/assets/images/blog/foodie.png" alt="Foodie" />
                                </div>
                                <div className="post-content">
                                    <p className="first">An app that allows users to create a list of eateries.</p>
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
                                        {/* <li>
                                            <FaCheck className="icon" />
                                            Deployment and CI/CD collaboration:<br/>
                                            　・Heroku
                                        </li> */}
                                    </ul>
                                    <div className="second">
                                        <p>・Rolled out a front end interface with <b>React</b> and <b>Axios</b>.</p>
                                        <p>・Augmented <b>Material-UI</b> to design the front end.</p>
                                        <p>・Created using a <b>RESTful API</b> server in <b>Node.js</b> and <b>Express.js</b> to utilize existing user data from 3rd party API.</p>
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
