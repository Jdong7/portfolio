import "./App.scss";
import { Intro } from "./components/intro/Intro";
import { Section } from "./components/section/Section";
import { Topbar } from "./components/topbar/Topbar";
import { useRef } from "react";
import { Blank } from "./components/blankpage/Blank";
import { Pin } from "./components/blankpage/Blank";
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

  const dummyData: Pin[] = [
    {
      name: "example1",
      url: "URLEXAMPLE1",
    },
    {
      name: "example2",
      url: "URLEXAMPLE1",
    },
    {
      name: "example3",
      url: "URLEXAMPLE1",
    },
    {
      name: "example4",
      url: "URLEXAMPLE1",
    },
    {
      name: "example5",
      url: "URLEXAMPLE1",
    },
  ];
  return (
    <div className="App">
      <Topbar />
      <Intro />
      <Section />
      <Blank pins={dummyData} />
    </div>
  );
}

export default App;
