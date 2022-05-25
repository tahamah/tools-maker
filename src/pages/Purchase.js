import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import fetcher from '../api'

const Purchase = () => {
    const { product_id } = useParams()
    const [data, setData] = useState([])
    const { img, product_name, available, price, body } = data
    const navigate = useNavigate()
    useEffect(() => {
        ;(async () => {
            const res = await fetcher.get(`/tools/${product_id}`)
            setData(res.data)
        })()
    }, [product_id])
    return (
        <div class="hero min-h-screen bg-[#03203C]">
            {/* <div className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-300 sm:mb-0 mb-12">
                <h1 className="text-4xl font-bold uppercase text-center">
                    Purchase Now
                </h1>
            </div>
            <div
                className="flex justify-center mx-auto mt-6"
                data-aos="fade-left"
                data-aos-duration="1000"
            >
                <span className="inline-block w-4 h-2 bg-yellow-400 rounded-full"></span>
                <span className="inline-block w-16 h-2 mx-1 bg-yellow-400 rounded-full"></span>
                <span className="inline-block w-40 h-2 bg-yellow-400 rounded-full"></span>
            </div> */}
            <div class="hero-content flex-col lg:flex-row bg-[#120E43] rounded-lg">
                <img
                    className="object-cover rounded-lg mt-28 md:mt-0 md:rounded-l-lg w-1/2 h-full"
                    src={img}
                    alt="Article"
                />
                <div>
                    <div className="p-6">
                        <div className="mt-4">
                            <div className="mt-6">
                                <div className="md:flex ">
                                    <div
                                        className="md:w-1/2"
                                        text-gray-200
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        <label
                                            htmlFor="username"
                                            className="block text-sm text-gray-200"
                                        >
                                            Product Name:
                                        </label>
                                        <input
                                            name="productName"
                                            placeholder="Product Name"
                                            type="text"
                                            value={product_name}
                                            className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            required
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                    <div
                                        className="md:w-1/2 md:mt-0 mt-6 md:md-0  md:pl-10"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <label
                                            htmlFor="username"
                                            className="block text-sm text-gray-200 "
                                        >
                                            Supplier Name:
                                        </label>
                                        <input
                                            name="supplierName"
                                            placeholder="Supplier Name"
                                            type="text"
                                            // value={supplier_name}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            required
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="md:flex gap-10 mt-4">
                                    <div
                                        className="md:w-1/2 md:mt-0 mt-6 md:md-0 "
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        <label
                                            htmlFor="username"
                                            className="block text-sm text-gray-200 "
                                        >
                                            Quantity:
                                        </label>
                                        <input
                                            name="quantity"
                                            type="number"
                                            value={available}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            required
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                    <div
                                        className="md:w-1/2 md:mt-0 mt-6 md:md-0 "
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        <label
                                            htmlFor="username"
                                            className="block text-sm text-gray-200 "
                                        >
                                            Price:
                                        </label>
                                        <input
                                            name="quantity"
                                            type="number"
                                            value={price}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            required
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                    <div
                                        className="md:w-1/2 md:mt-0 mt-6 md:md-0 "
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <label
                                            htmlFor="username"
                                            className="block text-sm text-gray-200 "
                                        >
                                            Add Quantity:
                                        </label>
                                        <input
                                            // onBlur={(e) =>
                                            //     setAddQuantity(e.target.value)
                                            // }
                                            id="addInput"
                                            name="addQuantity"
                                            placeholder="example 32"
                                            type="number"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-10">
                                    <button
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        // onClick={handDelivered}
                                        type="button"
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                    >
                                        Delivered
                                    </button>

                                    <button
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        // onClick={handAdd}
                                        type="submit"
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                    >
                                        Add Quantity
                                    </button>
                                </div>
                                <div
                                    className="mt-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm text-gray-200 "
                                        >
                                            Description:
                                        </label>
                                    </div>

                                    <textarea
                                        name="description"
                                        placeholder="Description"
                                        value={body}
                                        type="text"
                                        rows="3"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div className=" md:flex justify-between  mt-4">
                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <button
                                            className="bg-red-600 text-white py-1 px-5 hover:-translate-x-3 duration-500  rounded-full mt-5"
                                            onClick={() => navigate(-1)}
                                        >
                                            Go Back
                                        </button>
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        <button className="bg-green-500 text-white py-1 px-5 hover:translate-x-3 duration-500  rounded-full mt-5">
                                            <Link to="/manageAll">
                                                {' '}
                                                Manage All
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
