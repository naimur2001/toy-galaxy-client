import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import AllToyTableData from './AllToyTableData';
import useTitle from '../Hooks/useTitle';

const AllToys = () => {
  useTitle('All Toys')

 const [datas,setDatas]=useState([])
 const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
useEffect(()=>{
  async function fetchData(){
    
    const response = await fetch(
      `https://toy-galaxy-server-five.vercel.app/toycars`
    );
    const data=await response.json();
    setDatas(data)
  }
  fetchData();
},[])

const handleNextPage = () => {
  setCurrentPage((prevPage) => prevPage + 1);
};

const handlePreviousPage = () => {
  setCurrentPage((prevPage) => prevPage - 1);
};
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = datas.slice(startIndex, endIndex);
console.log(datas.length);

// searching
const [searchQuery, setSearchQuery]=useState('')
const handleSearch=()=>{
  const filteredDatas = datas.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setDatas(filteredDatas.slice(0, itemsPerPage));
  setCurrentPage(1);
 
}

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
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-2 py-1 outline-none border-2 border-green-200 rounded-md"
          />
          <button onClick={handleSearch} className='px-3 py-1 rounded border-red-600 border-2 font-mono font-medium mx-2 bg-rose-600 text-white'>Search</button>
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
      <th>Rating</th>
      <th>Available-Quantity</th>
      <th>Action</th>
      
    </tr>
  </thead>

              {currentData.map((data) => (
                <AllToyTableData key={data._id} data={data} />
              ))}
</table>
</div>
<div className="flex justify-center mt-4">
          {currentPage > 1 && (
            
              <button
              className="px-3 py-1 rounded font-mono font-medium bg-rose-600 text-white mr-2 disabled "
              onClick={handlePreviousPage}
            >
              Previous
            </button>
       
            
          )}
          {endIndex < datas.length && (
           
            
              <button className="px-3 py-1 rounded font-mono text-white font-medium bg-rose-600" onClick={handleNextPage}>
              Next
            </button>
             
           
          )}
        </div>

  </div>
   

    <Footer></Footer>
 </>
  );
};

export default AllToys;