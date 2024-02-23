import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headercontainer">

      <div className="logo">Portfolio</div>
      <div className="deatilSection">
        <ul className="li">About</ul>
        <ul className="li">Skills</ul>
        <ul className="li">Experience</ul>
        <ul className="li">Projects</ul>
        <ul className="li">Education</ul>
      </div>
      <div className="headerButton"><button>Github Profile</button></div>
      </div>
    </div>
  );
};

export default Header;
