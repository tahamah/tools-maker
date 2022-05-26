import React from 'react'

const Portfolio = () => {
    return (
        <div className="bg-[#011520] md:h-[100vh] px-20  py-32">
            <div id="gallery" className="py-16 flex flex-col justify-center">
                <h1 className="md:text-7xl  text-4xl text-center text-white  font-bold">
                    About Me
                </h1>
                <div className="mx-auto mt-5">
                    <div className="h-[5px] rounded w-[200px] md:w-[500px] bg-red-500"></div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className=" mt-8 xl:mt-16 ">
                    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg ">
                        <div className="flex justify-center -mt-16 md:justify-center">
                            <img
                                className="object-cover w-[100px] h-[100px] border-2 border-blue-500 rounded-full "
                                alt="profile-img"
                                src="https://i.ibb.co/xJFVNb3/profile.png"
                            />
                        </div>

                        <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white ">
                            TAHA
                        </h2>

                        <p className="mt-2 text-gray-600 -z-10 ">
                            I love to take on challenges. My mission in the next
                            6 months is to become a full-stack developer. I am
                            fully determined to do this. I trust this will be a
                            unique journey for me!
                        </p>

                        <div className="flex justify-end mt-4">
                            <a
                                // to={`https://github.com/vinothsmart/`}
                                href="https://github.com/tahamah"
                                rel="noreferrer"
                                target="_blank"
                                className="text-sm font-medium text-blue-500 "
                            >
                                TAHA
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
