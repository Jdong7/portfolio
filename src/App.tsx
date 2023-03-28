import "./App.scss";
import { Intro } from "./components/intro/Intro";
import { Section } from "./components/section/Section";
import { Topbar } from "./components/topbar/Topbar";
import { useRef } from "react";
import { Blank } from "./components/blankpage/Blank";
import {useState, useEffect} from "react"
import {sectionNames, sections, snapDebounce, calcBreakPoints} from "./components/util/snap";
function App() {
 


  let snapIDTimeout: number | null = null;

  window.addEventListener("scroll", () => {
    let distArray = calcBreakPoints()
    const distMap = distArray.map(e => Math.abs(window.scrollY - e))
    const min = Math.min(...distMap)
    const snapIdx = distMap.indexOf(min)
    //console.log(snapIdx)
    if(snapIDTimeout !== null){
      clearTimeout(snapIDTimeout)
    }
    const pos = distArray[snapIdx]

    snapIDTimeout = setTimeout(()=>{
      window.scrollTo({
        behavior:"smooth",
        top: pos,
      });
    },snapDebounce);
  })
  return (
    <div className="App">
      <Topbar />
      <Intro />
      <Section />
      <Blank/>
    </div>
  );
}

export default App;

