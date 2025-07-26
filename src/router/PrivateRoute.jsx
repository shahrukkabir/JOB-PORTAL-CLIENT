import React, { useContext } from 'react';
import AuthContext from './../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);


    if (loading) {
        return (
            <div className="flex items-center justify-center bg-gray my-52 bg-opacity-50">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children
    }

    return <Navigate to='/signin' state={location?.pathname}></Navigate>
};

export default PrivateRoute;