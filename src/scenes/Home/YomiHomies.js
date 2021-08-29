import React from "react";
import { FaCheck, FaGooglePlay, FaYoutube, FaGithub } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../components/common/GoBack";

function YomiHomies() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>YomiHomies</h1>
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
                                    <img src="/assets/images/blog/yomihomies.png" alt="YomiHomies" />
                                </div>
                                <div className="post-content">
                                    <p className="first">A matching app for book lovers to connect with like-minded people. Set up your profile and add your favorite books, authors, and genres. Then start swiping to find some homies. Once matched, you can chat with your new homie.</p>
                                    <p>
                                        <b>Technologies Used:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            React Native
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Expo
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Google Books API
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            AWS Amplyfy:<br/>
                                            　・Cognito for authentication <br/>
                                            　・DynamoDB with AppSync and GraphQL API
                                        </li>
                                    </ul>
                                    <div className="second">
                                        <p>・Oversaw engineering of <b>Platform-specific</b> implementation for a team of 4 within 3 weeks.</p>
                                        <p>・Designed front end interface with <b>React Native</b> using <b>Expo</b> for testing on Android and iOS devices.</p>
                                        <p>・Utilized the Google Books API to display candidates to perform matching by book title; the book titles to be registered would match perfectly; preventing input errors.</p>
                                    </div>
                                </div>
                                <div class="post-tags">
                                    <span>Links:</span>
                                    <ul>
                                        <li>
                                            <a href="https://bit.ly/3CXhtAN" target="_blank" rel="noopener noreferrer"><FaGooglePlay /></a>
                                        </li>
                                        <li>
                                            <a href="https://youtu.be/S9GBXQEosK4?t=514" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Book-Meet/YomiHomies" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
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

export default YomiHomies;
