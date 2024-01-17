import React from 'react';

const Header = () => {
  return (
    <div className=" justify-between bg-slate-100 shadow-md h-15">
      <div className="flex items-start max-w-7xl px-2 py-2">
        <img src="/asserts/img/logo.png" className="w-20" alt="Logo" />
      </div>
      <div className="flex bg-red-400  justify-center items-center">
        <ul className="flex gap-4 no-underline ">
          <li className="text-white  p-2 ">
            <a href="sdsds">Home</a>
          </li>
          <li className="text-white  p-2 ">
            <a href="">Service</a>
          </li>
          <li className="text-white  p-2 ">
            <a href="">Help</a>
          </li>
          <li className="text-white  p-2 ">
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* <div className="bg-pink-50">
        <ul className="flex p-4 m-4">
          <li className="mr-4">
            <a href="/">Home</a>
          </li>
          <li className="mr-4">
            <a href="/about">Request Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
    </div>
  );
};

export default Header;
