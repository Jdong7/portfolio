import React, { useState } from "react";
import "./Topbar.scss";

const Topbar = () => {
  const [open, setOpen] = useState(true);

  const toggle = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
  };

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
      
        <div className={!open ? "menu menuOpen":"menu menuClosed"}>
          <div className="item" onClick={toggle}>
            <p><a href="#Intro">Intro</a></p>
          </div>
          <div className="item" onClick={toggle}>
            <p><a href="#Section">Portfolio</a></p>
          </div>
          <div className="item" onClick={toggle}>
            <p><a href="#Works">Works</a></p>
          </div>
          <div className="item" onClick={toggle}>
            <p><a href="#Referrals">Referrals</a></p>
          </div>
          <div className="item" onClick={toggle}>
            <p><a href="#Contact">Contact</a></p>
          </div>
       
      </div>
    </div>
  );
};

export { Topbar };
