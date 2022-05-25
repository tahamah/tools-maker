import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init'
import Spinner from '../Shared/Spinner'
import CheckoutForm from './CheckOutForm'

const stripePromise = loadStripe(
    'pk_test_51L3CZdJCQhAPUSFZG9dLyHRZHCrhO6GTntoqgoSBFDx18SmADNjK97LaD9St16gPaLCs2RsnneytXCbBmU5SRdPU00sAQBdnIv'
)

const Payment = () => {
    const [user] = useAuthState(auth)

    const { id } = useParams()

    const url = `http://localhost:5000/singleOrder?id=${id}&email=${user?.email}`
    const { data: order, isLoading } = useQuery(['product', url], () => {
        return fetch(url, {}).then((res) => res.json())
    })
    console.log(order)

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold text-accent capitalize my-5">
                pay for{' '}
                <span className="text-primary">{order?.product_name}</span>
            </h1>
            <div className="flex justify-center items-center gap-10 my-16">
                <div className="card  bg-base-100 shadow-xl w-full">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold my-5 text-primary">
                            {order?.product_name}
                        </h2>
                        <p className="text-lg font-semibold text-accent capitalize">
                            Price: {order.price}
                        </p>
                        <p className="text-lg font-semibold text-accent capitalize">
                            2. booking date: bookingDate
                        </p>
                        <p className="text-lg font-semibold text-accent capitalize">
                            2. Appointment fee: price
                        </p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl w-full p-10">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

export default Payment
