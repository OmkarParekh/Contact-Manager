import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Page/navbar"
import home from "./Page/home"
import Add from "./Page/add"
import About from "./Page/About"
import visualize from "./Page/Visualize";
window.url = "https://contact-back.onrender.com"
const Routes = () => (
    <Router>
        <Nav />
        <Route path="/" exact component={home} />
        <Route path="/Add" exact component={Add} />
        <Route path="/About" exact component={About} />
        <Route path="/visualize" exact component={visualize} />



    </Router>

)

export default Routes;
