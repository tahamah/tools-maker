import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import auth from '../firebase.init'
import useAdmin from '../hooks/useAdmin'
import Spinner from '../pages/Shared/Spinner'

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth)
    const [isAdmin, loading] = useAdmin(user?.email)
    if (loading) {
        return <Spinner />
    }
    return (
        <div class="drawer drawer-mobile mt-16 bg-accent">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {children}
            </div>
            <div class="drawer-side ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li>
                        <NavLink to="/dashboard/profile">Profile</NavLink>
                    </li>

                    {!isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/myOrders">
                                    My Orders
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/addReview">
                                    Add Review
                                </NavLink>
                            </li>
                        </>
                    )}

                    {isAdmin && (
                        <li>
                            <NavLink to="/dashboard/allOrders">
                                All Orders
                            </NavLink>
                        </li>
                    )}
                    {isAdmin && (
                        <li>
                            <NavLink to="/dashboard/allUsers">
                                All Users
                            </NavLink>
                        </li>
                    )}
                    {isAdmin && (
                        <li>
                            <NavLink to="/dashboard/manageAllProducts">
                                Manage All Products
                            </NavLink>
                        </li>
                    )}
                    {isAdmin && (
                        <li>
                            <NavLink to="/dashboard/addProduct">
                                Add Product
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default DashboardSidebar
