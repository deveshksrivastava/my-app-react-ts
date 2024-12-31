import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import LanguageDropdown from '../reuseable/languagedropdown';
import { useTranslation } from 'react-i18next';

import NavLinkTag from './pages/nav-link';

interface NavLinkProps {
  label?: string;
  path?: string;
  title: string;
  dropdown?: NavLinkProps[];
  onClick?: () => void;
}

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
    setMenuVisible(false);
  };
  const currentPath = useLocation().pathname;
  console.log(currentPath);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
  const [clickedLabel, setClickedLabel] = useState(localStorage.getItem('label') || '');
  const [clickedNavLabel, setClickedNavLabel] = useState(localStorage.getItem('navlabel') || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [menu, setMenu] = useState<any>(false);

  const toggle = () => {
    setMenu(!menu);
  };


  const navLinks: NavLinkProps[] = [
    {
      title: "Home",
      label: `${t("Home")}`,
      path: '/',
      dropdown: undefined
    },
    {
      label: `${t("Interview")}`,
      title: 'Product-new',
      path: '/product-new',
      dropdown: [
        {
          label: `${t("serviced1")}`,
          title: 'Registeration1',
          path: '/registeration1'
        },
        {
          label: `${t("serviced1")}`,
          title: 'Registeration2',
          path: '/register'
        },
        {
          label: `${t("serviced2")}`,
          title: 'RegistrationCurd',
          path: '/registrationcurd'
        },
        {
          label: `${t("serviced1")}`,
          title: 'CoutryStateDDl',
          path: '/ddlcountrystate'
        },
        {
          label: `${t("serviced1")}`,
          title: 'RegistrationNew',
          path: '/registeration-new'
        },
        {
          label: `${t("serviced1")}`,
          title: 'Registration2',
          path: '/registeration2'
        },
        {
          label: `${t("serviced1")}`,
          title: 'TodoApp',
          path: '/todoapp'
        },
        {
          label: `${t("serviced1")}`,
          title: 'Netflix',
          path: '/netflix'
        },
        {
          label: `${t("helpd1")}`,
          title: 'Create-Form',
          path: '/interview/create-form'
        },
        {
          label: `${t("helpd2")}`,
          title: 'Google Calendar',
          path: '/interview/google-calendar'
        },
        {
          label: `${t("helpd2")}`,
          title: 'Ms Excel',
          path: '/interview/ms-excel'
        },
        {
          label: `${t("helpd2")}`,
          title: 'Google Auto text',
          path: '/interview/google-auto-text'
        },
        {
          label: `${t("helpd2")}`,
          title: 'Progress Bar',
          path: '/interview/progress-bar'
        },
        {
          label: `${t("helpd2")}`,
          title: 'EmbeddedPage',
          path: '/embedededpage'
        },
        {
          label: `${t("helpd2")}`,
          title: 'TodoAppJune',
          path: '/todoappjune'
        },
        {
          label: `${t("helpd2")}`,
          title: 'AppBootstrap',
          path: '/appbootstrap'
        },
      ]
    },
    {
      label: `${t("Service")}`,
      title: 'Service',
      path: '#',
      dropdown: [
        {
          label: `${t("serviced1")}`,
          title: 'Interview 1',
          path: '/form-create'
        },
        {
          label: `${t("serviced2")}`,
          title: 'Request Data Upload',
          path: '/service/data-upload'
        },
        {
          label: `${t("serviced2")}`,
          title: 'Request Data Upload',
          path: '/service/data-upload'
        },
        {
          label: `${t("serviced2")}`,
          title: 'Request Data Upload',
          path: '/service/data-upload'
        },
        {
          label: `${t("serviced2")}`,
          title: 'Request Data Upload',
          path: '/service/data-upload'
        },
      ]
    },

    {
      label: `${t("Datasets")}`,
      title: 'Datasets',
      path: '/datasets',
      dropdown: undefined
    },
    {
      label: `${t("Product")}`,
      title: 'Product',
      path: '/product',
      dropdown: undefined
    },
    {
      label: `${t("Contact-Us")}`,
      title: 'Contact Us',
      path: '/contact',
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
  // console.log(menuVisible);

  const closeDropdown = () => {
    setIsDropdownOpen(false);

  };
  const togglePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    // e.stopPropagation();
    if (menuVisible === true)
      setMenuVisible(!menuVisible);
  };
  const hidePopup = () => {
    if (menuVisible === true)
      setMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', hidePopup);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', hidePopup);
    };
  }, []);
  return (
    <div className=" justify-between bg-slate-100 shadow-md h-15 " onClick={togglePopup} >
      <div className="flex lg:items-start justify-between px-2 py-2 items-center">
        <img src="/asserts/img/mso-gap.png" className="md:w-40 w-20" alt="Logo" />

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
            <div onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
              <ul className="z-10  sm:right-5   " >

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
            </div>
          )}
        </div>
        <div className=''>
          <div className=" flex bg-site-color px-2 py-2  justify-center items-center" id="navbar" ref={dropdownRef} >
            <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0 mb-[3px] lg:flex-nowrap flex-wrap md:gap-0  gap-3 ">
              {/* <NavLinkTag title={link.title} path={link.path} dropdown={link.dropdown} onClick={link.onClick}/>  */}
              {navLinks.map((link, index) => (
                <>
                  <li key={index} onClick={() => handleItemtitleClick(link.title)}>
                    <NavLink
                      to={`${link.path}`}
                      className={`${currentPath === link.path && clickedLabel === link.title
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
                        className={` w-full absolute left-0 mt-[10px] bg-white shadow-lg z-10 grid grid-cols-3 gap-1 ${isDropdownOpen && clickedLabel === link.title ? '' : 'hidden'}`}
                      >
                        {link.dropdown.map((subNavLink, index) => (
                          // <div
                          //   key={index}
                          //   className={`relative item-start ${activeIndex === index && clickedNavLabel === subNavLink.title && 'hover:text-white  bg-black bg-opacity-50 text-white'} `}
                          // >
                          //   {subNavLink.path !== undefined && (
                          //     <section
                          //       className={`text-center ${clickedLabel === 'Service' ? 'mr-[200px]' : clickedLabel === 'Help' ? 'mr-10' : ''}  underline cursor-pointer py-3 text-red-500 `}
                          //       onClick={() => handleItemClick(subNavLink.title, index)} // Assuming you have a function to handle subitem clicks
                          //     >
                          //       <Link to={`${subNavLink.path}`} className={`p-2  text-black `}>
                          //         {subNavLink.label}
                          //       </Link>
                          //     </section>
                          //   )}
                          // </div>
                          <div className='text-left ml-40'>
                            <Link to={`${subNavLink.path}`} className={`p-2   hover:text-blue-800 hover:text-lg hover:font-bold`}>
                              {subNavLink.title}
                            </Link>
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
    </div>
  );
};

export default Header;
