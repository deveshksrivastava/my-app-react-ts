import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
interface NavLinkProps {
  path?: string;
  title: string;
  dropdown?: NavLinkProps[];
  onClick?: () => void;
}

const NavLinkTag: React.FC<NavLinkProps> = ({ path, title, dropdown,onClick }) => {
  
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  const handleItemClick = (index: number) => {
    
    toggleDropdown();
    setActiveIndex(index);
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
  console.log(path);
  
  return (
    <>
    <div className="relative " ref={dropdownRef}>
      {path === undefined ? (
        // <Link to={path} className=" text-md font-medium text-white hover:text-white">
        <>
        <span className='text-white  px-2 py-2 text-md font-medium  border-b-zinc-100 hover:text-white active:bg-slate-500' onClick={onClick}>{title}</span>
        
        </>  

        // </Link>
      ) : (
        <NavLink
          to={path}
          onClick={toggleDropdown}
          className={({ isActive }) => {
            return (
              'px-2 py-2  text-md font-medium ' +
              (isActive
                ? 'text-gray-300 bg-gray-500 border-b-[4px]  border-b-zinc-100 hover:text-white '
                : ' text-white')
            );
          }}
        >
          {title}
        </NavLink>
      )}
    </div>
      {dropdown  && (
        <div 
          className={`w-full absolute   left-0 mt-2 bg-white shadow-lg   z-10 ${isDropdownOpen ? '' : 'hidden'}`}
        >
          {dropdown.map((subNavLink, index) => (            
            
            <div className='relative item-start '>
            {subNavLink?.path !== undefined && 
              <section
              key={index}
              
              onClick={()=>handleItemClick(index)}
              className="text-center underline cursor-pointer py-3 text-red-500"
              >
                <Link to={subNavLink.path}  className={`p-2  text-black`}>
                  {subNavLink.title}
                </Link>
              </section>
              }
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavLinkTag;
