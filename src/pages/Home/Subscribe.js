import React from 'react'
import { toast } from 'react-toastify'

const ExploreUse = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        email && toast.success('Thank you for your Subscription')
        const inputEmail = window.document.getElementById('input-email')
        inputEmail.value = ''
    }
    return (
        <>
            <div className="xl:text-5xl mt-44 md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-300 sm:mb-0 mb-12">
                <h1 className="text-4xl font-bold uppercase text-center">
                    "// Subscribe Now! //"
                </h1>
                <h2 className="text-xl mt-3 text-center uppercase ">
                    To get spicel offer
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

            <section class="flex flex-col max-w-4xl mx-auto overflow-hidden mt-20 mb-44 bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                    <div class="px-6 py-6 md:px-8 md:py-0">
                        <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
                            Sign Up For{' '}
                            <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">
                                Project
                            </span>{' '}
                            Updates
                        </h2>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consectetur obcaecati odio
                        </p>
                    </div>
                </div>

                <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form onSubmit={handleSubmit}>
                        <div class="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input
                                id="input-email"
                                required
                                class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                            />

                            <button
                                type="submit"
                                class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                            >
                                subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ExploreUse
