import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quas
          unde debitis eaque quis quae quam error eius recusandae labore alias.
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Link 5</p>
          <p>Link 6</p>
          <p>Link 7</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Link 8</p>
          <p>Link 9</p>
          <p>Link 10</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@copy Hamza Ezziki</p>
      </div>
    </div>
  );
};

export default Footer;
