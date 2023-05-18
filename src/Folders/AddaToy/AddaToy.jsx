import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddaToy = () => {
const [category,setCategory]=useState("SportsCar")
const {user}=useContext(AuthContext);
const handleAddData=(event)=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const url=form.url.value;
  const quantity=form.quantity.value;
  const price=form.price.value;
  const rating=form.rating.value;
  const cate=category;
  const detail=form.detail.value;
  const seller_name=user.displayName
  const seller_email=user.email
  const carInfo={
    name,
    url,quantity,price,rating,cate,detail,seller_email,seller_name
  }
  console.log(carInfo);
  fetch(`http://localhost:5000/toycars`,{
    method: "POST",
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(carInfo)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
}

  return (
  <>
  <Navbar></Navbar>
    <div>
  <h1 className='text-center text-3xl text-gray-500 font-mono font-semibold my-4' >Add a Toy Car Information</h1>
  <div className='bg-lime-200 p-2 rounded-lg'>
      <form onSubmit={handleAddData} >

<div className='grid grid-cols-2 gap-4'>
<div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Qauntity</span>
          </label>
          <input type="text" name='quantity' placeholder="qauntity" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Photo</span>
          </label>
          <input type="text" name='url' placeholder="Photo-url" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Price</span>
          </label>
          <input type="text" name='price' placeholder="Price" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Rating</span>
          </label>
          <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
        </div>
     <div className='form-control'>
     <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Category</span>
          </label>
     <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full outline-none py-2 px-3 rounded-lg text-base border-2 hover:border-orange-300 h-12'
            >
              <option  value='SportsCar'>Sports Car</option>
              <option value='VintageCar'>Vinatge Car</option>
              <option value='Truck'>Truck</option>
            </select>
     </div>
 
</div>
<div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Detail</span>
          </label>
          <textarea name='detail' placeholder="Description" className="input input-bordered h-28 resize-none " />
        </div>
     <div className="form-control mt-3">
          
          <input type="submit" value={"Add"} className='btn bg-lime-400 border-0 text-gray-500 text-xl hover:text-gray-200 ' />
        </div>
      </form>
     
    </div>
      </div>
 <Footer></Footer>
  </>
  );
};

export default AddaToy;