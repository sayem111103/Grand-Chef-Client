/* eslint-disable */
import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(authContext);
    const location = useLocation();

    if(loader){
        return <div className='flex justify-center items-center h-screen'>Loading....</div>
    }

    if(user){
        return children;
    }
    return <Navigate to='login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;