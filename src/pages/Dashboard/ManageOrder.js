import axios from 'axios'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import Spinner from '../Shared/Spinner'

const ManageOrder = () => {
    const [user] = useAuthState(auth)

    //headers: {
    //         authorization: Bearer ${localStorage.getItem("accessToken")},
    //       },

    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery('orders', () => {
        return fetch(
            `https://morning-ocean-16366.herokuapp.com/allOrders?email=${user?.email}`,
            {}
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

    const handleShipping = async (id) => {
        const url = `https://morning-ocean-16366.herokuapp.com/updateDeliveryStatus?email=${user?.email}`
        const data = await axios.patch(
            url,
            { id },
            {
                headers: {
                    authorization: ` Bearer ${localStorage.getItem(
                        'accessToken'
                    )}`,
                },
            }
        )
        refetch()
        console.log(id)

        if (data?.data?.acknowledged) {
            toast.success('Successfully Shipped')
        }
    }
    const handleDeleteOrder = async (id) => {
        const url = `https://morning-ocean-16366.herokuapp.com/deleteOneOrder?id=${id}&email=${user?.email}`
        const data = await axios.delete(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })

        if (data.status === 401 || data.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            return
        }
        refetch()
        if (data?.data?.acknowledged) {
            toast.warning('Order has been Cancel')
        }
    }

    return (
        <>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
                Manage all order
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full md:ml-0 ml-96">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Order Quantity</th>
                            <th>Total Price</th>
                            <th>User</th>
                            <th>Pay Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders?.map((order, index) => {
                            const {
                                _id,
                                product_name,
                                purchaseQuantity,
                                price,
                                user,
                                paid,
                                deliveryStatus,
                            } = order
                            return (
                                <tr key={index} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{product_name}</td>
                                    <td>{purchaseQuantity}</td>
                                    <td>
                                        {price * parseFloat(purchaseQuantity)}
                                    </td>
                                    <td>{user}</td>
                                    <td>
                                        {paid ? (
                                            <span className="text-green-600">
                                                Paid
                                            </span>
                                        ) : (
                                            <span className="text-red-400">
                                                Unpaid
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <div className="flex justify-end items-center gap-2">
                                            {deliveryStatus ? (
                                                <button className="btn-xs  font-semibold px-2 bg-green-600 border-green-600  text-white capitalize rounded-lg disabled:text-accent">
                                                    Delivered
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleShipping(_id)
                                                    }
                                                    disabled={
                                                        !paid && !deliveryStatus
                                                    }
                                                    className="btn btn-xs  font-semibold px-2  text-white capitalize rounded-lg disabled:text-accent
                             bg-orange-400 border-orange-400"
                                                >
                                                    Ship now
                                                </button>
                                            )}
                                            <label
                                                htmlFor={`deleteConfirmModal-${index}`}
                                                disabled={paid}
                                                className="btn btn-xs bg-red-600 border-red-600
                        font-semibold px-2 text-white capitalize rounded-lg"
                                            >
                                                Cancel
                                            </label>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    id={`deleteConfirmModal-${index}`}
                                                    className="modal-toggle"
                                                />
                                                <div className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box">
                                                        <label
                                                            htmlFor={`deleteConfirmModal-${index}`}
                                                            className="btn btn-sm btn-circle absolute right-2 top-2"
                                                        >
                                                            ✕
                                                        </label>
                                                        <h3 className="font-bold text-lg mt-8">
                                                            You are trying to
                                                            delete{' '}
                                                            {product_name}
                                                        </h3>
                                                        <p className="py-4">
                                                            Are you sure you
                                                            want to delete?
                                                        </p>
                                                        <div className="modal-action">
                                                            <label
                                                                onClick={() =>
                                                                    handleDeleteOrder(
                                                                        _id
                                                                    )
                                                                }
                                                                htmlFor={`deleteConfirmModal-${index}`}
                                                                className="btn bg-red-600 border-red-600
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

export default ManageOrder
