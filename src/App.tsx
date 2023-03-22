import "./App.scss";
import { Intro } from "./components/intro/Intro";
import { Section } from "./components/section/Section";
import { Topbar } from "./components/topbar/Topbar";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Intro />
      <Section />
      <Intro />
    </div>
  );
}

export default App;
