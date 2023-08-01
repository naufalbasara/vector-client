import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

type SwiperProps = {
  images: string[];
};

export default function SwiperComponent({ images }: SwiperProps) {
  return (
    <>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 100,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {images && images.map((image) => (
        <SwiperSlide className='bg-center bg-cover w-full h-full mx-auto'>
          <img src={image} className='bg-center bg-cover w-50 h-full mx-auto'/>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
  );
}
