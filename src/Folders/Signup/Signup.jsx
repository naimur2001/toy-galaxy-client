import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Signup = () => {
  const [error,SetError]=useState('')
  const {createUser,updateInfo}=useContext(AuthContext);
  const handleSignUp=(event)=>{
    event.preventDefault();
    const form=event.target;
    const photo=form.url.value;
    // console.log(photo);
    const name=form.name.value;
    const  email=form.email.value;
    const  password=form.password.value;
    // console.log(email,password);
    
   SetError('')
     if(email=== ''){
      SetError("Email field is empty")
    }
    else if(password=== ''){
      SetError("Password field is empty")
    }
    else if (password.length<6) {
      SetError("Password is small.")
    }
  createUser(email,password)
  // updateInfo(name,photo)
  .then(result=>{
    const loggedUser =result.user;
    loggedUser.displayName=name
    loggedUser.photoURL=photo
    console.log(loggedUser);
    updateInfo(name,photo)
    
    form.reset();
  })
  .catch(error=>{
   console.log(error);
  })
  }
  return (
    <>
      <Navbar></Navbar>
      <div className='mt-10'>
      <div className="hero min-h-screen bg-purple-200 rounded-lg">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
      <form  onSubmit={handleSignUp}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="@email.com" name='email' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="//http:url" name='url' required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" required name='password' className="input input-bordered" />
        
        </div>
        <p className='text-center text-red-500'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn bg-purple-400 border-0">Submit</button>
          <label className="label">
            Already have an account --
            <Link to='/login' className="label-text-alt link link-hover text-base text-red-400 mx-3">login</Link>
          </label>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
    </div>
      <Footer></Footer>
    </>
  );
};

export default Signup;