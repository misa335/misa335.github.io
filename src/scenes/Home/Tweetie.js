import React from "react";
import { FaCheck, FaGithub } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../components/common/GoBack";

function Tweetie() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>Tweetie</h1>
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
                                    <img src="/assets/images/blog/tweetie.png" alt="Tweetie" />
                                </div>
                                <div className="post-content">
                                    <p className="first">An app that allows users to post tweets.</p>
                                    <br/>
                                    <p>
                                        <b>Technologies Used:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            Ruby / Ruby on Rails
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            SCSS
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            sqlite3
                                        </li>
                                    </ul>
                                    <br/>
                                    <div className="second">
                                        <p>・Developed using a <b>RESTful API</b> server in <b>Ruby on Rails</b>.</p>
                                        <p>・Built a front end interface, and created a user authentication function with <b>Ruby on Rails</b>. </p>
                                    </div>
                                </div>
                                <div class="post-tags">
                                    <span>Link:</span>
                                    <ul>
                                        <li>
                                            <a href="https://github.com/misa335/rails-tweetapp" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
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

export default Tweetie;
