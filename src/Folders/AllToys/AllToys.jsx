import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import AllToyTableData from './AllToyTableData';
import useTitle from '../Hooks/useTitle';

const AllToys = () => {
  useTitle('All Toys')
  const [totaltoycar,setTotaltoycar]=useState()
useEffect(()=>{
  fetch('https://toy-galaxy-server-five.vercel.app/totaltoycars')
  .then(response => response.json())
  .then(data => {
    setTotaltoycar(data.totaltoycars) // Output: 10
  })
  .catch(error => {
    console.error('Error:', error);
  });
},[])
 const [currentPage,setCurrentPage]=useState(0)
 const [datas,setDatas]=useState([])
 const [carPerRow,setCarPerRow]=useState(20)
 const [searchQuery, setSearchQuery] = useState('');
const tablerow=20

const totalPages=Math.ceil( totaltoycar/ tablerow)

const pageNumbers=[]
  for (let i = 1; i <=totalPages; i++) {
pageNumbers.push(i)
    
  }
console.log(totaltoycar,totalPages,pageNumbers);
useEffect(()=>{
  async function fetchData(){
    const searchParam = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : '';
    const response = await fetch(
      `https://toy-galaxy-server-five.vercel.app/toycars?page=${currentPage}&limit=${carPerRow}${searchParam}`
    );
    const data=await response.json();
    setDatas(data)
  }
  fetchData();
},[currentPage,carPerRow])

const handlePageChange = page => {
  setCurrentPage(page);
};

const handleSearch = () => {
  setCurrentPage(0); // Reset current page when search is performed
};

  return (
 <>
 <Navbar></Navbar>
 <div className='my-6'>
  <h1 className='text-2xl text-gray-700  font-mono font-semibold text-center'>All Toys </h1>
  <div>
  <input
            type="text"
            placeholder="Search by toy name"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="px-2 py-1 outline-none border-2 border-green-200 rounded-md"
          />
          <button onClick={handleSearch} className='px-3 py-1 rounded font-mono font-medium mx-2 bg-green-200'>Search</button>
  </div>
 </div>
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
 datas?.map(data=> <AllToyTableData key={data._id} data={data}></AllToyTableData>)

}
  
  
</table>
</div>
<div className='my-3 flex justify-center items-center gap-2'>
{
datas && pageNumbers?.map((btn,index )=> <button onChange={()=>[setCurrentPage(index)]} className={currentPage===index ? 
  `bg-orange-500 text-black w-7 h-7 border
   rounded-md` :
   ` bg-slate-200 text-black w-7 h-7 border rounded-md`}> {index+1}</button>)
}
</div>
  </div>
   

    <Footer></Footer>
 </>
  );
};

export default AllToys;