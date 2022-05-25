import React from 'react'
import {
    useSignInWithGoogle,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from 'react-hook-form'
import Spinner from '../Shared/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import fetcher from '../../api'

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth)
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth)
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const navigation = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    let singInError
    if (error || gError || updateError) {
        singInError = (
            <p className="text-red-500 pb-2">
                <small>
                    {error?.message || gError?.message || updateError?.message}
                </small>
            </p>
        )
    }

    if (loading || gLoading || updating) {
        return <Spinner />
    }

    if (gUser) {
        const user = {
            name: gUser?.user?.displayName,
            email: gUser?.user?.email,
            role: '',
            education: '',
            phone: '',
        }
        console.log(user)
        fetcher.put('/profile', { ...user })
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        const user = {
            name: data?.name,
            email: data?.email,
            role: '',
            education: '',
            phone: '',
        }
        fetcher.post('/profile', { ...user })
        // navigation('/')
    }
    return (
        <div className="flex md:h-screen justify-center items-center ">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"> Name :</span>
                            </label>
                            <input
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is required!',
                                    },
                                })}
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        {/* email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email :</span>
                            </label>
                            <input
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required!',
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email!',
                                    },
                                })}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === 'pattern' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        {/* password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password :</span>
                            </label>
                            <input
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is required!',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters!',
                                    },
                                })}
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {singInError}
                        <input
                            className="btn w-full max-w-xs"
                            type="submit"
                            value="Sign Up"
                        />
                    </form>
                    <p className="text-center">
                        Already have an account?
                        <Link className="text-secondary pl-2" to="/login">
                            Please Log In
                        </Link>
                    </p>
                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
