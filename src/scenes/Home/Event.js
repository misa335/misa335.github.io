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
                title: "Senior project presentation",
                link: "/portfolio-details",
                subtitle: "Demo Day",
                src: "/assets/images/portfolio/demoday.png",
                thumbnail: "/assets/images/portfolio/demoday.png",
            },
            {
                id: 1,
                title: "Tech Talk",
                link: "/portfolio-details",
                subtitle: "A New Daily Life with AR",
                src: "/assets/images/portfolio/techtalk.png",
                thumbnail: "/assets/images/portfolio/techtalk.png",
            },
            {
                id: 2,
                title: "API project presentation",
                link: "/portfolio-details",
                subtitle: "API Night",
                src: "/assets/images/portfolio/apinight.png",
                thumbnail: "/assets/images/portfolio/apinight.png",
            },
            {
                id: 3,
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-4.jpg",
                thumbnail: "/assets/images/portfolio/2-4.jpg",
            },
            {
                id: 4,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-5.jpg",
                thumbnail: "/assets/images/portfolio/2-5.jpg",
            },
            {
                id: 5,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-6.jpg",
                thumbnail: "/assets/images/portfolio/2-6.jpg",
            },
            {
                id: 6,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-7.jpg",
                thumbnail: "/assets/images/portfolio/2-7.jpg",
            },
            {
                id: 7,
                title: "Website dev Mentor",
                subtitle: "Waffle Camp",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/waffle.png",
                thumbnail: "/assets/images/portfolio/waffle.png",
            },
            {
                id: 8,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-9.jpg",
                thumbnail: "/assets/images/portfolio/2-9.jpg",
            },
            {
                id: 9,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-10.jpg",
                thumbnail: "/assets/images/portfolio/2-10.jpg",
            },
        ],
    },
    {
        name: "Public Speaking",
        items: [
            {
                id: 0,
                title: "Senior project presentation",
                link: "/portfolio-details",
                subtitle: "Demo Day",
                src: "/assets/images/portfolio/demoday.png",
                thumbnail: "/assets/images/portfolio/demoday.png",
            },
            {
                id: 1,
                title: "Tech Talk",
                link: "/portfolio-details",
                subtitle: "A New Daily Life with AR",
                src: "/assets/images/portfolio/techtalk.png",
                thumbnail: "/assets/images/portfolio/techtalk.png",
            },
            {
                id: 2,
                title: "API project presentation",
                link: "/portfolio-details",
                subtitle: "API Night",
                src: "/assets/images/portfolio/apinight.png",
                thumbnail: "/assets/images/portfolio/apinight.png",
            },
            {
                id: 3,
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-4.jpg",
                thumbnail: "/assets/images/portfolio/2-4.jpg",
            },
        ],
    },
    {
        name: "Organizing",
        items: [
            {
                id: 4,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-5.jpg",
                thumbnail: "/assets/images/portfolio/2-5.jpg",
            },
            {
                id: 5,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-6.jpg",
                thumbnail: "/assets/images/portfolio/2-6.jpg",
            },
            {
                id: 6,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-7.jpg",
                thumbnail: "/assets/images/portfolio/2-7.jpg",
            },
        ],
    },
    {
        name: "Mentoring",
        items: [
            {
                id: 7,
                title: "Website dev Mentor",
                subtitle: "Waffle Camp",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/waffle.png",
                thumbnail: "/assets/images/portfolio/waffle.png",
            },
            {
                id: 8,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-9.jpg",
                thumbnail: "/assets/images/portfolio/2-9.jpg",
            },
            {
                id: 9,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/2-10.jpg",
                thumbnail: "/assets/images/portfolio/2-10.jpg",
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
        src: "/assets/images/portfolio/2-4.jpg",
    },
    {
        src: "/assets/images/portfolio/2-5.jpg",
    },
    {
        src: "/assets/images/portfolio/2-6.jpg",
    },
    {
        src: "/assets/images/portfolio/2-7.jpg",
    },
    {
        src: "/assets/images/portfolio/waffle.png",
    },
    {
        src: "/assets/images/portfolio/2-9.jpg",
    },
    {
        src: "/assets/images/portfolio/2-10.jpg",
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
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <span className="el-icon-icon ti-fullscreen"></span>
                                                        </button>
                                                        <span>{item.title}</span>
                                                        <h3>{item.subtitle}</h3>
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
                <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </section>
    );
}

export default Event;
