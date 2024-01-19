import { useLocation } from 'react-router-dom';
import Banner from './pages/banner';
import React from 'react';
import Banner from './pages/banner';

const Help = () => {
  const location =useLocation();
  const {user,first,secound} =useParams()
  console.log(user,first,secound);
  
  return (
    <div className="min-h-screen">
      <section className="text-center underline cursor-pointer py-5 text-red-500">
        <div className="p-2 ">About DAP</div>
        <div className="p-2">Report a DAP issue</div>
        <div className="p-2">FAQS</div>
      </section>
      <Banner />
    </div>
  );
};

export default Help;
