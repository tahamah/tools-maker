import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div className="bg-[#011520] md:min-h-[100vh] px-20  py-32">
            <div id="gallery" className="py-16 flex flex-col justify-center">
                <h1 className="md:text-7xl  text-4xl text-center text-white  font-bold">
                    Portfolio
                </h1>
                <div className="mx-auto mt-5">
                    <div className="h-[5px] rounded w-[200px] md:w-[500px] bg-red-500"></div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className=" mt-8 xl:mt-16 ">
                    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg ">
                        {/* <div className="flex justify-center -mt-12 md:justify-start">
                            <img
                                className="object-cover w-[100px] h-[100px] border-2 border-blue-500 rounded-full "
                                alt="profile-img"
                                src="https://i.ibb.co/xJFVNb3/profile.png"
                            />
                        </div> */}

                        <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white ">
                            TAHA
                        </h2>

                        <p className="mt-2 text-gray-600 -z-10 ">
                            <span className="font-bold text-xl">
                                My Skills:
                            </span>
                        </p>
                        <p className="mt-2 text-gray-600 -z-10 ">
                            <span className="font-bold">Expertise: </span>
                            HTML, CSS, JavaScript (ES6), React JS, DaisyUI,
                            Tailwind
                        </p>
                        <p className="mt-2 text-gray-600 -z-10 ">
                            <span className="font-bold">Comfortable: </span>
                            Node JS, Express JS, MongoDB, Axios, Stripe
                        </p>
                        <div className="mt-2 text-gray-600 -z-10 ">
                            <span className="font-bold text-xl">
                                My Best Projects:
                            </span>
                            <div>
                                <Link
                                    className="text-blue-500 font-bold"
                                    to="https://tools-maker-a62a5.web.app/"
                                >
                                    Tools Maker
                                </Link>
                                <Link
                                    className="text-blue-500 mx-4 font-bold"
                                    to="https://tools-maker-a62a5.web.app/"
                                >
                                    Super Stock
                                </Link>
                                <Link
                                    className="text-blue-500 font-bold"
                                    to="https://gym-triner-9c7c3.web.app/"
                                >
                                    Gym Guru
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2 text-gray-600 -z-10 ">
                            <span className="font-bold text-xl">
                                Education:
                            </span>
                            <div>
                                <p>Islamic University, Kushtia</p>
                                <p>
                                    Hon's at Al Hadith And Islamic Studies
                                    January 2021 - present
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 text-gray-600 -z-10 ">
                            <span className="font-bold text-xl">Email:</span>
                            <div>
                                <p>taha.iu.bd@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
