import React from "react";
import { FaCheck, FaGithub } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../components/common/GoBack";

function Closet() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>Misa's Closet</h1>
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="/assets/images/project/closet.png" alt="Misa's Closet" />
                                </div>
                                <div className="post-content">
                                    <p className="first">A fashion e-commerce website.</p>
                                    <br/>
                                    <p>
                                        <b>Technologies Used:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            PHP / Laravel
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            SCSS
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            MySQL
                                        </li>
                                    </ul>
                                    <br/>
                                    <div className="second">
                                        <p>・Built a front-end interface for the product list page and the product detail page.</p>
                                        <p>・Developed using a <b>RESTful API</b> server in <b>Laravel</b>.</p>
                                    </div>
                                    <br/>
                                    <p>
                                        <b>Future Features:</b>
                                    </p>
                                    <div className="second">
                                        <p>・Payment functions using the Stripe API.</p>
                                        <p>・User Authentication</p>
                                        <p>・Implementation of posting and displaying user reviews.</p>
                                        <p>・UI design for fashion lovers.</p>
                                    </div>
                                </div>
                                <div class="post-tags">
                                    <span>Link:</span>
                                    <ul>
                                        <li>
                                            <a href="https://github.com/misa335/ec-project" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
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

export default Closet;
