import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules"; // Optional modules
import styles from "./Carousel.module.css";

const Carousel = ({ data, renderItem, slidesPerViewConfig }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10} // Space between slides
        navigation
        breakpoints={{
          320: { slidesPerView: slidesPerViewConfig?.mobile || 1 },
          768: { slidesPerView: slidesPerViewConfig?.tablet || 2 },
          1024: { slidesPerView: slidesPerViewConfig?.desktop || 4 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
