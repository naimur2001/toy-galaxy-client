import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
  const {user}=useContext(AuthContext);
  const [datas,setDatas]=useState([])

useEffect(()=>{
  fetch('https://toy-galaxy-server-five.vercel.app/toycars')
.then(res=>res.json())
.then(data=> {
  console.log(data,"mytoys")
  const selectedToyCar=data.filter(toy=> toy.seller_email === user.email);
  setDatas(selectedToyCar)
})

},[])
// 

console.log(datas);

  return (
  <>
  <Navbar></Navbar>
    <div>
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
datas?.map(data=> <MyToysCard key={data._id} data={data} ></MyToysCard>)

}
    
    
  </table>
</div>
    </div>
      </div>
      <Footer></Footer>
  </>
  );
};

export default MyToys;