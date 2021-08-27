import React from "react";
import { FaCheck, FaMobileAlt, FaYoutube, FaGithub } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../components/common/GoBack";

function Neptune() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>mymizu neptune</h1>
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
                                    <img src="/assets/images/blog/neptune.png" alt="mymizu neptune" />
                                </div>
                                <div className="post-content">
                                    <p>MyMizu provides a crowd-sourced platform for locations where you can get water with your water bottle to encourage users to consume less bottled water. We've created an app prototype with following enhanced features. Users can review on water refill spots and find a route with water refill spots around.</p>
                                    <p>
                                        <b>Technologies Used:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            Front-end:<br/>
                                            　・React.js <br/>
                                            　・react-google-maps API <br/>
                                            　・Bootstrap
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
                                            　・Google maps: Map marker, Geocoding, Route planning <br/>
                                            　・mymizu: water refill spot info
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Deployment and CI/CD collaboration:<br/>
                                            　・Heroku <br/>
                                            　・Github <br/>
                                            　・Slack
                                        </li>
                                    </ul>
                                    <p>・Made in collaboration with mymizu to add functionality to mymizu's existing apps.</p>
                                    <p>・Created using a RESTful API server in Node.js and Express.js to utilize existing user data from mymizu’s API.</p>
                                    <p>・Built a front end interface with React and Axios for a team of 4 within 3 days.</p>
                                    <p>・Create a professional UI design myself and recreate the same design as the original app to come up with a new feature for the app that was actually in production.</p>
                                    <p>・Continuously integrated and deployed software to Heroku.</p>
                                </div>
                                <div class="post-tags">
                                    <span>Links:</span>
                                    <ul>
                                        <li>
                                            <a href="https://mymizu-neptune.herokuapp.com/main" target="_blank" rel="noopener noreferrer"><FaMobileAlt /></a>
                                        </li>
                                        <li>
                                            <a href="https://youtu.be/vwMpFxsuQgQ?t=2818" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/teamplankton/mymizu-neptune" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
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

export default Neptune;
