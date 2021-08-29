import React, { useState } from "react";
import { useRouteMatch, NavLink, Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// Components
// import DemoOptions from "../../components/common/DemoOptions";

const links = [
    {
        title: "Home",
        path: "/intro",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Resume",
        path: "/resume",
    },
    // {
    //     title: "Service",
    //     path: "/service",
    // },
    {
        title: "Portfolio",
        path: "/portfolio",
    },
    {
        title: "Event",
        path: "/event",
    },
    // {
    //     title: "Testimonial",
    //     path: "/testimonial",
    // },
    {
        title: "Contact",
        path: "/contact",
    },
];

function Header() {
    let { url } = useRouteMatch();

    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplaySidenav(!displaySidenav);
    };

    return (
        <>
            <header className="app-header app-header-1">
                <div className="header-logo">
                    {/* <Link to={`url`.replace(/([^:])(\/\/+)/g, "$1/")}>Misa.</Link> */}
                    <Link to="/">Misa.</Link>
                </div>
                <button className="button button-menu" onClick={(e) => handleClick(e)}>
                    <span></span>
                </button>
                <ul className="header-dots">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="circle"></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="header-menu">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="anchor">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="header-follow">
                    <ul>
                        <li>
                            <a href="https://github.com/misa335">
                                <i className="ti-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/misa-k-engineer/">
                                <i className="ti-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/misas2pink">
                                <i className="ti-twitter-alt"></i>
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://www.instagram.com/misapipipink/">
                                <i className="ti-instagram"></i>
                            </a>
                        </li> */}
                    </ul>
                    <p>Follow Me</p>
                </div>
            </header>
            <div className={`app-sidenav ${displaySidenav && "active"}`}>
                <div className="sidenav-menu">
                    <div className="logo">
                        <Link to="/">Misa.</Link>
                    </div>
                    <button className="button" onClick={(e) => handleClick(e)}></button>
                    <ul className="sidenav-nav">
                        {links.map((item, index) => (
                            <li key={index} onClick={(e) => handleClick(e)}>
                                <NavLink to={`${url}${item.path}`.replace(/([^:])(\/\/+)/g, "$1/")} activeClassName="active">
                                    <span className="anchor">{item.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="sidenav-links">
                        <ul>
                            <li>
                                <a href="https://github.com/misa335">
                                    <FaGithub className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/misa-k-engineer/">
                                    <FaLinkedin className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/misas2pink">
                                    <FaTwitter className="icon" />
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://www.instagram.com/misapipipink/">
                                    <FaInstagram className="icon" />
                                </a>
                            </li> */}
                        </ul>
                        <p>Follow Me</p>
                    </div>
                </div>
                <span className="sidenav-close" />
            </div>
            {/* <DemoOptions /> */}
        </>
    );
}

export default Header;
