import React, { MouseEventHandler, useEffect, useState } from "react";
import "./Topbar.scss";
import { snapTo } from "../util/snap";

const Topbar = () => {
  const [open, setOpen] = useState(true);
  const toggle = (event: React.MouseEvent<HTMLDivElement>,section:string) => {
    setOpen(!open);
    section === "menu" ? null: snapTo(section)
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
            onClick={(e)=>toggle(e,"menu")}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>

      <div className={!open ? "menu menuOpen" : "menu menuClosed"}>
        <div className="item" onClick={(e)=>toggle(e,"intro")}>
          <p>Intro</p>
        </div>
        <div className="item" onClick={(e)=>toggle(e,"portfolio")}>
          <p>Portfolio</p>
        </div>
        <div className="item" onClick={(e)=>toggle(e,"works")}>
          <p>Works</p>
        </div>
        <div className="item" onClick={(e)=>toggle(e,"referrals")}>
          <p>Referrals</p>
        </div>
        <div className="item" onClick={(e)=>toggle(e,"contact")}>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export { Topbar };
