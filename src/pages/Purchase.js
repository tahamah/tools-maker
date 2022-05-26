import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import fetcher from '../api'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../src/firebase.init'
import useAdmin from '../hooks/useAdmin'
import Spinner from './Shared/Spinner'

const Purchase = () => {
    const { product_id } = useParams()
    const [data, setData] = useState([])
    const [pursesCount, setPursesCount] = useState(0)
    const [user] = useAuthState(auth)
    const [isAdmin, isLoading] = useAdmin(user?.email)
    const { img, product_name, available, price, minOrder, body } = data
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    useEffect(() => {
        ;(async () => {
            const res = await fetcher.get(
                `/tools/${product_id}?email=${user?.email}`,
                {
                    headers: {
                        authorization: ` Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                }
            )
            setData(res.data)
        })()
    }, [product_id, user])
    if (isLoading) {
        return <Spinner />
    }
    const handPurchase = async (data) => {
        if (
            parseInt(data.purchaseQuantity) < parseInt(minOrder) ||
            parseInt(data.purchaseQuantity) > parseInt(available)
        ) {
            return toast.error('Please Add Valid Quantity')
        }
        const singleOrder = {
            ...data,
            price,
            paid: '',
            transactionId: '',
            deliveryStatus: '',
            product_name,
            user: user?.email,
        }

        if (isAdmin) {
            return toast.warning('you are admin, you can not purchase. ')
        }
        if (data.shippingAddress === '' || data.purchaseQuantity === '') {
            return
        } else {
            await fetcher.post(
                `/purchaseProduct?email=${user?.email}`,
                singleOrder,
                {
                    headers: {
                        authorization: ` Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                }
            )
            toast.success('Product Successfully Added')
            reset()
        }
    }
    return (
        <div class="hero min-h-screen bg-[#03203C]">
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
                                <form onSubmit={handleSubmit(handPurchase)}>
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
                                                Min Order:
                                            </label>
                                            <input
                                                name="minOrder"
                                                value={minOrder}
                                                type="text"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                required
                                                readOnly
                                                disabled
                                            />
                                        </div>
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

                                    <div className="md:flex gap-10 mt-4">
                                        <div
                                            className="md:w-1/2 md:mt-0 mt-6 md:md-0 "
                                            data-aos="fade-left"
                                            data-aos-duration="1000"
                                        >
                                            <label
                                                htmlFor="username"
                                                className="block text-sm text-gray-200 "
                                            >
                                                Purchase:
                                            </label>
                                            <input
                                                id="addInput"
                                                name="addQuantity"
                                                placeholder={minOrder}
                                                type="number"
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                {...register(
                                                    'purchaseQuantity',
                                                    {
                                                        required:
                                                            'Purchase Quantity is required',
                                                    }
                                                )}
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
                                                Available Quantity:
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
                                                Shipping Address:
                                            </label>
                                        </div>

                                        <textarea
                                            name="shippingAddress"
                                            placeholder="Shipping Address:"
                                            type="text"
                                            rows="2"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            {...register('shippingAddress', {
                                                required:
                                                    'Shipping Address is required',
                                            })}
                                        />
                                    </div>

                                    <div className="mt-6  gap-10">
                                        <button
                                            data-aos="fade-left"
                                            data-aos-duration="1000"
                                            onClick={handPurchase}
                                            type="submit"
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-gray-600 font-bold focus:outline-none focus:bg-gray-600"
                                        >
                                            Purchase Now
                                        </button>
                                    </div>
                                </form>

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
                                        <button className="bg-yellow-500 text-white py-1 px-5 hover:translate-x-3 duration-500  rounded-full mt-5">
                                            <Link to="/dashboard/myOrders">
                                                My Orders
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
