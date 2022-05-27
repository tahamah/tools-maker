import React from 'react'

const Blogs = () => {
    return (
        <div className="bg-[#03203C] ">
            <div className="xl:w-1/2 mx-auto py-28 w-11/12">
                <h1
                    className="md:text-6xl text-5xl font-bold 2xl:leading-10 leading-0 text-center text-gray-100"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    Question And Answer
                </h1>
                <div className="flex justify-center mx-auto mt-6">
                    <span
                        className="inline-block w-56 h-2 bg-yellow-500 rounded-full"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    ></span>
                    <span
                        className="inline-block w-28 h-2 mx-1 bg-yellow-500 rounded-full"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    ></span>
                    <span
                        className="inline-block  w-16 h-2 bg-yellow-500 rounded-full"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    ></span>
                </div>
            </div>
            <section className="text-gray-600  body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto md:flex justify-center items-center">
                        <div
                            className="lg:w-1/3"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <img
                                alt=""
                                className="  object-cover object-center  rounded"
                                src=" https://i.ibb.co/FX8xs1H/1-1.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1
                                className="text-gray-300 text-3xl title-font uppercase font-medium mb-4"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                How will you improve the performance of a React
                                Application?
                            </h1>
                            <div
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p>01.Lazy loading images in React.</p>
                                <p>
                                    02.Keeping component state local where
                                    necessary
                                </p>
                                <p>
                                    03.Windowing or list virtualization in React
                                </p>
                                <p>
                                    04.Keeping component state local where
                                    necessary
                                </p>
                            </div>
                            <p
                                className="font-bold text-gray-300"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                See More...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600  body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto md:flex md:flex-row-reverse justify-center items-center">
                        <div
                            className="lg:w-1/3"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            <img
                                alt=""
                                className="  object-cover object-center  rounded"
                                src="https://i.ibb.co/XD9rfNL/2-1.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0 ">
                            <h1
                                className="text-gray-300 text-3xl title-font uppercase font-medium mb-4"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                What are the different ways to manage a state in
                                a React application?
                            </h1>
                            <div
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p>
                                    Local (UI) state – Local state is data we
                                    manage in one or another component.
                                </p>

                                <p>
                                    Global (UI) state – Global state is data we
                                    manage across multiple components.
                                </p>
                                <p>
                                    Server state – Data that comes from an
                                    external server that must be integrated with
                                    our UI state.
                                </p>
                                <p>
                                    URL state – Data that exists on our URLs,
                                    including the pathname and query parameters.
                                </p>
                            </div>
                            <p
                                className="font-bold text-gray-300"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                {' '}
                                See More...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600  body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto md:flex justify-center items-center">
                        <div
                            className="lg:w-1/3"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <img
                                alt=""
                                className="  object-cover object-center  rounded"
                                src="https://i.ibb.co/P9svHzd/3-1.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1
                                className="text-gray-300 text-3xl title-font font-medium mb-4"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                How does prototypical inheritance work?
                            </h1>
                            <div
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p>
                                    Every object with its methods and properties
                                    contains an internal and hidden property
                                    known as [[Prototype]]. The Prototypal
                                    Inheritance is a feature in javascript used
                                    to add methods and properties in objects. It
                                    is a method by which an object can inherit
                                    the properties and methods of another
                                    object. Traditionally, in order to get and
                                    set the [[Prototype]] of an object, we use
                                    Object.getPrototypeOf and Object.
                                </p>
                            </div>
                            <p
                                className="font-bold text-gray-300"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                {' '}
                                See More...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600  body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto md:flex md:flex-row-reverse justify-center items-center">
                        <div
                            className="lg:w-1/3"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            <img
                                alt=""
                                className="  object-cover object-center  rounded"
                                src="https://i.ibb.co/D1KGT00/4-1.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
                            <h1
                                className="text-gray-300 text-3xl title-font font-medium mb-4"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                Why you do not set the state directly in React.
                                For example, if you have const [products,
                                setProducts] = useState([]). Why you do not set
                                products = [...] instead, you use the
                                setProducts
                            </h1>
                            <p
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                State is a variable that stored data. Sometimes
                                we need to change the state based on different
                                situation. Thats why we use 'const [products,
                                setProducts] = useState([])'. If we set our
                                state like products = [...] we will unable to
                                change the value of products if we need. For
                                this reason we use 'const [products,
                                setProducts] = useState([])'.
                            </p>
                            <p
                                className="font-bold text-gray-300"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                {' '}
                                See More...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600  body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto md:flex justify-center items-center">
                        <div
                            className="lg:w-1/3"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <img
                                alt=""
                                className="  object-cover object-center  rounded"
                                src="https://i.ibb.co/8KSZRTb/5.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1
                                className="text-gray-300 text-3xl title-font font-medium mb-4"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                What is a unit test? Why should write unit
                                tests?
                            </h1>
                            <div
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p>
                                    Unit tests are typically automated tests
                                    written and run by software developers to
                                    ensure that a section of an application
                                    (known as the "unit") meets its design and
                                    behaves as intended. In procedural
                                    programming, a unit could be an entire
                                    module, but it is more commonly an
                                    individual function or procedure.
                                </p>
                            </div>
                            <p
                                className="font-bold text-gray-300"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                {' '}
                                See More...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs
