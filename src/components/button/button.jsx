import React from "react";
import "./button.css";

const Button = ({ buttonText }) => {
  return (
    <a href="contact.html" className="btn-get-started">
      {buttonText}
    </a>
  );
};

export default Button;
