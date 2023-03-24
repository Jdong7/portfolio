import "./Section.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper";
const Section = () => {
  const langRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    //console.log('use')
    if (langRef && langRef.current) {
      init(langRef.current, {
        showCursor: true,
        backDelay: 1600,
        backSpeed: 100,
        strings: ["Javascript", "typescript", "Java", "Python", "Kotlin"],
      });
    }
  });

  const stackRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (stackRef && stackRef.current) {
      init(stackRef.current, {
        showCursor: true,
        backDelay: 1600,
        backSpeed: 100,
        strings: ["React", "Redux", "Vuetify", "HTML5"],
      });
    }
  });

  const backRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (backRef && backRef.current) {
      init(backRef.current, {
        showCursor: true,
        backDelay: 1700,
        backSpeed: 100,
        strings: ["Express", "SpringBoot", "AWS", "Azure"],
      });
    }
  });

  return (
    <div className="Section snap" id="Section">
      <div className="swiperCarousel">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-section">
              <div className="slide-wrapper">
                <div className="title-section">TECHNOLOGIES</div>
                <div className="icon-section">
                  <div
                    className="stack-icons"
                    style={{
                      color: "#e34c26",
                    }}
                  >
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div
                    className="stack-icons"
                    style={{
                      color: "#F0DB4F",
                    }}
                  >
                    <i className="fa-brands fa-square-js"></i>
                  </div>
                  <div
                    className="stack-icons"
                    style={{
                      color: "#61dbfb",
                    }}
                  >
                    <i className="fa-brands fa-react"></i>
                  </div>
                  <div
                    className="stack-icons"
                    style={{
                      color: "#41B883",
                    }}
                  >
                    <i className="fa-brands fa-vuejs"></i>
                  </div>
                  <div
                    className="stack-icons"
                    style={{
                      color: "#252a36",
                    }}
                  >
                    <i className="fa-solid fa-code-branch"></i>
                  </div>
                </div>
                <div className="icon-section">
                  <div
                    className="stack-icons"
                    style={{
                      color: "#252a36",
                    }}
                  >
                    <i className="fa-solid fa-database"></i>
                  </div>
                  <div
                    className="stack-icons"
                    style={{
                      color: "#4B8BBE",
                    }}
                  >
                    <i className="fa-brands fa-python"></i>
                  </div>
                  <div
                    className="stack-icons"
                    style={{
                      color: "#f89820",
                    }}
                  >
                    <i className="fa-brands fa-java"></i>
                  </div>
                  <div
                    className="stack-icons"
                    style={{
                      color: "#007FFF",
                    }}
                  >
                    <i className="fa-brands fa-microsoft"></i>
                  </div>
                  <div
                    className="stack-icons"
                    style={{
                      color: "#FF9900",
                    }}
                  >
                    <i className="fa-brands fa-aws"></i>
                  </div>
                </div>
                <div className="project-texts-wrapper">
                  <div className="project-card col">
                    <div className="proj-card-title">Frameworks</div>
                    <div className="proj-card-typed flex justCenter">
                      <span ref={stackRef}></span>
                    </div>
                  </div>
                  <div className="project-card col">
                    <div className="proj-card-title">Languages</div>
                    <div className="proj-card-typed flex justCenter">
                      <span ref={langRef}></span>
                    </div>
                  </div>
                  <div className="project-card col">
                    <div className="proj-card-title">Back-ends</div>
                    <div className="proj-card-typed flex justCenter">
                      <span ref={backRef}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-section">slide2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-section">slide3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-section">slide4</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export { Section };
