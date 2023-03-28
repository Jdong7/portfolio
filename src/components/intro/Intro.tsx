import "./Intro.scss";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import { snapTo } from "../util/snap";


const Intro = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    //console.log('use')
    if (textRef && textRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Developer", "Designer", "Engineer", "Architect"],
      });
    }
  });
const chevClick = () =>{
  snapTo("portfolio")
}

  return (
    <div className="Intro snap" id="Intro">
      <div className="wrapper">
        <div className="imgContainer">
          <div className="imgBorder">
            <img src="./JDpfp.jpg"></img>
          </div>
        </div>
        <div className="text1">Hi there, I'm</div>
        <div className="text2">Jonathan Dong</div>
        <div className="text3">
          Software <span ref={textRef}></span>
        </div>
        <div className="Intro-socials">
          <div className="ig icons">
            <a href="https://www.instagram.com/dingaling_j/" target={"_blank"}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="git icons">
            <a href="https://github.com/Jdong7" target={"_blank"}>
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="linkedin icons">
            <a href="https://www.linkedin.com/in/jdong7/" target={"_blank"}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="chev" onClick={chevClick}>
          <i className="fa-solid fa-chevron-down arrow"></i>
        </div>
      </div>
    </div>
  );
};

export { Intro };
