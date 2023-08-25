import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Home />
      </div>
      <div>
        <About />
        <Projects />
      </div> 
    </div>
  )
}

export default App;
