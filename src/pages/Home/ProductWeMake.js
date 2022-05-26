import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import fetcher from '../../api'

const ProductWeMake = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        ;(async () => {
            const res = await fetcher.get('/tools')
            setData(res.data)
        })()
    }, [])

    const navigate = useNavigate()
    const navigateToUpdate = (id) => {
        navigate(`purchase/${id}`)
    }

    return (
        <div className="md:min-h-[150vh] overflow-hidden  bg-[#011520] pb-10 md:pb-0 flex flex-col justify-center">
            <div className="xl:w-1/2 mx-auto w-11/12">
                <h1
                    className="md:text-6xl text-5xl font-bold 2xl:leading-10 leading-0 text-center text-gray-100"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    Tools We Make
                </h1>
                <div
                    className="flex justify-center mx-auto mt-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <span className="inline-block w-56 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="inline-block w-28 h-2 mx-1 bg-yellow-500 rounded-full"></span>
                    <span className="inline-block  w-16 h-2 bg-yellow-500 rounded-full"></span>
                </div>
            </div>
            <div className="grid mx-10 mt-10 gap-12  grid-cols-1 md:pt-28 md:grid-cols-2 max-w-7xl md:mx-auto">
                {data.map((p) => (
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="md:flex max-w-md mx-auto  duration-500  overflow-hidden rounded-lg shadow-lg   transition ease-in-out delay-100 hover:drop-shadow-2xl hover:-translate-y-1   hover:scale-110  bg-gray-300">
                            <div className="md:w-1/3  bg-cover">
                                <img
                                    className=" md:h-full h-[270px] w-full"
                                    src={p.img}
                                    alt=""
                                    data-aos="zoom-in"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000"
                                />
                            </div>

                            <div
                                className="md:w-2/3 w-full p-4 md:p-4"
                                data-aos="zoom-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000"
                            >
                                <h1 className="text-2xl font-bold ">
                                    {p.product_name}
                                </h1>

                                <p className="mt-2 text-sm  ">
                                    {p.body.slice(0, 100)}
                                </p>
                                <p className="mt-5">Available: {p.available}</p>
                                <p className="mt-5">Min Order: {p.minOrder}</p>

                                <div className="md:flex justify-between mt-3 item-center">
                                    <h1 className="text-lg font-bold md:text-xl">
                                        ${p.price}
                                        <span className="text-sm ml-2 font-normal text-gray-00 ">
                                            (par piece)
                                        </span>
                                    </h1>
                                    <button
                                        onClick={() => navigateToUpdate(p._id)}
                                        className="inline-flex
                                    items-center
                                    mt-4
                                    px-2
                                    rounded
                                    outline 
                                    duration-500
                                    outline-[#332467]
                                    hover:bg-[#332467]
                                    hover:outline-gray-500
                                    hover:-translate-y-1
                                   bg-gray-100
                                    text-[#332467]
                                    font-bold
                                    lg:mb-0
                                    hover:text-gray-100 "
                                    >
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div
                className="mx-auto  my-20"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="2000"
            >
                <Link
                    to="/manageAll"
                    className="
                    inline-flex
                    items-center
                    mt-4
                    px-5
                    py-2
                    outline 
                    ease-in-out
                    duration-500
                    outline-gray-100
                    hover:bg-gray-100
                    hover:outline-yellow-500
                    hover:text-gray-900
                    hover:-translate-y-3
                    bg-gray-900
                    text-white
                    font-bold
                    lg:mb-0
                    "
                >
                    ManageAll
                </Link>
            </div> */}
        </div>
    )
}

export default ProductWeMake
