import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const myInlineStyle = {
    transform: isOpen ? "translateY(0)" : "translateY(-100%)",
  };

  return (
    <div className="header">
      <div className="headercontainer">
        <div className="logo">
          <div className="bracket">&lt;</div> Portfolio/
          <div className="bracket">&gt;</div>
        </div>
        <div className="deatilSection">
          <ul>
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Experience">Experience</a>
            <a href="#Projects">Projects</a>
            <a href="#Education">Education</a>
          </ul>
        </div>
        <div className="bg-white text-black px-2 py-2 rounded-3xl sm:hidden">
          <a href="https://github.com/shivanshlearnify" target="_blank">
            Github Profile
          </a>
        </div>
        <div className="mobileIcon" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu />
        </div>
        {isOpen && (
          <div className="mobiledeatilSection" style={myInlineStyle}>
            <a onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </a>
            <a onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </a>
            <a onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </a>
            <a onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </a>
            <a onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </a>
            <div className="mt-4 border w-fit py-1 px-2 rounded-3xl">
              <a href="https://github.com/shivanshlearnify" target="_blank">
                Github Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
