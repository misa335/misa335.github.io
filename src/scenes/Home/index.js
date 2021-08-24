import React, { useEffect } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
// Sections
import Event from "./Event";
import About from "./About";
import Intro from "./Intro";
import Header from "./Header";
import Footer from "./Footer";
import Resume from "./Resume";
// import Service from "./Service";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
// import Testimonial from "./Testimonial";
import BlogSinglePost from "./BlogSinglePost";
// Components
import Helmet from "../../components/common/Helmet";
import Switch from "../../components/common/Switch";
import RedirectAs404 from "../../components/common/RedirectAs404";

const routes = [
    {
        path: "/intro",
        component: <Intro />,
    },
    {
        path: "/about",
        component: <About />,
    },
    {
        path: "/resume",
        component: <Resume />,
    },
    // {
    //     path: "/service",
    //     component: <Service />,
    // },
    {
        path: "/portfolio",
        component: <Portfolio />,
    },
    {
        path: "/event",
        component: <Event />,
    },
    {
        path: "/blog/single-post",
        component: <BlogSinglePost />,
    },
    // {
    //     path: "/testimonial",
    //     component: <Testimonial />,
    // },
    {
        path: "/contact",
        component: <Contact />,
    },
];

function Home() {
    let { path } = useRouteMatch();

    useEffect(() => {
        document.documentElement.className = "home-2 skin-2";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <div>
                <Helmet title="Home 1" />
                <Header />
                <Switch>
                    <Route path={path} exact>
                        <Redirect
                            to={{
                                pathname: `${path}/intro`.replace(/([^:])(\/\/+)/g, "$1/"),
                            }}
                        />
                    </Route>
                    {routes.map((item, index) => (
                        <Route key={index} path={`${path}${item.path}`} exact>
                            {item.component}
                        </Route>
                    ))}
                    <Route component={RedirectAs404} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
