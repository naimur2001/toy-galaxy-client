import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';
import useTitle from '../Hooks/useTitle';

const MyToys = () => {
  const {user}=useContext(AuthContext);
  const [datas,setDatas]=useState([])
 useTitle('My Toys')
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
const [filter,setFilter]=useState('')
console.log(filter);
useEffect(() => {
  fetch(`https://toy-galaxy-server-five.vercel.app/toycars?filter=${filter}`)
    .then(res => res.json())
    .then(data => {
      console.log(data, "mytoys");
      const selectedToyCar = data.filter(toy => toy.seller_email === user.email);
      setDatas(selectedToyCar);
    });
}, [filter]);

  return (
  <>
  <Navbar></Navbar>
  <div className='my-6'><h1 className='text-2xl text-gray-700  font-mono font-semibold text-center'>My Toys </h1>
  <div>
<label htmlFor="">
  <span className='mx-2 font-medium'>Filter</span>
</label> <br />
<select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}          
  className='w-36 outline-none py-1 px-1 rounded-lg text-xs border-2 hover:border-orange-300 h-12' >
              <option  value='high-low'>Price High to Low</option>
              <option value='low-high'>Price Low to High </option>
            </select>
  </div>
  </div>
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
        <th>Rating</th>
        <th>Available-Quantity</th>
        <th>Action</th>
        
      </tr>
    </thead>
    
{
datas?.map(data=> <MyToysCard key={data._id} data={data} setDatas={setDatas} datas={datas} ></MyToysCard>)

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