import "./App.scss";
import { Intro } from "./components/intro/Intro";
import { Section } from "./components/section/Section";
import { Topbar } from "./components/topbar/Topbar";
import { useRef } from "react";
import { Blank } from "./components/blankpage/Blank";
import {useState, useEffect} from "react"
function App() {
  // const snapDebounce = 600;
  // let snapIDTimeout: number | null = null;
  // window.addEventListener("scroll", () => {
  //   const snapElements = document.querySelectorAll(".snap");
  //   const distMap = [...snapElements]
  //     .map((e) => e as HTMLElement)
  //     .map((e) => Math.abs(e.offsetTop - window.scrollY));
  //   const minDist = Math.min(...distMap);
  //   const snapIdx = distMap.indexOf(minDist);

  //   if (snapIDTimeout !== null) {
  //     clearTimeout(snapIDTimeout);
  //   }
  //   const elem = snapElements[snapIdx];

  //   snapIDTimeout = setTimeout(() => {
  //     elem.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }, snapDebounce);
  // });

  const sectionNames = ["intro","portfolio","works"]
  const sections = sectionNames.length

  const snapDebounce = 1000;

  

  let snapIDTimeout: number | null = null;

  window.addEventListener("scroll", () => {
    let distArray = []
    for (let i = 0; i< sections;i++){
      let diff = window.innerHeight*i -(100 *i)
      distArray.push(diff)
    }
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
