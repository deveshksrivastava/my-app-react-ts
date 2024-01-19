import React from 'react';
import Banner from './pages/banner';
const Services = () => {
  return (
    <div className="min-h-screen  w-full">
      <section className='text-center underline cursor-pointer py-5 text-red-500'>
        <div className='p-2 '>
        Request Advanced Analytics Enviornment
        </div>
        <div className='p-2'>
        Request data Upload 
        </div>
      </section>
      <Banner />
    </div>
  );
};

export default Services;
