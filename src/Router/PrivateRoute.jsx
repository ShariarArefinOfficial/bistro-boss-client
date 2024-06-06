//import React from 'react';

import { Navigate } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
    const {loading,user}=useAuthContext();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;