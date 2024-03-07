import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const { state } = useLocation();
    return state?.loggedIn ? children : <Navigate to='/'/>;
}
