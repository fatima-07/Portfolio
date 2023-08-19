import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import TextHeader from "./components/text-header/text-header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <TextHeader
        title="I'm Fatima a Frontend Developer from Toronto"
        copy="engineer. My expertise lies in developing robust and scalable applications, focusing on frontend design excellence."
        buttonText="Available for Hire"
      />
      <Footer />
    </div>
  );
};

export default App;
