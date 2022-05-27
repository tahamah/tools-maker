import {
    faFaceSmileBeam,
    faLink,
    faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AnimatedNumbers from 'react-animated-numbers'

const BusinessSummary = () => {
    return (
        <div className="md:min:h-[110vh] overflow-hidden bg-[#011520]">
            <div
                className="xl:px-20 px-6 py-20 xl:mx-auto xl:container"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <div className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-300 sm:mb-0 mb-12">
                    <h1 className="text-4xl font-bold uppercase text-center">
                        "// Business Summary //"
                    </h1>
                    <h2 className="text-xl text-center uppercase ">
                        They are trusted us! <br />
                        users Experience
                    </h2>
                </div>
                <div
                    className="flex justify-center mx-auto mt-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <span className="inline-block w-4 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="inline-block w-16 h-2 mx-1 bg-yellow-400 rounded-full"></span>
                    <span className="inline-block w-40 h-2 bg-yellow-400 rounded-full"></span>
                </div>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img
                        className="w-full xl:h-full h-96 object-cover  sm:block hidden"
                        src="https://i.ibb.co/KjrPCyW/map.png"
                        alt="map"
                    />
                    <img
                        src="https://i.ibb.co/SXKj9Mf/map-bg.png"
                        alt="mobileImage"
                        className="sm:hidden -mt-10 block w-full h-96 object-cover  absolute z-0"
                    />

                    <div
                        className="shadow-lg  xl:p-6 p-4 sm:w-auto w-full bg-gray-800 sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 "
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <div className="text-3xl flex font-semibold text-gray-100">
                            <span className="container">
                                <AnimatedNumbers
                                    animateToNumber={35286}
                                    fontStyle={{ fontSize: 40 }}
                                    configs={[
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 130,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 135,
                                        },
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                    ]}
                                ></AnimatedNumbers>
                            </span>
                            <FontAwesomeIcon className="ml-4" icon={faUsers} />
                        </div>
                        <p className="text-3xl font-bold pt-3 leading-4 xl:mt-4 mt-2 text-gray-100">
                            Feedbacks
                        </p>
                    </div>
                    <div
                        className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-gray-800 sm:absolute relative z-20  mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="text-3xl flex font-semibold text-gray-100">
                            <span className="container">
                                <AnimatedNumbers
                                    animateToNumber={52860}
                                    fontStyle={{ fontSize: 40 }}
                                    configs={[
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 130,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 135,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                    ]}
                                ></AnimatedNumbers>
                            </span>
                            <FontAwesomeIcon className="ml-4" icon={faLink} />
                        </div>
                        <p className="text-xl font-bold pt-3 leading-4 xl:mt-4 mt-2 text-gray-100">
                            Recently Connect
                        </p>
                    </div>
                    <div
                        className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-gray-800 sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <div className="text-3xl flex font-semibold text-gray-100">
                            <span className="container">
                                <AnimatedNumbers
                                    animateToNumber={35286}
                                    fontStyle={{ fontSize: 40 }}
                                    configs={[
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 130,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 135,
                                        },
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                    ]}
                                ></AnimatedNumbers>
                            </span>
                            <FontAwesomeIcon
                                className="ml-4"
                                icon={faFaceSmileBeam}
                            />
                        </div>
                        <p className="text-2xl font-bold pt-3 leading-4 xl:mt-4 mt-2 text-gray-100">
                            Happy Clients
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessSummary
