import React from 'react';
import logo from '../images/file_files.png';
const Body = () => {
  console.log("home");
  return (
    <div className="w-full min-h-[calc(100vh-24vh)]">

      <div className={`h-60 bg-banner-logo  relative  w-300  bg-center `}></div>

      <div className="max-w-3xl  m-auto relative ">
        <div className=" text-white  flex items-center justify-center ">
          <div className=" absolute mb-60 text-center font-extrabold p-1  backdrop-sepia-1 bg-white/10  w-full  text-2xl rounded ">
            Welcome to Grid SEO Data & Analystics Plateform
          </div>
        </div>
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
          <div className="flex py-5 mt-2 text-center  gap-5 items-center  ">
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
