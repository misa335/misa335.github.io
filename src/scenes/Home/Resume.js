import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
import ProgressBar from "../../components/common/ProgressBar";

const skills = [
    {
        title: "Web Apps Development",
        percent: 100,
    },
    {
        title: "Mobile Apps Development",
        percent: 80,
    },
    {
        title: "Customer Service",
        percent: 90,
    },
    {
        title: "Business Process Re-engineering",
        percent: 100,
    },
    {
        title: "Education",
        percent: 100,
    },
    {
        title: "Marketing online",
        percent: 70,
    },
];
const education = [
    {
        title: "Code Chrysalis",
        subtitle: "Coding Bootcamp | Tokyo",
        description: ["・Studied the intensive program based on Agile methodology.", "・Not only just to learn how to code, but also how to think like an autonomous and versatile software engineer so as to be competitive in today's ever evolving tech world.", "・The curriculum is industry-aligned with a Silicon Valley-mindset, optimized for efficiency and impact."],
        date: "(Feb 2021-May 2021)",
        icon: "ti-medall",
    },
    {
        title: "Nagoya Institute of Technology",
        subtitle: "Bachelor’s in Chemical Engineering | Nagoya",
        description: ['・Majored in applied chemistry and studied general chemistry, biochemistry and life science.', '・My graduation thesis was "On the solubilization of amino acids into SDS micelles".', '・The SDS micelles were used as cell membranes, and I conducted research that could be applied in the fields of supplements and cosmetics.'],
        date: "(Apr 2007-Mar 2011)",
        icon: "ti-medall",
    },
];
const experience = [
    {
        title: "Tech Mentor at Waffle Camp",
        subtitle: "Waffle Org. | Tokyo",
        description: ["・Waffle's vision is to close the gender gap by empowering and educating women in the technology field.", "・Coached how to initialize VS Code and develop a website with HTML & CSS.","・Mentored 1-on-1 session of how to design headers, internal links, backgrounds, and how to utilize flexbox.", "・Encouraged teenage girls to enjoy coding."],
        date: "(Aug 2020-Present)",
        icon: "ti-marker-alt",
    },
    {
        title: "Tech Mentor",
        subtitle: "Code Chrysalis | Tokyo",
        description: ["・Provided technical support such as how to set up a knex.js file for a full stack app for the first time.", "・Conferred algorithm quizzes and demonstrating the solutions.", "・Interacted with students that felt anxious or troubled, and encouraged them to stay motivated.", "・Improved the program by modifying the sprints, adding translations of explanations of procedures, and conducting surveys of graduates."],
        date: "(May 2021-Aug 2021)",
        icon: "ti-ruler-pencil",
    },
    {
        title: "RPA Engineer/RPA Instructor/Lead CRM",
        subtitle: "TECHVAN | Tokyo",
        description: ["・Automated the repetitive tasks which reduced workload by 500 hours per year.", "・Planned, launched and conducted RPA seminars, created seminar programs, prepared textbooks.", "・Launched Twitter and YouTube platforms, planned and created content, and managed the accounts.", "・Responded to technical questions from customers and provided support for development."],
        date: "(Feb 2020-Jan 2020)",
        icon: "ti-agenda",
    },
    {
        title: "BPR Promoter/Administrator",
        subtitle: "Central Japan Industrial Asociation | Nagoya",
        description: ["・Developed RPA programs that reduced workload by 1000 hours per year.", "・Initiated in improving the operational efficiency of my department by involving members."],
        date: "(Jul 2017-Jan 2020)",
        icon: "ti-write",
    },
    {
        title: "Course Director (Dance)",
        subtitle: "Avex Management | Nagoya",
        description: ["・Achieved 100% of the target value for new students that enrolled in July 2017. (Customer acquisition in April - June 2017)", "・Organized dance workshops and achieved a 60% profit margin by utilizing social media."],
        date: "(Jan 2017-Jun 2017)",
        icon: "ti-microphone",
    },
    {
        title: "High School Teacher (Science)",
        subtitle: "Sugiyama Jogakuen High School | Nagoya",
        description: ["・Taught an average of 200 students each year to understand concepts and rationale in developing logical thinking rather than simply having students learn as knowledge.", "・Coached the dance team; earned a first and second place finish in the region competition. Led the team to the nationals."],
        date: "(Apr 2013-Dec 2016)",
        icon: "ti-pencil-alt",
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
                                                    <p>{item.description[0]}</p>
                                                    <p>{item.description[1]}</p>
                                                    <p>{item.description[2]}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Work Experience</h4>
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
                                                    <p>{item.description[0]}</p>
                                                    <p>{item.description[1]}</p>
                                                    <p>{item.description[2]}</p>
                                                    <p>{item.description[3]}</p>
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
