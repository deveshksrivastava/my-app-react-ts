import React from 'react';

const Banner = () => {
  return (
    <>
      <div className={`h-60 bg-banner-logo w-300  bg-center `} />

      <div className="max-w-3xl  m-auto relative ">
        <div className=" text-white  flex items-center justify-center ">
          <div className=" absolute mb-60 text-center font-extrabold p-1  backdrop-sepia-1 bg-white/10  w-full  text-2xl rounded ">
            Welcome to Regional Grid SEO Data & Analystics Plateform
          </div>
        </div>
        {/* /// body extra if want to add */}
      </div>
    </>
  );
};

export default Banner;
