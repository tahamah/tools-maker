import axios from 'axios'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import fetcher from '../../api'
import auth from '../../firebase.init'
import Spinner from '../Shared/Spinner'

const Profile = () => {
    const [imageURL, setImageURL] = useState('')
    const [loading, setLoading] = useState(false)
    const [user] = useAuthState(auth)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const userEmail = user?.email
    const onSubmit = async (data) => {
        const profileData = {
            ...data,
            image: imageURL,
            email: userEmail,
        }

        const { data: result } = await axios.patch(
            `https://morning-ocean-16366.herokuapp.com/updateProfile?email=${userEmail}`,
            profileData,
            {
                headers: {
                    authorization: ` Bearer ${localStorage.getItem(
                        'accessToken'
                    )}`,
                },
            }
        )
        if (result.acknowledged) {
            toast.success('Profile Updated Successfully')
        }

        refetch()
        reset()
        setImageURL('')
    }
    const {
        data: profile,
        isLoading,
        refetch,
    } = useQuery(['user', userEmail], () => {
        return fetch(
            `https://morning-ocean-16366.herokuapp.com/getProfile?email=${user?.email}`,
            {
                headers: {
                    authorization: ` Bearer ${localStorage.getItem(
                        'accessToken'
                    )}`,
                },
            }
        ).then((res) => res.json())
    })
    if (isLoading) {
        return <Spinner />
    }
    const { education, phone, image } = profile

    const handleUploadImage = (event) => {
        setLoading(true)
        const image = event.target.files[0]

        const formData = new FormData()

        formData.set('image', image)
        axios
            .post(
                'https://api.imgbb.com/1/upload?key=c7379da5d79fc84d6a03c675e292d978',
                formData
            )
            .then((res) => {
                setImageURL(res.data.data.display_url)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="py-20  flex bg-accent justify-center items-center">
            <div class="min-w-[00px] px-8 py-4  mt-28 md:mt-16 bg-white rounded-lg shadow-lg  mx-5">
                <div class="mt-8">
                    <img
                        class="object-cover w-28 h-28 border-2 border-blue-500 rounded-full dark:border-blue-400"
                        alt="Testimonial avatar"
                        src={image}
                    />
                </div>

                <div class="mt-2  md:mt-0 ">
                    <label
                        htmlFor="image"
                        class={
                            loading
                                ? 'btn btn-primary btn-xs loading mt-5 mb-10'
                                : 'btn btn-primary btn-xs mt-5 mb-10'
                        }
                    >
                        Change Image
                    </label>
                </div>
                <h1 className="text-3xl text-center font-semibold mb-8">
                    My Profile
                </h1>
                <div className="md:flex gap-10">
                    <div>
                        <h2 class=" text-2xl mb-4 font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                            Name: <br /> {user?.displayName}
                        </h2>
                        <h2 class=" text-xl mb-4 font-semibold text-gray-800 dark:text-white md:mt-0 ">
                            Email: <br /> {user?.email}
                        </h2>
                        <h2 class=" text-xl mb-4 font-semibold text-gray-800 dark:text-white md:mt-0 ">
                            Education:
                            <br /> {education}
                        </h2>
                        <h2 class=" text-xl font-semibold text-gray-800 dark:text-white md:mt-0 ">
                            Phone: <br /> {phone}
                        </h2>
                    </div>
                    <div className="md:w-[400px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label htmlFor="education" class="label">
                                    <span class="label-text">Education:</span>
                                </label>
                                <input
                                    type="text"
                                    id="education"
                                    class="input input-bordered"
                                    {...register('education', {
                                        required: 'Education is required',
                                    })}
                                />
                                {errors.education ? (
                                    <p className="text-xs text-red-300 my-2">
                                        {errors?.education?.message}
                                    </p>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div class="form-control mt-4">
                                <label class="label">
                                    <span class="label-text">
                                        Phone Number:
                                    </span>
                                </label>
                                <input
                                    type="number"
                                    class="input input-bordered"
                                    {...register('phone', {
                                        required: 'Number is Required',
                                    })}
                                />
                                {errors.phone ? (
                                    <p className="text-xs text-red-300 my-2">
                                        {errors?.phone?.message}
                                    </p>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div class="form-control">
                                <input
                                    type="file"
                                    id="image"
                                    class="input input-bordered hidden"
                                    onChange={handleUploadImage}
                                />
                            </div>
                            <div class="form-control mt-6">
                                <button type="submit" class="btn btn-primary">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
