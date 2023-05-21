import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user,load}=useContext(AuthContext);
  const location=useLocation()
  if (load) {
    return <div className='flex justify-center items-center relative '>
    <div className="  absolute top-44 radial-progress animate-spin text-red-500" style={{ "--value": "70", "--size": "6rem", "--thickness": "2rem" }}></div>
  
    </div>
   }
   if (user) {
    return children;
   }

  return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;