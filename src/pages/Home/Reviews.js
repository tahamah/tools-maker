import React, { useEffect, useState } from 'react'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import fetcher from '../../api'
import Review from './Review'

const Reviews = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        ;(async () => {
            const res = await fetcher.get('/tools')
            setData(res.data)
        })()
    }, [])
    return (
        <div className="bg-[#011520] mb-32 text-white">
            <div className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-300 sm:mb-0 mb-12">
                <h1 className="text-4xl font-bold uppercase text-center">
                    Project Reviews
                </h1>
                <h2 className="text-xl text-center uppercase ">
                    Happy Client Said
                </h2>
            </div>
            <div
                className="flex justify-center mx-auto mb-28 mt-6"
                data-aos="fade-left"
                data-aos-duration="1000"
            >
                <span className="inline-block w-4 h-2 bg-yellow-400 rounded-full"></span>
                <span className="inline-block w-16 h-2 mx-1 bg-yellow-400 rounded-full"></span>
                <span className="inline-block w-40 h-2 bg-yellow-400 rounded-full"></span>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
            >
                {data.map((p) => (
                    <SwiperSlide>
                        <div class="flex flex-col items-center p-8   cursor-pointer rounded-xl">
                            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img
                                        alt="testimonial"
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    />
                                    <p className="leading-relaxed">
                                        The ferrari triumphs at the sebring 12
                                        hours in gtd is a great choice for a
                                        hybrid sedan. It boasts sleek styling,
                                        generous interior spaceandplenty of
                                    </p>
                                    <span className="inline-block h-1 w-10 rounded bg-green-500 mt-2 mb-6"></span>
                                    <p className="text-gray-500">5.0 stars </p>

                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        taha
                                    </h2>
                                    <p className="text-gray-500">
                                        Senior Product Designer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Reviews
