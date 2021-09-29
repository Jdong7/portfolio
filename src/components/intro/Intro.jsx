import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/dong.png" alt="me"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>Jonathan Dong</h1>
            <h3>Freelance<span> </span></h3>
        </div>
        <a href ="#portfolio">
            <img src = "assets/arrow.png" alt=""></img> 
                  </a>
      </div>
    </div>
  );
}
