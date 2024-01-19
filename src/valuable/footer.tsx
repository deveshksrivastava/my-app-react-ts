import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinkTag from './pages/nav-link';
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
    <div className=" justify-between bg-slate-100 shadow-md h-15 ">
    <div className="flex items-start max-w-7xl px-2 py-2">
        <img src="/asserts/img/logo.png" className="w-20" alt="Logo" />
      </div>
      <div className=" flex bg-red-400 px-2 py-2  justify-center items-center" id="navbar">
        <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0 mb-[3px] ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                // onClick={toggleDropdown}
                className={({ isActive }) => {
                  return (
                    'px-2 py-2  text-md font-medium ' +
                    (isActive
                      ? 'text-gray-300 bg-gray-500 border-b-[4px]  border-b-zinc-100 hover:text-white '
                      : ' text-white')
                  );
                }}
              >
                {link.title}
              </NavLink>
              <NavLinkTag href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
