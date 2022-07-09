import Tour from "./1-tour-app/Index";
import Reviews from "./2-reviews/index";
import QandA from "./3-question-answer/index";
import Menu from "./4-menu-app/index";
import Jobs from "./5-jobs-app/index";
import Slider from "./6-slider/index";
import Colors from "./7-color-generator/index";
import Grocery from "./8-grocery-list/index";
import NavBar from "./9-navbar/index";
import SideBar from "./10-side-bar/index";
import Sidemenu from "./11-sidemenu/index";
import Cartapp from "./12-cartapp/index";

//images

import tour from "./images/tour-app.png";
import review from "./images/review-app.png";
import qanda from "./images/qanda.png";
import menu from "./images/menu-app.png";
import jobs from "./images/jobs-app.png";
import slider from "./images/slider-app.png";
import color from "./images/colors-generator.png";
import grocery from "./images/grocery-app.png";
import navbar from "./images/navbar.png";
import sidebar from "./images/sidebar.png";
import submenu from "./images/submenu.png";
import cart from "./images/cart-app.png";
import cocktailDB from "./images/cocktaildb.png";

const apps = [
    {
        id: 1,
        title: "Tour App",
        element: <Tour />,
        path: "/tour-app",
        image: tour,
    },
    {
        id: 2,
        title: "Reviews App",
        element: <Reviews />,
        path: "/reviews-app",
        image: review,
    },
    {
        id: 3,
        title: "QandA App",
        element: <QandA />,
        path: "/qanda-app",
        image: qanda,
    },
    {
        id: 4,
        title: "Menu App",
        element: <Menu />,
        path: "/menu-app",
        image: menu,
    },
    {
        id: 5,
        title: "Jobs App",
        element: <Jobs />,
        path: "/jobs-app",
        image: jobs,
    },
    {
        id: 6,
        title: "Slider App",
        element: <Slider />,
        path: "/slider-app",
        image: slider,
    },
    {
        id: 7,
        title: "Color Generator App",
        element: <Colors />,
        path: "/color-generator",
        image: color,
    },
    {
        id: 8,
        title: "Grocery App",
        element: <Grocery />,
        path: "/grocery-app",
        image: grocery,
    },
    {
        id: 9,
        title: "Navbar App",
        element: <NavBar />,
        path: "/navbar",
        image: navbar,
    },
    {
        id: 10,
        title: "Sidebar App",
        element: <SideBar />,
        path: "/sidebar",
        image: sidebar,
    },
    {
        id: 11,
        title: "Submenu App",
        element: <Sidemenu />,
        path: "/sidemenu",
        image: submenu,
    },
    {
        id: 12,
        title: "Cart App",
        element: <Cartapp />,
        path: "/cart-app",
        image: cart,
    },
    {
        id: 13,
        title: "Cocktail App",
        path: "https://niranjanba.github.io/cocktaildb-app/",
        image: cocktailDB,
    },
];

export default apps;
