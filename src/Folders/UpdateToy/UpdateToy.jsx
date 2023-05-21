import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";
const UpdateToy = () => {
  const data=useLoaderData();
  const {
   name,quantity,price,detail,rating,_id
  }=data;
  // handleUpdateData
  const handleUpdateData=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const quantity=form.quantity.value;
    const price=form.price.value;
    const rating=form.rating.value;
    const detail=form.detail.value;

    const updating={
      name,quantity,price,rating,detail
    }
    fetch(`https://toy-galaxy-server-five.vercel.app/toycars/${_id}`,{
      method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updating)
    })
    .then(res=> res.json())
    .then(data=> {
      if (data.modifiedCount>0) {       
        Swal.fire({
          title: 'Success!',
          text: 'Car Info Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
          })
      }
    })
  }
  return (
  <>
  <Navbar></Navbar>
  <div>
  <h1 className='text-center text-2xl text-gray-700 font-mono font-semibold my-4' >Update a Toy Car Information</h1>
  <div className='bg-lime-200 p-2 rounded-lg'>
      <form onSubmit={handleUpdateData} >

<div className='grid grid-cols-2 gap-4'>
<div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Name</span>
          </label>
          <input type="text" name='name' defaultValue={name} placeholder="Name" className="input input-bordered" />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Qauntity</span>
          </label>
          <input type="text" name='quantity' defaultValue={quantity} placeholder="qauntity" className="input input-bordered" />
        </div>
      
      <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Price</span>
          </label>
          <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />
        </div>      
   <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Rating</span>
          </label>
          <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered" />
        </div>
 
</div>
<div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 text-lg font-semibold">Detail</span>
          </label>
          <textarea name='detail' defaultValue={detail} placeholder="Description" className="input input-bordered h-28 resize-none " />
        </div>
     <div className="form-control mt-3">
          
          <input type="submit" value={"Update"} className='btn bg-lime-400 border-0 text-gray-500 text-xl hover:text-gray-200 ' />
        </div>
      </form>
     
    </div>
      </div>
  <Footer></Footer>
  </>
  );
};

export default UpdateToy;