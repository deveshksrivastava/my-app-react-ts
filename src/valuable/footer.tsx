import React from 'react';
import { NavLink } from 'react-router-dom';
const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Service',
    path: '/service'
  },
  {
    title: 'Help',
    path: '/help'
  },
  {
    title: 'Contact Us',
    path: '/contact'
  }
];
const Footer = () => {
  return (
    <div className=" bg-[#f5d5d3] w-full text-center pb-3 border-b  border-gray-500 ">
      <h2 className="py-3 font-bold">
        For any Queries or feedback please contact
        <span className="text-[#82302b]"> box.DAPmanagers@regional.co.uk </span>
      </h2>
    </div>
  );
};

export default Footer;
