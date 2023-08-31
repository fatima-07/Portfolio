import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Home />
      </div>
      <div>
        <About />
        <Projects />
        <Contact />
      </div> 
    </div>
  )
}

export default App;
