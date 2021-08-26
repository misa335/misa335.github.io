import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousel, { Modal, ModalGateway } from "react-images";

// Components
import Headline from "../../components/common/Headline";

const portfolio = [
    {
        name: "All Events",
        items: [
            {
                id: 0,
                title: "YomiHomies",
                link: "/portfolio-details",
                subtitle: "Senior project presentation",
                src: "/assets/images/portfolio/demoday.png",
                thumbnail: "/assets/images/portfolio/demoday.png",
                article: "https://rpa-bank.com/column/26959/",
                video: ""
            },
            {
                id: 1,
                title: "A New Daily Life with AR",
                link: "/portfolio-details",
                subtitle: "Tech Talk",
                src: "/assets/images/portfolio/techtalk.png",
                thumbnail: "/assets/images/portfolio/techtalk.png",
            },
            {
                id: 2,
                title: "mymizu-neptune",
                link: "/portfolio-details",
                subtitle: "API project presentation",
                src: "/assets/images/portfolio/apinight.png",
                thumbnail: "/assets/images/portfolio/apinight.png",
            },
            {
                id: 3,
                title: "Website dev Mentor",
                subtitle: "Waffle Camp",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/waffle.png",
                thumbnail: "/assets/images/portfolio/waffle.png",
            },
            {
                id: 4,
                title: "Nagoya vol.1",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/nagoyagirls1.jpg",
                thumbnail: "/assets/images/portfolio/nagoyagirls1.jpg",
            },
            {
                id: 5,
                title: "Nagoya vol.2",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/nagoyagirls2.jpg",
                thumbnail: "/assets/images/portfolio/nagoyagirls2.jpg",
            },
            {
                id: 6,
                title: "May 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls5.png",
                thumbnail: "/assets/images/portfolio/girls5.png",
            },
            {
                id: 7,
                title: "October 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls10.png",
                thumbnail: "/assets/images/portfolio/girls10.png",
            },
            {
                id: 8,
                title: "Hands-on Feb 2020",
                subtitle: "RPA Community",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/handson.jpg",
                thumbnail: "/assets/images/portfolio/handson.jpg",
            },
            {
                id: 9,
                title: "Mie vol.1",
                subtitle: "RPA Community",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/mie.jpg",
                thumbnail: "/assets/images/portfolio/mie.jpg",
            },
            {
                id: 10,
                title: "August 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls8.png",
                thumbnail: "/assets/images/portfolio/girls8.png",
            },
            {
                id: 11,
                title: "December 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls12.png",
                thumbnail: "/assets/images/portfolio/girls12.png",
            },
            {
                id: 12,
                title: "vol.18 Feb 2020",
                subtitle: "RPA Community",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/rpa18.jpg",
                thumbnail: "/assets/images/portfolio/rpa18.jpg",
            },
            {
                id: 13,
                title: "Nagoya vol.2",
                subtitle: "RPA Community",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/nagoya2.jpg",
                thumbnail: "/assets/images/portfolio/nagoya2.jpg",
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
                link: "/portfolio-details",
                src: "/assets/images/portfolio/waffle.png",
                thumbnail: "/assets/images/portfolio/waffle.png",
            },
        ],
    },
    {
        name: "Public Speaking",
        items: [
            {
                id: 0,
                title: "YomiHomies",
                link: "/portfolio-details",
                subtitle: "Senior project presentation",
                src: "/assets/images/portfolio/demoday.png",
                thumbnail: "/assets/images/portfolio/demoday.png",
            },
            {
                id: 1,
                title: "A New Daily Life with AR",
                link: "/portfolio-details",
                subtitle: "Tech Talk",
                src: "/assets/images/portfolio/techtalk.png",
                thumbnail: "/assets/images/portfolio/techtalk.png",
            },
            {
                id: 2,
                title: "mymizu-neptune",
                link: "/portfolio-details",
                subtitle: "API project presentation",
                src: "/assets/images/portfolio/apinight.png",
                thumbnail: "/assets/images/portfolio/apinight.png",
            },
            {
                id: 4,
                title: "Nagoya vol.1",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/nagoyagirls1.jpg",
                thumbnail: "/assets/images/portfolio/nagoyagirls1.jpg",
            },
            {
                id: 5,
                title: "Nagoya vol.2",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/nagoyagirls2.jpg",
                thumbnail: "/assets/images/portfolio/nagoyagirls2.jpg",
            },
            {
                id: 6,
                title: "May 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls5.png",
                thumbnail: "/assets/images/portfolio/girls5.png",
            },
            {
                id: 7,
                title: "October 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls10.png",
                thumbnail: "/assets/images/portfolio/girls10.png",
            },
            {
                id: 8,
                title: "Hands-on Feb 2020",
                subtitle: "RPA Community",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/handson.jpg",
                thumbnail: "/assets/images/portfolio/handson.jpg",
            },
            {
                id: 9,
                title: "Mie vol.1",
                subtitle: "RPA Community",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/mie.jpg",
                thumbnail: "/assets/images/portfolio/mie.jpg",
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
                link: "/portfolio-details",
                src: "/assets/images/portfolio/nagoyagirls1.jpg",
                thumbnail: "/assets/images/portfolio/nagoyagirls1.jpg",
            },
            {
                id: 5,
                title: "Nagoya vol.2",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/nagoyagirls2.jpg",
                thumbnail: "/assets/images/portfolio/nagoyagirls2.jpg",
            },
            {
                id: 6,
                title: "May 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls5.png",
                thumbnail: "/assets/images/portfolio/girls5.png",
            },
            {
                id: 7,
                title: "October 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls10.png",
                thumbnail: "/assets/images/portfolio/girls10.png",
            },
            {
                id: 10,
                title: "August 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls8.png",
                thumbnail: "/assets/images/portfolio/girls8.png",
            },
            {
                id: 11,
                title: "December 2020",
                subtitle: "RPA Community Girls",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/girls12.png",
                thumbnail: "/assets/images/portfolio/girls12.png",
            },
            {
                id: 12,
                title: "vol.18 Feb 2020",
                subtitle: "RPA Community",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/rpa18.jpg",
                thumbnail: "/assets/images/portfolio/rpa18.jpg",
            },
            {
                id: 13,
                title: "Nagoya vol.2",
                subtitle: "RPA Community",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/nagoya2.jpg",
                thumbnail: "/assets/images/portfolio/nagoya2.jpg",
            },
        ],
    },
];

