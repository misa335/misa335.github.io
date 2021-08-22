import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
import ProgressBar from "../../components/common/ProgressBar";

const skills = [
    {
        title: "Web Apps",
        percent: 100,
    },
    {
        title: "Mobile Apps",
        percent: 80,
    },
    {
        title: "Business Process Automation",
        percent: 90,
    },
    {
        title: "Business Process Remodeling",
        percent: 100,
    },
    {
        title: "Education",
        percent: 100,
    },
    {
        title: "Marketing online",
        percent: 75,
    },
];
const education = [
    {
        title: "Code Chrysalis",
        subtitle: "Coding Bootcamp | Tokyo",
        description: "Intensive program based on Agile methodology.",
        date: "(Feb 2021-May 2021)",
        icon: "ti-crown",
    },
    {
        title: "Nagoya Institute of Technology",
        subtitle: "Bachelor’s in Chemical Engineering | Nagoya",
        description: "Majored in applied chemistry and studied general chemistry, biochemistry and life science. My graduation thesis was on the solubilization of amino acids into SDS micelles. The SDS micelles were used as cell membranes, and I conducted research that could be applied in the fields of supplements and cosmetics.",
        date: "(Apr 2007-Mar 2011)",
        icon: "ti-cup",
    },
    {
        title: "Stanford University",
        subtitle: "Web Design Course | New York",
        description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        date: "(2016-2018)",
        icon: "ti-ruler-alt-2",
    },
];
const experience = [
    {
        title: "UI/UX Designer",
        subtitle: "Google INC | New York",
        description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        date: "(2016-2018)",
        icon: "ti-pencil-alt",
    },
    {
        title: "Front-End Developer",
        subtitle: "Amazon INC | New York",
        description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        date: "(2016-2018)",
        icon: "ti-heart",
    },
    {
        title: "Back-End Developer",
        subtitle: "Facebook INC | New York",
        description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        date: "(2016-2018)",
        icon: "ti-paint-bucket",
    },
];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Education & Experience</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>{item.subtitle} <small>{item.date}</small></h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <ProgressBar label={item.title} percent={item.percent} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Resume;
