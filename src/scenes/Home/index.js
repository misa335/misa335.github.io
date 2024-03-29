import React, { useEffect } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
// Sections
import Event from "./Event";
import About from "./About";
import Intro from "./Intro";
import Header from "./Header";
import Footer from "./Footer";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
// Components
import Helmet from "../../components/common/Helmet";
import Switch from "../../components/common/Switch";
import RedirectAs404 from "../../components/common/RedirectAs404";
import YomiHomies from "./YomiHomies";
import Neptune from "./Neptune";
import Tweetie from "./Tweetie";
import Foodie from "./Foodie";
import Closet from "./Closet";
import HappyBird from "./HappyBird";

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
    {
        path: "/portfolio",
        component: <Portfolio />,
    },
    {
        path: "/event",
        component: <Event />,
    },
    {
        path: "/portfolio/yomihomies",
        component: <YomiHomies />,
    },
    {
        path: "/portfolio/mymizu-neptune",
        component: <Neptune />,
    },
    {
        path: "/portfolio/tweetie",
        component: <Tweetie />,
    },
    {
        path: "/portfolio/foodie",
        component: <Foodie />,
    },
    {
        path: "/portfolio/misa-closet",
        component: <Closet />,
    },
    {
        path: "/portfolio/happybird",
        component: <HappyBird />,
    },
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