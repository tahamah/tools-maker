import {
    faGlobe,
    faHeadset,
    faLocationDot,
    faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const OurSpeciality = () => {
    return (
        <section class="text-white bg-gray-900">
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto text-center">
                    <h2 class="text-3xl font-bold sm:text-4xl">
                        Tools Maker Speciality
                    </h2>

                    <p class="mt-4 text-gray-300">
                        Tools Maker is a tools manufacturer company. We make
                        more and more tools. You can buy any one. We supply our
                        products every where.
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                        href="/services/digital-campaigns"
                    >
                        <FontAwesomeIcon
                            className=" text-pink-500 text-3xl mr-4"
                            icon={faLocationDot}
                        />
                        <h3 class="mt-4 text-xl font-bold text-white">
                            Our Location
                        </h3>

                        <p class="mt-1 text-sm text-gray-300">
                            Don't worry! We are everywhere in the world where
                            you are. We supply our products in every country.
                            So, you can order.
                        </p>
                    </a>

                    <a
                        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                        href="/services/digital-campaigns"
                    >
                        <FontAwesomeIcon
                            className=" text-pink-500 text-3xl mr-4"
                            icon={faHeadset}
                        />
                        <h3 class="mt-4 text-xl font-bold text-white">
                            Our Support
                        </h3>

                        <p class="mt-1 text-sm text-gray-300">
                            We provide 7/24 h support. You can call or email any
                            time.
                        </p>
                    </a>

                    <a
                        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
                        href="/services/digital-campaigns"
                    >
                        <FontAwesomeIcon
                            className=" text-pink-500 text-3xl mr-4"
                            icon={faGlobe}
                        />
                        <h3 class="mt-4 text-xl font-bold text-white">
                            Our Agent
                        </h3>

                        <p class="mt-1 text-sm text-gray-300">
                            In more than 10 countries we have agent.
                        </p>
                    </a>
                </div>

                <div class="mt-12 text-center">
                    <a
                        class="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
                        href="/get-started"
                    >
                        <span class="text-sm font-medium"> Get Started </span>

                        <svg
                            class="w-5 h-5 ml-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default OurSpeciality
