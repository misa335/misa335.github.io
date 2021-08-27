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
                                    <img src="/assets/images/blog/closet.png" alt="Misa's Closet" />
                                </div>
                                <div className="post-content">
                                    <p>A fashion e-commerce website.</p>
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
                                    {/* <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                                    <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p> */}
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
