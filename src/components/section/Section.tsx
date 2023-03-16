import "./Section.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper";
const Section = () => {
  return (
    <div className="Section" id="Section">
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
            <div className="slide-section">slide1</div>
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
