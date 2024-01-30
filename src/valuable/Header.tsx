import { useEffect, useState } from 'react';
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';

import NavLinkTag from './pages/nav-link';

interface NavLinkProps {
  path?: string;
  title: string;
  dropdown?: NavLinkProps[];
  onClick?: () => void;
}

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
    setMenuVisible(false);
  };
  const currentPath = useLocation().pathname;
  const [clickedLabel, setClickedLabel] = useState(localStorage.getItem('label') || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navLinks: NavLinkProps[] = [
    {
      title: 'Home',
      path: '/',
      dropdown: undefined
    },
    {
      title: 'Service',
      path: '#',
      dropdown: [
        {
          title: 'Request Advanced Analytics Enviornment',
          path: '/service/advance-analytics-enviroment'
        },
        {
          title: 'Request Data Upload',
          path: '/service/data-upload'
        }
      ]
    },
    {
      title: 'Help',
      path: '#',
      dropdown: [
        {
          title: 'About US',
          path: '/help/about-dap'
        },
        {
          title: 'Report a US issue',
          path: '/help/report-a-dap-issue'
        },
        {
          title: 'FAQS',
          path: '/help/faqs'
        }
      ]
    },
    {
      title: 'Contact Us',
      path: '/contact',
      dropdown: undefined
    },
    {
      title: 'logout',
      onClick: handleLogout
    }
  ];
  const [menuVisible, setMenuVisible] = useState(false);

  const handleAvatarClick = () => {
    setMenuVisible(!menuVisible);
  };
  const handleItemClick = (title: string) => {
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
  console.log(clickedLabel);

  return (
    <div className=" justify-between bg-slate-100 shadow-md h-15 ">
      <div className="flex items-start justify-between px-2 py-2">
        <img src="/asserts/img/mso-gap.png" className="w-40" alt="Logo" />

        <div className="mr-4" onClick={handleAvatarClick}>
          <img
            src="https://e7.pngegg.com/pngimages/123/735/png-clipart-human-icon-illustration-computer-icons-physician-login-medicine-user-avatar-miscellaneous-logo.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
        {menuVisible && (
          <ul className="absolute   sm:right-5 right-0 mt-5 bg-white shadow-lg rounded-md">
            <li
              className="cursor-pointer py-2 px-4 hover:bg-gray-100 active:bg-gray-200"
              onClick={() => handleItemClick('Profile')}
            >
              <Link to="/profile">Profile</Link>
            </li>
            {/* <li className="cursor-pointer py-2 px-4" onClick={() => handleItemClick('Settings')}>
          Settings
        </li> */}
            <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 active:bg-gray-200" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        )}
      </div>
      <div className=" flex bg-site-color px-2 py-2  justify-center items-center" id="navbar">
        <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0 mb-[3px] ">
          {/* <NavLinkTag title={link.title} path={link.path} dropdown={link.dropdown} onClick={link.onClick}/> */}
          {navLinks.map((link, index) => (
            <li key={index} onClick={() => handleItemClick(link.title)}>
              <NavLink
                to={`${link.path}`}
                className={`${currentPath === link.path && clickedLabel === link.title ? 'border-b-[4px] p-2  border-b-zinc-100 hover:text-white  bg-black bg-opacity-50 text-white' : clickedLabel === link.title && currentPath !== link.path ? 'border-b-[4px] p-2  border-b-zinc-100 hover:text-white  bg-black bg-opacity-50 text-white' : 'p-3 '}`}
              >
                {link.title}
              </NavLink>
              {link.dropdown && (
                <div
                  className={`w-full absolute left-0 mt-2 bg-white shadow-lg z-10 ${isDropdownOpen && clickedLabel === link.title ? '' : 'hidden'}`}
                >
                  {link.dropdown.map((subNavLink, subIndex) => (
                    <>
                      <div key={subIndex} className="relative item-start">
                        {subNavLink.path !== undefined && (
                          <section
                            className={`text-center ${clickedLabel === 'Service' ? 'mr-[200px]' : clickedLabel === 'Help' ? 'mr-10' : ''}  underline cursor-pointer py-3 text-red-500`}
                            onClick={() => handleSubItemClick(subNavLink.title)} // Assuming you have a function to handle subitem clicks
                          >
                            <Link to={`${subNavLink.path}`} className={`p-2 text-black`}>
                              {subNavLink.title}
                            </Link>
                          </section>
                        )}
                      </div>
                    </>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Header;
