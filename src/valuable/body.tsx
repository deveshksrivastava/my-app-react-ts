import React from 'react';
import logo from '../images/file_files.png';
const Body = () => {
  return (
    <div className="z-0">
      <div className={`h-60 bg-banner-logo  relative  w-300  bg-center `}></div>

      <div className=" text-white  flex items-center justify-center m-auto">
        <div className="absolute mb-60  justify-center backdrop-sepia-0 bg-white/10 p-2  text-xl rounded  ">
          Welcome to National Grid SEO Data & Analystics Plateform
        </div>
      </div>
      <div className="max-w-3xl  m-auto relative ">
        <div className="flex items-center  justify-center ">
          <div className="absolute  justify-center w-full bg-white  max-w-3xl  p-10 mb-10 text-center">
            <h1 className="text-2xl font-bold  ">Accelerate Your Data & Analytics Process</h1>
          </div>
        </div>
        <div className="px-20 py-10 ">
          <div className="flex py-5 mt-2 text-center border-b gap-5 items-center border-gray-500 ">
            <span className="ml-4">
              <img src={logo} alt="logo" />
            </span>
            <div className="mr-5">
              <h1 className="text-[20px] bold text-red-900 justify-start ">Request Advanced Analytical Enviornment</h1>
              <p>For Requesting AEE that enables you to enable AI</p>
            </div>
          </div>
          <div className="flex py-5 mt-2 text-center border-b gap-5 items-center border-gray-500 ">
            <span className="ml-4">
              <img src={logo} alt="logo" />
            </span>
            <div className="mr-5">
              <h1 className="text-[20px] bold text-red-900 justify-start ">Request Advanced Analytical Enviornment</h1>
              <p>For Requesting AEE that enables you to enable AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
