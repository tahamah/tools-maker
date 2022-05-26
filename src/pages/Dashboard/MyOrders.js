import axios from 'axios'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import fetcher from '../../api'
import auth from '../../firebase.init'
import Spinner from '../Shared/Spinner'

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    // const [orders, setOrders] = useState([])
    // useEffect(() => {
    //     fetcher(`/purchaseProduct?user=${user?.email}`).then((data) => {
    //         setOrders(data.data)
    //     })
    // }, [user?.email])

    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery(['orders', user], () => {
        return fetch(
            `https://morning-ocean-16366.herokuapp.com/UsersOrders?email=${user?.email}`,
            {
                //   headers: {
                //     authorization: Bearer ${localStorage.getItem("accessToken")},
                //   },
            }
        ).then((res) => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken')
                return
            }
            return res.json()
        })
    })
    if (isLoading) {
        return <Spinner />
    }

    const handleDeleteOrder = async (id) => {
        const url = `https://morning-ocean-16366.herokuapp.com/deleteOneProduct?id=${id}&email=${user?.email}`
        const data = await axios.delete(url, {
            //   headers: {
            //     authorization: Bearer ${localStorage.getItem("accessToken")},
            //   },
        })
        if (data.status === 401 || data.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            return
        }
        refetch()
        // setOpenConfirmModal(false);
    }
    return (
        <>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
                My all order
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Total Price</th>
                            <th>Shipping Status</th>
                            <th>Transaction ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders?.map((order, index) => {
                            const {
                                _id,
                                product_name,
                                price,
                                purchaseQuantity,
                                deliveryStatus,
                                paid,
                                transactionId,
                            } = order
                            return (
                                <tr key={index} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{product_name}</td>
                                    <td>${price}</td>
                                    <td>{purchaseQuantity}</td>
                                    <td>
                                        ${price * parseInt(purchaseQuantity)}
                                    </td>
                                    <td>
                                        {deliveryStatus ? (
                                            <span className="text-green-600 font-semibold">
                                                Shipped
                                            </span>
                                        ) : (
                                            <span className="text-orange-600 font-semibold">
                                                Pending
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        {transactionId
                                            ? transactionId
                                            : "You haven't paid yet"}
                                    </td>

                                    <td>
                                        <div className="flex gap-2 justify-center items-center">
                                            <button
                                                onClick={() =>
                                                    navigate(`/payment/${_id}`)
                                                }
                                                disabled={paid}
                                                className="btn btn-xs bg-green-600 border-green-600
                        font-semibold px-2 text-white capitalize rounded-lg disabled:text-accent"
                                            >
                                                {paid ? 'Paid' : 'Pay'}
                                            </button>
                                            <label
                                                htmlFor={index}
                                                disabled={paid}
                                                className="btn btn-xs bg-red-600 border-red-600
                        font-semibold px-2 text-white capitalize rounded-lg"
                                            >
                                                Cancel
                                            </label>
                                            {/* modal */}
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    id={index}
                                                    class="modal-toggle"
                                                />
                                                <div class="modal modal-bottom sm:modal-middle">
                                                    <div class="modal-box">
                                                        <label
                                                            htmlFor={index}
                                                            class="btn btn-sm btn-circle absolute right-2 top-2"
                                                        >
                                                            ✕
                                                        </label>
                                                        <h3 class="font-bold text-lg mt-8">
                                                            You are trying to
                                                            delete{' '}
                                                            {product_name}
                                                        </h3>
                                                        <p class="py-4">
                                                            Are you sure you
                                                            want to delete?
                                                        </p>
                                                        <div class="modal-action">
                                                            <label
                                                                onClick={() =>
                                                                    handleDeleteOrder(
                                                                        _id
                                                                    )
                                                                }
                                                                htmlFor={index}
                                                                class="btn bg-red-600 border-red-600
                                     font-semibold px-2 text-white capitalize rounded-lg"
                                                            >
                                                                Confirm Delete
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* modal */}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MyOrders
