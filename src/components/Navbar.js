import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin'
import { useLocation } from 'react-router-dom'
import auth from '../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

const Navbar = ({ children }) => {
    const [openInfo, setOpenInfo] = useState(false)
    const [user] = useAuthState(auth)
    const { pathname } = useLocation()
    const logout = () => {
        signOut(auth)
    }
    const [admin] = useAdmin()
    const navItems = (
        <>
            <li>
                <NavLink to="/" className="rounded-lg">
                    Home
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/dashboard/profile" className="rounded-lg">
                        Dashboard
                    </NavLink>
                </li>
            )}
            <li>
                <NavLink to="/about" className="rounded-lg">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/services" className="rounded-lg">
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="rounded-lg">
                    Contact
                </NavLink>
            </li>
            <li className=" bg-primary   text-slate-100  duration-200 rounded-full border-2 border-primary font-bold">
                {user ? (
                    <div>
                        <div className="relative">
                            <div
                                onClick={() => setOpenInfo(!openInfo)}
                                className="bg-slate-200 w-[25px] h-[25px] rounded-full p-1 flex justify-center items-center cursor-pointer"
                            >
                                <img
                                    src={user?.photoURL}
                                    alt=""
                                    className="rounded-full"
                                />
                            </div>
                            <div
                                className={`${
                                    openInfo ? 'flex' : 'hidden'
                                } absolute flex-col justify-center items-center gap-5 p-6 rounded-lg bg-base-100 shadow-lg top-16 -left-14 md:-left-16`}
                            >
                                <p className="text-xl font-bold text-neutral capitalize">
                                    {user?.displayName}
                                </p>
                                <p className="font-semibold text-accent ">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                        <p
                            className="capitalize  w-full ml-3"
                            onClick={() => {
                                signOut(auth)
                                localStorage.removeItem('accessToken')
                            }}
                        >
                            sign out
                        </p>
                    </div>
                ) : (
                    <>
                        <Link to="/login">login</Link>
                    </>
                )}
            </li>
        </>
    )

    return (
        <div class="drawer  drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-100 fixed top-0 z-50 lg:px-20">
                    {pathname.includes('dashboard') && (
                        <label
                            tabindex="0"
                            for="my-drawer-2"
                            class="btn btn-ghost lg:hidden "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                    )}
                    <div class="flex-1 px-2 mx-2 text-2xl">Tools Maker</div>
                    <div class="flex-none lg:hidden">
                        <label
                            for="my-drawer-3"
                            class="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-2">{navItems}</ul>
                    </div>
                </div>

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {navItems}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
