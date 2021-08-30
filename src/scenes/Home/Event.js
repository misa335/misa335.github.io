import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Components
import Headline from "../../components/common/Headline";

const portfolio = [
    {
        name: "All Events",
        items: [
            {
                id: 0,
                title: "YomiHomies",
                subtitle: "Senior project presentation",
                link: "https://youtu.be/S9GBXQEosK4?t=514",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/demoday.png",
            },
            {
                id: 1,
                title: "A New Daily Life with AR",
                subtitle: "Tech Talk",
                link: "https://youtu.be/IPYm1Ce8ACU?t=10906",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/techtalk.png",
            },
            {
                id: 2,
                title: "mymizu-neptune",
                subtitle: "API project presentation",
                link: "https://youtu.be/vwMpFxsuQgQ?t=2818",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/apinight.png",
            },
            {
                id: 3,
                title: "Website dev Mentor",
                subtitle: "Waffle Camp",
                link: "https://waffle-waffle.org/program/",
                icon: "ti-write",
                src: "/assets/images/portfolio/waffle.png",
            },
            {
                id: 4,
                title: "Nagoya vol.1",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/26959/",
                icon: "ti-write",
                src: "/assets/images/portfolio/nagoyagirls1.jpg",
            },
            {
                id: 5,
                title: "Nagoya vol.2",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/28112/",
                icon: "ti-write",
                src: "/assets/images/portfolio/nagoyagirls2.jpg",
            },
            {
                id: 6,
                title: "May 2020",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/31770/",
                icon: "ti-write",
                src: "/assets/images/portfolio/girls5.png",
            },
            {
                id: 7,
                title: "October 2020",
                subtitle: "RPA Community Girls",
                link: "https://youtu.be/wVVZjKZunhM",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/girls10.png",
            },
            {
                id: 8,
                title: "Hands-on Feb 2020",
                subtitle: "RPA Community",
                link: "https://rpa-bank.com/column/30280/",
                icon: "ti-write",
                src: "/assets/images/portfolio/handson.jpg",
            },
            {
                id: 9,
                title: "Mie vol.1",
                subtitle: "RPA Community",
                link: "https://rpa-bank.com/column/27166/",
                icon: "ti-write",
                src: "/assets/images/portfolio/mie.jpg",
            },
            {
                id: 10,
                title: "August 2020",
                subtitle: "RPA Community Girls",
                link: "https://youtu.be/mny87lp8dhY",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/girls8.png",
            },
            {
                id: 11,
                title: "December 2020",
                subtitle: "RPA Community Girls",
                link: "https://youtu.be/3SQt9Bqr0hk",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/girls12.png",
            },
            {
                id: 12,
                title: "vol.18 Feb 2020",
                subtitle: "RPA Community",
                link: "https://rpa-bank.com/column/29203/",
                icon: "ti-write",
                src: "/assets/images/portfolio/rpa18.jpg",
            },
            {
                id: 13,
                title: "Nagoya vol.2",
                subtitle: "RPA Community",
                link: "https://rpa-bank.com/column/27277/",
                icon: "ti-write",
                src: "/assets/images/portfolio/nagoya2.jpg",
            },
        ],
    },
    {
        name: "Mentoring",
        items: [
            {
                id: 3,
                title: "Website dev Mentor",
                subtitle: "Waffle Camp",
                link: "https://waffle-waffle.org/program/",
                icon: "ti-write",
                src: "/assets/images/portfolio/waffle.png",
            },
        ],
    },
    {
        name: "Public Speaking",
        items: [
            {
                id: 0,
                title: "YomiHomies",
                subtitle: "Senior project presentation",
                link: "https://youtu.be/S9GBXQEosK4?t=514",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/demoday.png",
            },
            {
                id: 1,
                title: "A New Daily Life with AR",
                subtitle: "Tech Talk",
                link: "https://youtu.be/IPYm1Ce8ACU?t=10906",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/techtalk.png",
            },
            {
                id: 2,
                title: "mymizu-neptune",
                subtitle: "API project presentation",
                link: "https://youtu.be/vwMpFxsuQgQ?t=2818",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/apinight.png",
            },
            {
                id: 4,
                title: "Nagoya vol.1",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/26959/",
                icon: "ti-write",
                src: "/assets/images/portfolio/nagoyagirls1.jpg",
            },
            {
                id: 5,
                title: "Nagoya vol.2",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/28112/",
                icon: "ti-write",
                src: "/assets/images/portfolio/nagoyagirls2.jpg",
            },
            {
                id: 6,
                title: "May 2020",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/31770/",
                icon: "ti-write",
                src: "/assets/images/portfolio/girls5.png",
            },
            {
                id: 7,
                title: "October 2020",
                subtitle: "RPA Community Girls",
                link: "https://youtu.be/wVVZjKZunhM",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/girls10.png",
            },
            {
                id: 8,
                title: "Hands-on Feb 2020",
                subtitle: "RPA Community",
                link: "https://rpa-bank.com/column/30280/",
                icon: "ti-write",
                src: "/assets/images/portfolio/handson.jpg",
            },
            {
                id: 9,
                title: "Mie vol.1",
                subtitle: "RPA Community",
                link: "https://rpa-bank.com/column/27166/",
                icon: "ti-write",
                src: "/assets/images/portfolio/mie.jpg",
            },
        ],
    },
    {
        name: "Organizing",
        items: [
            {
                id: 4,
                title: "Nagoya vol.1",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/26959/",
                icon: "ti-write",
                src: "/assets/images/portfolio/nagoyagirls1.jpg",
            },
            {
                id: 5,
                title: "Nagoya vol.2",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/28112/",
                icon: "ti-write",
                src: "/assets/images/portfolio/nagoyagirls2.jpg",
            },
            {
                id: 6,
                title: "May 2020",
                subtitle: "RPA Community Girls",
                link: "https://rpa-bank.com/column/31770/",
                icon: "ti-write",
                src: "/assets/images/portfolio/girls5.png",
            },
            {
                id: 7,
                title: "October 2020",
                subtitle: "RPA Community Girls",
                link: "https://youtu.be/wVVZjKZunhM",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/girls10.png",
            },
            {
                id: 10,
                title: "August 2020",
                subtitle: "RPA Community Girls",
                link: "https://youtu.be/mny87lp8dhY",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/girls8.png",
            },
            {
                id: 11,
                title: "December 2020",
                subtitle: "RPA Community Girls",
                link: "https://youtu.be/3SQt9Bqr0hk",
                icon: "ti-youtube",
                src: "/assets/images/portfolio/girls12.png",
            },
            {
                id: 12,
                title: "vol.18 Feb 2020",
                subtitle: "RPA Community",
                link: "https://rpa-bank.com/column/29203/",
                icon: "ti-write",
                src: "/assets/images/portfolio/rpa18.jpg",
            },
            {
                id: 13,
                title: "Nagoya vol.2",
                subtitle: "RPA Community",
                link: "https://rpa-bank.com/column/27277/",
                icon: "ti-write",
                src: "/assets/images/portfolio/nagoya2.jpg",
            },
        ],
    },
];

function Event() {
    return (
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Events" title="My Events" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} >
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    <div className="content">
                                                        <button className="report button button-circle button-icon button-circle-md button-primary">
                                                            <a href={item.link} target="_blank" rel="noopener noreferrer"><span className={`el-icon-icon ${item.icon}`}></span></a>
                                                        </button>
                                                        <h3>{item.subtitle}</h3>
                                                        <span>{item.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
            </div>
        </section>
    );
}

export default Event;
