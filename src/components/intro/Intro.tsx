import "./Intro.scss"
import { init } from 'ityped'
import React, {useEffect, useRef} from "react";

const Intro = () =>{
    const textRef = useRef<HTMLSpanElement | null>(null);
    useEffect(() => {
        console.log('use')
        if(textRef && textRef.current ){
            init(textRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ["Developer", "Designer", "Engineer", "Architect"],
    
            });
        }
    });
    return (
        <div className="Intro" id="Intro">
                <div className="wrapper">
                    <div className="imgContainer">
                        <div className="imgBorder">
                            <img src="./JDpfp.jpg"></img>
                        </div>
                    </div>
                    <div className="text1">
                        Hi there, I'm
                    </div>
                    <div className="text2">
                        Jonathan Dong
                    </div>
                    <div className="text3">
                        Software <span ref={textRef}></span>
                    </div>
                    <a className="chev" href="#Section"><i className="fa-solid fa-chevron-down arrow"></i></a>
                </div>
        </div>
    )
}

export {Intro}