const images = [
    {
        src: "/assets/images/portfolio/demoday.png",
    },
    {
        src: "/assets/images/portfolio/techtalk.png",
    },
    {
        src: "/assets/images/portfolio/apinight.png",
    },
    {
        src: "/assets/images/portfolio/waffle.png",
    },
    {
        src: "/assets/images/portfolio/nagoyagirls1.jpg",
    },
    {
        src: "/assets/images/portfolio/nagoyagirls2.jpg",
    },
    {
        src: "/assets/images/portfolio/girls5.jpg",
    },
    {
        src: "/assets/images/portfolio/girls10.png",
    },
    {
        src: "/assets/images/portfolio/handson.jpg",
    },
    {
        src: "/assets/images/portfolio/mie.jpg",
    },
    {
        src: "/assets/images/portfolio/girls8.png",
    },
    {
        src: "/assets/images/portfolio/girls12.png",
    },
    {
        src: "/assets/images/portfolio/rpa18.jpg",
    },
    {
        src: "/assets/images/portfolio/nagoya2.jpg",
    },
];

function Event() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const toggleLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxIsOpen(!lightboxIsOpen);
    };

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
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} onClick={() => toggleLightbox(item.id)}>
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    <div className="content">
                                                        <button className="report button button-circle button-icon button-circle-md button-primary">
                                                            <a href={item.article} target="_blank" rel="noopener noreferrer"><span className="el-icon-icon ti-fullscreen"></span></a>
                                                        </button>
                                                        <button className="video button button-circle button-icon button-circle-md button-primary">
                                                            <a href={item.video} target="_blank" rel="noopener noreferrer"><span className="el-icon-icon ti-fullscreen"></span></a>
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
                {/* <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway> */}
            </div>
        </section>
    );
}

export default Event;
