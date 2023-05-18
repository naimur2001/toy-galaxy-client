
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';

const SliderSection = () => {

  return (
    <div className='my-2'>
      <h1 className='my-1 border-l-4 border-r-4 border-green-400 text-2xl text-center font-semibold font-mono text-rose-400'>Unleash Your Imagination, Explore Endless Playtime Adventures!</h1>
    <Swiper
      
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper my-2 w-2/4 "
    >
     
      <SwiperSlide>
      <div className="card w-full glass">
  <figure><img src="/public/toy-680164_1280.jpg" className='h-1/4 my-2 rounded-xl w-2/4' alt="" /></figure>
  <div className="card-body">
    <p className='text-center font-semibold'>Unleash your inner child.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-lime-300 border-4">Enjoy!</button>
    </div>
  </div>
</div>
      
      
      </SwiperSlide>
      <SwiperSlide>
      
      <div className="card w-full glass">
  <figure><img src="/public/toy-car-431356_1280.jpg" className='h-1/4 my-2 rounded-xl w-2/4' alt="" /></figure>
  <div className="card-body">
    <p className='text-center font-semibold'>Where playtime dreams come true!</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-lime-300 border-4">Enjoy!</button>
    </div>
  </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      
      <div className="card w-full glass">
  <figure><img src="/public/toy-680164_1280.jpg" className='h-1/4 my-2 rounded-xl w-2/4' alt="" /></figure>
  <div className="card-body">
    <p className='text-center font-semibold'>Discover endless fun and adventure.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-lime-300 border-4">Enjoy!</button>
    </div>
  </div>
</div>
      
      </SwiperSlide>
      <SwiperSlide>
      
      <div className="card w-full glass">
  <figure><img src="/public/autos-2060420_1280.jpg" className='h-1/4 my-2 rounded-xl w-2/4' alt="" /></figure>
  <div className="card-body">
    <p className='text-center font-semibold'>Toys that spark joy!</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-lime-300 border-4">Enjoy!</button>
    </div>
  </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="card w-full glass">
  <figure><img src="/public/miniature-3567577_1280.jpg" className='h-2/4 my-2 rounded-xl w-2/4' alt="" /></figure>
  <div className="card-body">
    <p className='text-center font-semibold'>Discover endless fun and adventure.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-lime-300 border-4">Enjoy!</button>
    </div>
  </div>
</div>
      </SwiperSlide>
     
    </Swiper>
  </div>
  );
};

export default SliderSection;