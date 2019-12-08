import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/portfolio";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Navbar from "./components/navbar/navbar";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { translate } from "react-i18next";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(process.env.REACT_APP_VAR);
    console.log(process.env.REACT_APP_GET_PROJECTS);

    return (
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="contenitore">
            <Navbar></Navbar>
            <div className="main" onClick={this.hideNav}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact-me" component={Contact} />
            </div>
          </div>
        </Router>
      </I18nextProvider>
    );
  }
}

export default translate("common")(App);

//qui dentro si trovano la navbar e il router con le transizioni
