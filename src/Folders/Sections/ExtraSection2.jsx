import React, { useState } from 'react';

const ExtraSection2 = () => {
  const [emails, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form=event.target;
    const email=form.email.value;
    // Handle form submission, such as sending the email to the server
    // console.log(`Submitting email: ${email}`);
    setEmail(email);
    form.reset();
  };

  return (
<>
<h1 className="text-2xl font-mono font-extrabold text-center text-rose-400 mb-8">
Toy Galaxy Newsletter
</h1>
    <div className='grid lg:grid-cols-2 mt-5 mb-10 gap-2 bg-green-200 rounded-lg'>
<div className="rounded-lg py-8">
      <h2 className="text-3xl text-center font-mono font-bold mb-4">Subscribe to Our Newsletter</h2>
      <h2 className="text-xl text-center font-mono font-bold mb-4">{
        emails ? 'Thanks for Subscribe ' : ''
      } </h2>
      
      <p className="text-gray-600 mb-4 p-4 text-center text-xl">
        Stay up-to-date with the latest toy car releases and promotions.
      </p>
      <form onSubmit={handleSubmit} className="flex p-4">
        <input
          type="email"
          placeholder="Your email address"
          name='email'
          
          className="bg-white rounded-l-md py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
        />
        <button
          type="submit"
          className="bg-rose-500 text-white py-2 px-4 rounded-r-md ml-2 hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
    </div>
    <div className='relative'>
      <img src="/public/toy-car-431356_1280.jpg" className='border-2 rounded-lg' alt="" />
      <img src="/public/autos-2060420_1280.jpg"  className='w-2/4 absolute -bottom-7 right-4 border-2  rounded-lg' alt="" />
      <img src="/public/pexels-pixabay-35967.jpg "  className='w-1/4 lg:absolute lg:flex hidden -right-5  top-1/2 border-2  rounded-lg' alt="" />
    </div>

    </div>
</>
  );
};

export default ExtraSection2;