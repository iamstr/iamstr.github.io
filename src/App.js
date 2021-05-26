import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
