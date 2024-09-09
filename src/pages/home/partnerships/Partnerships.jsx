import React, { useEffect } from "react";
import parceriasImg from "../../../assets/parcerias/empresa.jpg";
import "./Partnerships.css";
import { Swiper, SwiperSlide } from "swiper/react";

export const Partnerships = () => {
  const data = [
    { id: "1", image: parceriasImg },
    { id: "2", image: parceriasImg },
    { id: "3", image: parceriasImg },
    { id: "4", image: parceriasImg },
  ];
  return (
    <section id="partnerships" className="partnerships">
      <h1 className="title-section">Parcerias</h1>
      <div className="container">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          <button className="swiper-button-prev">Prev</button>

          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slider" className="slide-item" />
            </SwiperSlide>
          ))}
          <button className="swiper-button-next">Next</button>
        </Swiper>
      </div>
    </section>
  );
};
