import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/about/about.JPEG)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">ABOUT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Hello, I am Misako Kondoh.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>Born and raised in Nagoya, currently based in Tokyo. I started my career as a science teacher at a high school. Next I was in charge of business process remodeling administration by using RPA which is a low coding software. I consider myself a "multipotentialite" within various fields.</p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web Apps</h5>
                                                <p>JavaScript (React, Vue.js)</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-notepad"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web Apps</h5>
                                                <p>PHP (Laravel)</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-palette"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web Apps</h5>
                                                <p>Ruby (Ruby on Rails)</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-mobile"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Mobile Apps</h5>
                                                <p>React Native with Expo</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-gallery"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Small Projects</h5>
                                                <p>Python (OpenCV/pyautogui)</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-agenda"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Business Process Re-engineering</h5>
                                                <p>RPA (Automation Anywhere/WinActor)</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;
