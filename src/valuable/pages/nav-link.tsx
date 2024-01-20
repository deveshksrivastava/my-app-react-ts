import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
interface NavLinkProps {
  path: string;
  title: string;
  dropdown?: NavLinkProps[];
}

const NavLinkTag: React.FC<NavLinkProps> = ({ path, title, dropdown }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className="relative " ref={dropdownRef}>
     {path === '#' ? (
        <Link to={path} onClick={toggleDropdown} className="px-2 py-2 text-md font-medium text-white hover:text-white">
          {title}
        </Link>
      ) : (
      <NavLink
        to={path}
        onClick={toggleDropdown}
        className={({ isActive }) => {          
          return (
            'px-2 py-2  text-md font-medium ' +
            (isActive ? 'text-gray-300 bg-gray-500 border-b-[4px]  border-b-zinc-100 hover:text-white ' : ' text-white')
          );
        }}
      >
        {title}
      </NavLink>
      )}
      {dropdown && (
        <div
          className={`fixed w-full text-center left-0 mt-2 bg-white shadow-lg   z-10 ${isDropdownOpen ? '' : 'hidden'}`}
        >
          {dropdown.map((subNavLink, index) => (
            <>
              <section key={index} className="text-center underline cursor-pointer py-3 text-red-500">
                <Link to={subNavLink.path} className="p-2" onClick={toggleDropdown}>
                  {subNavLink.title}
                </Link>
              </section>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinkTag;