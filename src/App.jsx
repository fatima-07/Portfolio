import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import TextHeader from "./components/text-header/text-header";

const App = () => {
  return (
    <div>
      <Navbar />
      <TextHeader
        title={"I'm Fatima a Frontend Developer from Toronto"}
        copy="Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet."
        buttonText="Available for Hire"
      />
    </div>
  );
};

export default App;
