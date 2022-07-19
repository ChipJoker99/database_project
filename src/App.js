import React, { useState } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Controller } from "swiper";

import "swiper/swiper.scss";

SwiperCore.use([Navigation, A11y, Controller]);

/** To get the error change g3_2 to g3_1 on line 72. */

export default function App() {
  const [instances, setInstance] = useState({});

  const slides = (
    <>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </>
  );

  return (
    <>
      <h2>Works with 2 swipers:</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        controller={{ control: instances["g2_2"], inverse: true }}
        onSwiper={(swiper) =>
          setInstance((prevInstances) => ({ ...prevInstances, g2_1: swiper }))
        }
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        controller={{ control: instances["g2_1"], inverse: true }}
        onSwiper={(swiper) =>
          setInstance((prevInstances) => ({ ...prevInstances, g2_2: swiper }))
        }
      >
        {slides}
      </Swiper>

      <h2>Doesn't work with 3 swipers:</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        controller={{ control: instances["g3_2"], inverse: true }}
        onSwiper={(swiper) =>
          setInstance((prevInstances) => ({ ...prevInstances, g3_1: swiper }))
        }
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        controller={{ control: instances["g3_3"], inverse: true }}
        onSwiper={(swiper) =>
          setInstance((prevInstances) => ({ ...prevInstances, g3_2: swiper }))
        }
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        controller={{ control: instances["g3_2"], inverse: true }}
        onSwiper={(swiper) =>
          setInstance((prevInstances) => ({ ...prevInstances, g3_3: swiper }))
        }
      >
        {slides}
      </Swiper>
    </>
  );
}
