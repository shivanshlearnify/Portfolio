import React from "react";
import "./style.css";
import { BiCopyright } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerTitle">Shivansh Kesarwani</div>
        <div className="footerList">
          <ul>
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Experience">Experience</a>
            <a href="#Projects">Projects</a>
            <a href="#Education">Education</a>
          </ul>
        </div>
        <div className="footerSocialIcon">
          <a href="https://www.linkedin.com/in/shivansh-kesarwani/" target="_blank"> 
            <IoLogoLinkedin />
          </a>
          <a href="https://twitter.com/ShivanshKesarw7" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://github.com/shivanshlearnify" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="footerTagline">
          <BiCopyright className="copyrightIcon" />
          <div className="tagline">
            2024 Shivansh Kesarwani. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
