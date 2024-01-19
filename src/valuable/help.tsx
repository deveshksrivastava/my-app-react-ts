import React from 'react';
import Banner from './pages/banner';

const Help = () => {
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
