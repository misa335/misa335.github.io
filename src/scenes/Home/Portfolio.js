import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";
import { Link, useRouteMatch } from "react-router-dom";
// Components
import Headline from "../../components/common/Headline";

const posts = [
    {
        title: "YomiHomies",
        image: "/assets/images/blog/yomihomies.png",
        date: "April, 2021",
        link: "/yomihomies",
        icon: "ti-book",
    },
    {
        title: "mymizu neptune",
        image: "/assets/images/blog/neptune.png",
        date: "April, 2021",
        link: "/mymizu-neptune",
        icon: "ti-paint-bucket",
    },
    {
        title: "Tweetie",
        image: "/assets/images/blog/tweetie.png",
        date: "August, 2021",
        link: "/tweetie",
        icon: "ti-mobile",
    },
    {
        title: "Foodie",
        image: "/assets/images/blog/foodie2.png",
        date: "June, 2021",
        link: "/foodie",
        icon: "ti-light-bulb",
    },
    {
        title: "Misa's Closet",
        image: "/assets/images/blog/closet.png",
        date: "April, 2021",
        link: "/misa-closet",
        icon: "ti-light-bulb",
    },
    {
        title: "Happy Bird",
        image: "/assets/images/blog/happybird2.png",
        date: "May, 2021",
        link: "/happybird",
        icon: "ti-light-bulb",
    },
];

function Portfolio() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: 30,
        draggable: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const { path } = useRouteMatch();

    return (
        <section className="section section-blog section-blog-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="My Projects" divider_1={true} position="center" />
                    <Slider className="el-slider el-slider-plr--15" {...sliderSettings}>
                        {posts.map((item, index) => (
                            <div key={index} className="post-item">
                                <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>
                                    <div className="post-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                </Link>
                                <div className="post-content">
                                    <div className="el-icon">
                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                    </div>
                                    <div className="post-data">
                                        <h4 className="post-title">
                                            <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>{item.title}</Link>
                                        </h4>
                                        <div className="post-date">
                                            <i className="ti-time"></i>
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Portfolio;