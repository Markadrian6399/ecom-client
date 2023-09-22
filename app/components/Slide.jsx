"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css/autoplay";
import "swiper/css";

const Slide = ({ delay }) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay }}
    >
      <SwiperSlide>
        <Image src="/images/slide/1.png" alt="" width={358} height={332} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/slide/2.png" alt="" width={358} height={428} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/slide/3.png" alt="" width={358} height={444} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/slide/4.png" alt="" width={358} height={428} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
