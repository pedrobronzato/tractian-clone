'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Children } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider({
  children,
}: {
  children: React.ReactNode;
}) {
  const childrenArray = Children.toArray(children);

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1.2}
      centeredSlides={false}
      loop={true}
      className="swiper swiper-horizontal swiper-backface-hidden relative z-20 w-full select-none"
      style={{ paddingLeft: '16px', paddingRight: '16px' }}
    >
      {childrenArray.map((child, index) => (
        <SwiperSlide key={index} className="h-auto">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
