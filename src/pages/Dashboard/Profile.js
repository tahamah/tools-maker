import axios from 'axios'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import fetcher from '../../api'
import auth from '../../firebase.init'

const Profile = () => {
    const [imageURL, setImageURL] = useState('')
    const [loading, setLoading] = useState(false)
    const [user] = useAuthState(auth)

    const { register, handleSubmit, reset } = useForm()
    const email = user?.email
    const onSubmit = async (data) => {
        const profileData = {
            ...data,
            image: imageURL,
            email: email,
        }

        await fetcher.post('/profile', profileData)
        const profile = await fetcher(`/profile/${email}`)
        console.log(profile)
        reset()
        setImageURL('')
    }

    const handleUploadImage = (event) => {
        setLoading(true)
        const image = event.target.files[0]

        const formData = new FormData()

        formData.set('image', image)
        console.log(formData)
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
            <div class=" px-8 py-4 w-[900px]  mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h1 className="text-center text-4xl mb-20 mt-10 font-bold">
                    My Profile
                </h1>
                <div className="flex justify-between ">
                    <div className=" w-1/3 ml-5 pb-5">
                        <div class="flex justify-center mt-5 md:justify-start mb-2">
                            <img
                                class="object-cover w-44 h-44 border-2 border-blue-500 rounded-full dark:border-blue-400"
                                alt="Testimonial avatar"
                                src={user?.photoURL}
                            />
                        </div>
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

                        <div className="flex flex-col gap-10">
                            <h2 class=" text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                                Name: {user?.displayName}
                            </h2>
                            <h2 class=" text-xl font-semibold text-gray-800 dark:text-white md:mt-0 ">
                                Email: {user?.email}
                            </h2>
                            <h2 class=" text-xl font-semibold text-gray-800 dark:text-white md:mt-0 ">
                                Education:
                                <br /> Kustiya Universaty
                            </h2>
                            <h2 class=" text-xl font-semibold text-gray-800 dark:text-white md:mt-0 ">
                                Phone: <br /> 01816417387
                            </h2>
                        </div>
                    </div>

                    <div class="w-full pl-20 flex items-end ">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label htmlFor="education" class="label">
                                        <span class="label-text">
                                            Education:
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="education"
                                        class="input input-bordered"
                                        {...register('education')}
                                    />
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
                                        {...register('serviceCharge')}
                                    />
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
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                        // disabled={!imageURL ? true : false}
                                    >
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
