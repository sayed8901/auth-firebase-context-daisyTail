import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    // console.log(user);

    if(loading){ return <progress className="progress w-56"></progress> }

    if(user){ return children; }
    else{ return <Navigate to={'/login'} replace={true}>login</Navigate> }
};

export default PrivateRoute;