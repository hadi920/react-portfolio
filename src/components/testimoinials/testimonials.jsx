import React from 'react'
import './testimonials.css'
import avt1 from '../../assets/avt1.png'
import avt2 from '../../assets/avt3.png'
import avt3 from '../../assets/avt2.png'
import avt4 from '../../assets/avt4.png'



// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avt:avt1,
    name: 'David Dobrik',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis cum laboriosam. Odit ipsa porro quos, architecto labore minima praesentium velit vero dolorem a, obcaecati nesciunt eligendi neque quaerat accusantium.'
  },
  {
    avt:avt2,
    name: 'Jimmy Levy',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis cum laboriosam. Odit ipsa porro quos, architecto labore minima praesentium velit vero dolorem a, obcaecati nesciunt eligendi neque quaerat accusantium.'
  },
  {
    avt:avt3,
    name: 'Cedric Nash',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis cum laboriosam. Odit ipsa porro quos, architecto labore minima praesentium velit vero dolorem a, obcaecati nesciunt eligendi neque quaerat accusantium.'
  },
  {
    avt:avt4,
    name: 'Avah Tyler',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis cum laboriosam. Odit ipsa porro quos, architecto labore minima praesentium velit vero dolorem a, obcaecati nesciunt eligendi neque quaerat accusantium.'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avt,name,review})=>{
            return(
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avt} alt="avatar_image" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials