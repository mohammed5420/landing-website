import React from "react";
import facebook from '../../imgs/facebook.svg';
import twitter from '../../imgs/twitter.svg';
import youtube from '../../imgs/youtube.svg';
import github from '../../imgs/github.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {" "}
        <div className="footer__logo">
          <p className="footer-text">
            <span>app</span>
            <span>lab</span>
          </p>
        </div>
        <div className="footer__list">
          <ul className="footer-list">
            <li>home</li>
            <li>key feature</li>
            <li>pricing</li>
            <li>testiminial</li>
            <li>faq</li>
          </ul>
        </div>
        <div className="footer__social">
          <ul className="footer-social">
            <li><img src={facebook} alt="facebook"/></li>
            <li><img src={twitter} alt="twitter"/></li>
            <li><img src={youtube} alt="youtube"/></li>
            <li><img src={github} alt="github"/></li>
          </ul>
        </div>
        <div className="footer__copyRight">
          <p>copyrigth arifur rahman tusher 2020 .all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
