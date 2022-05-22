import React from 'react'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper } from 'swiper/react'
import Review from './Review'

const Reviews = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <Review />
            </Swiper>
        </div>
    )
}

export default Reviews
