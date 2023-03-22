import React, { MouseEventHandler, useEffect, useState } from "react";
import "./Topbar.scss";

const sections = 3;

const Topbar = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const snapHeight = () => {
    //given a max height of h, and dist of s, round to the nearest (h/s)
    let dist = windowSize[1];
    let page = Math.trunc(window.scrollY / dist);
    console.log(page, window.scrollY, dist);
    window.scrollTo({
      top: page * (windowSize[1] - 100),
      behavior: "smooth",
    });
  
  };

  let setTimeoutID: number | null = null
  

  // window.addEventListener("scroll", () => {
   
  //   // if (setTimeoutID !== null) {
  //   //   clearTimeout(setTimeoutID)
  //   // }
  //   // setTimeoutID = setTimeout(snapHeight,2000)
  // });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      //console.log("resized");
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const [open, setOpen] = useState(true);

  const toggle = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
  };
  function goTop(pageNumber: number) {
    //count from 0 to section-1
    setOpen(!open);
    window.scrollTo({
      top: pageNumber * windowSize[1],
      behavior: "smooth",
    });
  }

  return (
    <div className="Topbar" id="Topbar">
      <div className={open ? "bar" : "bar openbar"}>
        <div className="left">
          <div className="logo">Gambit Dev</div>
          <div className={open ? "info" : "info infoOpen"}>
            Jonathandong7@gmail.com
            <br />
            +1 917 250 1566
          </div>
        </div>
        <div className="right">
          <div
            className={open ? "hamburg" : "hamburg changed"}
            onClick={toggle}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>

      <div className={!open ? "menu menuOpen" : "menu menuClosed"}>
        <div
          className="item"
          onClick={() => {
            goTop(0);
          }}
        >
          <p>Intro</p>
        </div>
        <div
          className="item"
          onClick={() => {
            goTop(1);
          }}
        >
          <p>Portfolio</p>
        </div>
        <div className="item" onClick={toggle}>
          <p>Works</p>
        </div>
        <div className="item" onClick={toggle}>
          <p>Referrals</p>
        </div>
        <div className="item" onClick={toggle}>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export { Topbar };
