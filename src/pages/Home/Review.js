import React from 'react'
import { SwiperSlide } from 'swiper/react'

const Review = () => {
    return (
        <SwiperSlide>
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  sm:flex flex-col items-center justify-center gap-5">
                    <h1 className="text-slate-100 font-bold  text-3xl lg:text-6xl capitalize text-center">
                        Our Working Place
                    </h1>
                    <p className="text-slate-300 hidden md:block font-medium text-sm md:text-xl text-center">
                        You know that working place is very important for
                        performance.We have a super cool office. The net and
                        clean Environment makes an employee super fast and
                        productive.
                    </p>
                </div>
                <img
                    className="max-h-[750px] w-screen "
                    src="https://i.ibb.co/kKKGSHZ/slider-3.png"
                    alt=""
                />
            </div>
        </SwiperSlide>
    )
}

export default Review
