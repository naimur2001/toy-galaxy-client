import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import AllToyTableData from './AllToyTableData';

const AllToys = () => {
 const  datas=useLoaderData();
 const [bool,setBool]=useState(false)
 useEffect(()=>{
  if (datas===null) {
    setBool(true)
  }
  else{
    setBool(false)
  }
},[])
  return (
 <>
 <Navbar></Navbar>
    <div className='my-7'>
    <div className="overflow-x-auto w-full">
<table className="table w-full">
  {/* head */}
  <thead>
    <tr>
     
      <th>Photo</th>
      <th>Car Name</th>
      <th>Sub-Category</th>
      <th>Price</th>
      <th>Available-Quantity</th>
      <th>Action</th>
      
    </tr>
  </thead>
  
{
 bool ?   <div className="radial-progress animate-spin text-red-500" style={{ "--value": "70", "--size": "2rem", "--thickness": "4px" }}></div> : datas?.map(data=> <AllToyTableData key={data._id} data={data}></AllToyTableData>)

}
  
  
</table>
</div>
  </div>
   

    <Footer></Footer>
 </>
  );
};

export default AllToys;