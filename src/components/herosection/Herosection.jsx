import React from "react";
import "./style.css";
import profile from "../../assets/profile.jpg";
import Typewriter from "typewriter-effect";
const Herosection = () => {
  return (
    <div className="herosectionBanner">
      <div className="herosectionanimation"></div>
      <div className="herosectionBannerContainer">
        <div className="herosectionleft">
          <span className="title">
            Hi, I am <br /> shivansh Kesarwani
          </span>
          <div className="textLoop">
            I am a 
            <span>
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "React Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div>
          I am driven and adaptable, constantly seeking out fresh challenges to tackle. Fueled by my passion for acquiring new knowledge, I am committed to delivering top-notch outcomes. Armed with a positive outlook and a mindset geared towards growth, I am poised to bring significant value and accomplish remarkable feats in my field.
          </div>
          <button>Check Resume</button>
        </div>
        <div className="herosectionRight">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;