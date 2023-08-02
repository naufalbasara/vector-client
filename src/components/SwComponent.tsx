import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';

type Props = {
  images?: string[];
};


const SwComponent: React.FC<Props> = ({ images }) => {
  return (
    <div>
    <Swiper
      modules={[Autoplay, EffectCoverflow, Pagination]}
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
      className="mySwiper"
    >
      {images && images.map((image, index) => (
        <SwiperSlide className='' key={index}>
          <img src={image} className='bg-center bg-cover w-96 h-96 mx-auto'/>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}

export default SwComponent;