import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import auth from '../../firebase.init'
import Spinner from '../Shared/Spinner'

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <Spinner />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return <Outlet />
}

export default RequireAuth
