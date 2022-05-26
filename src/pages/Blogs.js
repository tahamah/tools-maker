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
                                src="https://i.ibb.co/85jM3PR/blog-3.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1
                                className="text-gray-300 text-3xl title-font uppercase font-medium mb-4"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                WHAT IS the Difference between javascript and
                                nodejs ?
                            </h1>
                            <div
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p>
                                    Javascript: Javascript is a programming
                                    language that is used for writing scripts on
                                    the website. It can only be run in the
                                    browsers. It is basically used on the
                                    client-side.Javascript is used in frontend
                                    development.
                                </p>
                                <br />
                                <p>
                                    NodeJS: NodeJS is a Javascript runtime
                                    environment. We can run Javascript outside
                                    the browser with the help of NodeJS. It is
                                    mostly used on the server-side. Nodejs is
                                    used in server-side development.
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
                                src="https://i.ibb.co/bmdLCFb/blog-4.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0 ">
                            <h1
                                className="text-gray-300 text-3xl title-font uppercase font-medium mb-4"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                When should you use nodejs and when should you
                                use mongodb ?
                            </h1>
                            <div
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p>
                                    I think Node.js is especially suited for
                                    applications where we'd like to maintain a
                                    persistent connection from the browser back
                                    to the server.
                                </p>
                                <br />
                                <p>
                                    MongoDB facilitates storing database in JSON
                                    (javascript object notation) (or simply when
                                    data is in form of key-value pair) this is
                                    very fast and efficient so we should use it
                                    when we have key-value pair to store(JSON
                                    data).
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
                                src="https://i.ibb.co/Cz5WHRP/blog-1.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1
                                className="text-gray-300 text-3xl title-font font-medium mb-4"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                WHAT IS the Differences between SQL and NoSQL
                                databases ?
                            </h1>
                            <div
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p>
                                    SQL: SQL databases have fixed or static or
                                    predefined schema and These databases are
                                    not suited for hierarchical data storage.
                                    They are Vertically Scalable.These databases
                                    are best suited for complex queries.
                                </p>
                                <br />
                                <p>
                                    NoSQL: NonSQL databases have dynamic schema.
                                    and These databases are best suited for
                                    hierarchical data storage.they are
                                    Horizontally scalable. These databases are
                                    not so good for complex queries.
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
                                src="https://i.ibb.co/WPjL4Tt/blog-2.png"
                            />
                        </div>
                        <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
                            <h1
                                className="text-gray-300 text-3xl title-font font-medium mb-4"
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                What is the purpose of jwt and how does it work
                                ?
                            </h1>
                            <p
                                className=" text-gray-400"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                JSON Web Token (JWT) is an open standard (RFC
                                7519) that defines a compact and self-contained
                                way for securely transmitting information
                                between parties as a JSON object. This
                                information can be verified and trusted because
                                it is digitally signed. <br /> <br />
                                In authentication, when the user successfully
                                logs in using their credentials, a JSON Web
                                Token will be returned. Since tokens are
                                credentials, great care must be taken to prevent
                                security issues. In general, you should not keep
                                tokens longer than required.
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
        </div>
    )
}

export default Blogs
