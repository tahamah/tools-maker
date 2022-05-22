import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Banner = () => {
    return (
        <div className="md:h-[100vh] overflow-hidden bg-gray-600 mt-14 md:mt-0 w-full">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  sm:flex flex-col items-center justify-center gap-5">
                            <h1 className="text-slate-100 font-bold  text-3xl lg:text-6xl capitalize text-center">
                                Our Working Place
                            </h1>
                            <p className="text-slate-300 hidden md:block font-medium text-sm md:text-xl text-center">
                                You know that working place is very important
                                for performance.We have a super cool office. The
                                net and clean Environment makes an employee
                                super fast and productive.
                            </p>
                        </div>
                        <img
                            className="max-h-[750px] w-screen "
                            src="https://i.ibb.co/kKKGSHZ/slider-3.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  sm:flex flex-col items-center   justify-center gap-5">
                            <h1 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
                                Religious festivals and Others
                            </h1>
                            <p className="text-slate-300 md:block hidden font-medium text-sm lg:text-xl text-center">
                                Every single day we make party and enjoy our
                                office time. For this, Our client and employees
                                are so much happy. It is the tricks of our
                                company. to make sure productivity.
                            </p>
                        </div>
                        <img
                            className="max-h-[750px] w-screen "
                            src="https://i.ibb.co/CWQLVqQ/slider-1.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  sm:flex flex-col items-center justify-center gap-5">
                            <h1 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
                                Working Time
                            </h1>
                            <p className="text-slate-300 md:block hidden font-medium text-sm lg:text-xl text-center">
                                We provide 24/7 service. But We believe that
                                over time can't make super production. For this
                                reason we make sure more and more shift for our
                                employees to did super service.
                            </p>
                        </div>
                        <img
                            className="max-h-[750px] w-screen "
                            src="https://i.ibb.co/5vwmdSF/slider-2.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  sm:flex flex-col items-center justify-center gap-5">
                            <h1 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
                                Our Location
                            </h1>
                            <p className="text-slate-300 md:block hidden font-medium text-sm lg:text-xl text-center">
                                Super Sack Location Service is a location-based
                                service that developers can use to add
                                geospatial data and location functionality to
                                applications. Customers can visualize data on a
                                map, recommend routes, use geocoding to convert
                                plain text addresses into geographic
                                coordinates.
                            </p>
                        </div>
                        <img
                            className="max-h-[750px] w-screen "
                            src="https://i.ibb.co/Rpms3VD/slider-4.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
