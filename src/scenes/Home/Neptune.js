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
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="/assets/images/project/neptune.png" alt="mymizu neptune" />
                                </div>
                                <div className="post-content">
                                    <p className="first">An app that allows users to enter a route and search for <a href="https://www.mymizu.co/" target="_blank" rel="noopener noreferrer"><i>mymizu</i></a> water points between a starting point and destination.</p>
                                    <br/>
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
                                    <br/>
                                    <div className="second">
                                        <p>・mymizu provides a cloud-sourced platform for locations where users can refill their own water bottles.</p>
                                        <p>・Collaborated with mymizu to add functionality to mymizu's existing apps.</p>
                                        <p>・Implemented using a <b>RESTful API</b> server in <b>Node.js</b> and <b>Express.js</b> to utilize existing user data from mymizu’s API.</p>
                                        <p>・Built a front end interface with <b>React</b> and <b>Axios</b> for a team of 4 within 3 days.</p>
                                        <p>・Replicated a professional UI design as an original app.</p>
                                        <p>・Continuously integrated and deployed software to <b>Heroku</b>.</p>
                                    </div>
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