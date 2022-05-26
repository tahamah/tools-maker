import axios from 'axios'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
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
            `http://localhost:5000/allOrders?email=${user?.email}`,
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
    console.log(orders)

    if (isLoading) {
        return <Spinner />
    }

    const handleShipping = async (id) => {
        const url = `http://localhost:5000/updateDeliveryStatus?email=${user?.email}`
        const data = await axios.patch(url, { id })
        console.log(data)
        refetch()
    }

    return (
        <>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
                Manage all order
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                email,
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
                                    <td>{email}</td>
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
                                        <div>
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
