import React from "react";
import "./Footer.css";
import arrow from "../../assets/arrow.svg";
import footer from "../../assets/footer.svg"



const Footer = () => {
  return (
    <div className="Footer">
      <button className="footer__explore">Explore More</button>
      <img className="footer__icon" src={arrow} alt="search-icon" />
      <img className="footer__image" src={footer} alt="footer-image" />
    </div>
  );
};

export default Footer;
