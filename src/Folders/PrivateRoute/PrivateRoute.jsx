import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = () => {
  const {user,laoder}=useContext(AuthContext);
  return (
    <div>
      
    </div>
  );
};

export default PrivateRoute;