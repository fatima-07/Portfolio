import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Fatima</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          OO <a href="/">Fatima 2023</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
