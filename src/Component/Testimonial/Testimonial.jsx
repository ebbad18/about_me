import React from "react";
import "./testimonial.css";
import Client1 from "../../assets/client1.png";

import {Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar : Client1,
    name: 'Kerem',
    review: 'Very, very fast communication and execution of the task. From having the idea in my head until receiving the completed work was as quick as a few hours - very impressive - thank you! Code is clean and clear and seller was nice and direct and easy to work with.'
  },
  
  {
    avatar : Client1,
    name: 'Olive Yew',
    review: 'Amazing work! Ebbad helped refine my vague project brief to overcome obstacles and rapidly iterate a fantastic new website!! Fast and communicative. Would definitely recommend!.'
  },
  {
    avatar : Client1,
    name: 'Adda bugg',
    review: 'Amazing skills and a very fast communication and development.'
  },
  {
    avatar : Client1,
    name: 'Allie Grater',
    review: 'I enjoy working with this seller. He follows directions well and completes everything to my satisfaction every time.'
  },

]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review},index ) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Client1" />
              </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
           
            )
          })
        }

       

      </Swiper>
    </section>
  );
};

export default Testimonial;
