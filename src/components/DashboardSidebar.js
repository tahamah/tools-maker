import React from 'react'
import { NavLink } from 'react-router-dom'

const DashboardSidebar = ({ children }) => {
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
                    <li>
                        <NavLink to="/dashboard/myOrders">My Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addReview">Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allOrders">All Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allUsers">All Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageAllProducts">
                            Manage All Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addProduct">
                            Add Product
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardSidebar
