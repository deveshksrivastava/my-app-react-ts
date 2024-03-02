import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import LanguageDropdown from '../reuseable/languagedropdown';
import { useTranslation } from 'react-i18next';

import NavLinkTag from './pages/nav-link';

interface NavLinkProps {
  label?:string;
  path?: string;
  title: string;
  dropdown?: NavLinkProps[];
  onClick?: () => void;
}

const Header = () => {
  const {t}=useTranslation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
    setMenuVisible(false);
  };
  const currentPath = useLocation().pathname;
  console.log(currentPath);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [clickedLabel, setClickedLabel] = useState(localStorage.getItem('label') || '');
  const [clickedNavLabel, setClickedNavLabel] = useState(localStorage.getItem('navlabel') || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const navLinks: NavLinkProps[] = [
    {
      title:"Home",
      label: `${t("Home")}`,
      path: '/',
      dropdown: undefined
    },
    {
      label:`${t("Service")}`,
      title: 'Service',
      path: '#',
      dropdown: [
        {
          label:`${t("serviced1")}`,
          title: 'Request Advanced Analytics Enviornment',
          path: '/service/advance-analytics-enviroment'
        },
        {
          label:`${t("serviced2")}`,
          title: 'Request Data Upload',
          path: '/service/data-upload'
        }
      ]
    },
    {
      label:`${t("Help")}`,
      title: 'Help',
      path: '#',
      dropdown: [
        {
          label:`${t("helpd1")}`,
          title: 'About US',
          path: '/help/about-us'
        },
        {
          label:`${t("helpd2")}`,
          title: 'Report a US issue',
          path: '/help/report-a-us-issue'
        },
        {
          label:`${t("helpd3")}`,
          title: 'FAQS',
          path: '/help/faqs'
        }
      ]
    },
    {
      label:`${t("Contact-Us")}`,
      title: 'Contact Us',
      path: '/contact',
      dropdown: undefined
    },
    {
      label:`${t("Datasets")}`,
      title: 'Datasets',
      path: '/datasets',
      dropdown: undefined
    }

  ];
  const [menuVisible, setMenuVisible] = useState(false);

  const handleAvatarClick = () => {
    setMenuVisible(!menuVisible);
  };
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const handleItemClick = (title: string, index: number) => {
    localStorage.setItem('navlabel', title);
    setClickedNavLabel(title);
    setIsDropdownOpen(!isDropdownOpen);
    setActiveIndex(index);
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const handleItemtitleClick = (title: string) => {
    localStorage.setItem('label', title);
    setClickedLabel(title);
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setIsDropdownOpen(true);
  }, [clickedLabel]);

  const handleSubItemClick = (title: string) => {
    setClickedLabel(title);
    setIsDropdownOpen(false);
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
    <div className=" justify-between bg-slate-100 shadow-md h-15 ">
      <div className="flex items-start justify-between px-2 py-2">
        <img src="/asserts/img/mso-gap.png" className="w-40" alt="Logo" />

        <div className="mr-4 flex gap-4 items-center" >
          <LanguageDropdown />
          
          <img
            src="https://e7.pngegg.com/pngimages/123/735/png-clipart-human-icon-illustration-computer-icons-physician-login-medicine-user-avatar-miscellaneous-logo.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
            onClick={handleAvatarClick}
          />

        </div>
        {/* {menuVisible && (
          <ul className="absolute z-10  sm:right-5 right-0 mt-10 bg-white shadow-lg rounded-md">
            <li
              className="cursor-pointer py-2 px-4 hover:bg-gray-100 active:bg-gray-200"
              // onClick={() => handleItemClick('Profile')}
            >
              <Link to="/profile">Profile</Link>
            </li>
          
            <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 active:bg-gray-200" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        )} */}
      </div>
      <div className='relative'>
        <div className=" absolute right-0 z-20 top-0 w-auto bg-white element  "  >
        {menuVisible && (
          <ul className="z-10  sm:right-5   ">

            <li
              className="cursor-pointer py-2 px-4 hover:bg-gray-100 active:bg-gray-200"
              // onClick={() => handleItemClick('Profile')}
              >
              <Link to="/profile">Profile</Link>
            </li>
          
            <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 active:bg-gray-200" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        )} 
        </div>
        <div className=" flex bg-site-color px-2 py-2  justify-center items-center" id="navbar" ref={dropdownRef}>
        <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0 mb-[3px] ">
          {/* <NavLinkTag title={link.title} path={link.path} dropdown={link.dropdown} onClick={link.onClick}/>  */}
          {navLinks.map((link, index) => (
            <>
              <li key={index} onClick={() => handleItemtitleClick(link.title)}>
                <NavLink
                  to={`${link.path}`}
                  className={`${
                    currentPath === link.path && clickedLabel === link.title
                      ? 'border-b-[4px] p-2  border-b-zinc-100 hover:text-white  bg-black bg-opacity-50 text-white'
                      : clickedLabel === link.title && currentPath !== link.path
                        ? 'border-b-[4px] p-2  border-b-zinc-100 hover:text-white  bg-black bg-opacity-50 text-white'
                        : 'p-2 text-white hover:border-b-[4px]  hover:bg-black hover:bg-opacity-50 border-b-zinc-100 hover:text-white transition duration-10000 ease-in-out'
                  }`}
                >
                  {link.label}
                </NavLink>

                {link.dropdown && (
                  <div
                    className={`w-full absolute left-0 mt-[10px] bg-white shadow-lg z-10 ${isDropdownOpen && clickedLabel === link.title ? '' : 'hidden'}`}
                  >
                    {link.dropdown.map((subNavLink, index) => (
                      <div
                        key={index}
                        className={`relative item-start ${activeIndex === index && clickedNavLabel === subNavLink.title && 'hover:text-white  bg-black bg-opacity-50 text-white'} `}
                      >
                        {subNavLink.path !== undefined && (
                          <section
                            className={`text-center ${clickedLabel === 'Service' ? 'mr-[200px]' : clickedLabel === 'Help' ? 'mr-10' : ''}  underline cursor-pointer py-3 text-red-500 `}
                            onClick={() => handleItemClick(subNavLink.title, index)} // Assuming you have a function to handle subitem clicks
                          >
                            <Link to={`${subNavLink.path}`} className={`p-2  text-black `}>
                              {subNavLink.label}
                            </Link>
                          </section>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            </>
          ))}

        </ul>
      </div>
      </div>
    </div>
  );
};

export default Header;
