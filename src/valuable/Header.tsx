import { Link } from 'react-router-dom';

import NavLinkTag from './pages/nav-link';
// const navLinks = [
//   {
//     title: 'Home',
//     path: '/'
//   },
//   {
//     title: 'Service',
//     path: '/service'
//   },
//   {
//     title: 'Help',
//     path: '/help'
//   },
//   {
//     title: 'Contact Us',
//     path: '/contact'
//   }
// ];

interface NavLinkProps {
  path: string;
  title: string;
  dropdown?: NavLinkProps[];
}
const navLinks:NavLinkProps[] = [
  {
    title: 'Home',
    path: '/',
    dropdown:undefined,
  },
  {
    title: 'Service',
    path: '/service/:',
    dropdown: [
      {
        title: 'Request Advanced Analytics Enviornment',
        path: '/service/request-advanced-analytics-enviornment'
      },
      {
        title: 'Request Data Upload',
        path: '/service/request-data-update',
      }
    ]
  },
  {
    title: 'Help',
    path: '/help/:abc',
    dropdown: [
      {
        title: 'About DAP',
        path: '/help/about-dap'
      },
      {
        title: 'Report a DAP issue',
        path: '/help/request-a-dap-issue'
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
    dropdown: undefined,
  }
];
const Header = () => {



  return (
    <div className=" justify-between bg-slate-100 shadow-md h-15 ">
      <div className="flex items-start max-w-7xl px-2 py-2">
        <img src="/asserts/img/logo.png" className="w-20" alt="Logo" />
      </div>
      <div className=" flex bg-red-400 px-2 py-2  justify-center items-center" id="navbar">
        <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0 mb-[3px] ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLinkTag  title={link.title} path={link.path} dropdown={link.dropdown} />
            </li>
          ))}
        </ul>
        </div>

      <div>
        {/* <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Projects
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
              </div>
            </li>
          </ol>
        </nav> */}
      </div>
    </div>
  );
};

export default Header;
