import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';


const Home = () => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <div>
     <Outlet></Outlet>
    </div>
  );
};

export default Home;