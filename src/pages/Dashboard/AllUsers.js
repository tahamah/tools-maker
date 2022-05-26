import axios from 'axios'
import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import Spinner from '../Shared/Spinner'

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([])
    const [user] = useAuthState(auth)

    const { data, isLoading, refetch } = useQuery(['allUsers', user], () => {
        fetch(
            `https://morning-ocean-16366.herokuapp.com/profile?email=${user?.email}`
        )
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    return
                }
                return res.json()
            })
            .then((data) => setAllUsers(data))
    })
    console.log(allUsers)

    if (isLoading) {
        return <Spinner />
    }

    const handleMakeAdmin = async (id) => {
        const url = `https://morning-ocean-16366.herokuapp.com/makeAdmin?email=${user?.email}`
        const data = await axios.patch(url, { id })
        if (data.status === 401 || data.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            return
        }
        if (data.data.acknowledged) {
            toast.success('Successfully make user admin')
            refetch()
        }
    }

    const handleDeleteUser = async (id) => {
        const url = `https://morning-ocean-16366.herokuapp.com/deleteOneUser?email=${user?.email}&id=${id}`
        const data = await axios.delete(url, {})
        if (data.status === 401 || data.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            return
        }
        if (data.data.acknowledged) {
            toast.warning('Successfully deleted user')
            refetch()
        }
    }

    return (
        <div>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
                All Users
            </h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>

                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {allUsers?.map((user, index) => {
                        const {
                            _id,
                            name,
                            image,
                            email,
                            phone,
                            country,
                            role,
                        } = user
                        const userImg =
                            image ||
                            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex justify-start items-center gap-3">
                                        <div class="avatar">
                                            <div class="w-8 rounded">
                                                <img
                                                    src={userImg}
                                                    alt="Tailwind-CSS-Avatar-component"
                                                />
                                            </div>
                                        </div>
                                        <p>{name}</p>
                                    </div>
                                </td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{country}</td>
                                <td>
                                    {' '}
                                    <div className="flex gap-2 justify-center items-center">
                                        <button
                                            disabled={role === 'admin'}
                                            onClick={() => handleMakeAdmin(_id)}
                                            className="btn btn-xs bg-green-600 border-green-600
                        font-semibold px-2 text-white capitalize rounded-lg disabled:text-accent"
                                        >
                                            {role === 'admin'
                                                ? 'Already Admin'
                                                : 'Make admin'}
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDeleteUser(_id)
                                            }
                                            className="btn btn-xs bg-red-600 border-red-600
                        font-semibold px-2 text-white capitalize rounded-lg"
                                        >
                                            remove user
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers
