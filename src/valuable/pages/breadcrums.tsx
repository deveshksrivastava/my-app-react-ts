import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  // console.log(pathnames);

  return (
    <div>
      <nav className="flex w-full" aria-label="Breadcrumb">
        {/* <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"> */}
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
        </a>
        <li className="inline-flex items-center">
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <span key={routeTo}>
                <Link to={routeTo} className="no-underline cursor-pointer text-red-500">
                  {name}
                </Link>
                {!isLast && <span className="mx-2">/</span>}
              </span>
            );
          })}
        </li>
        {/* </ol> */}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
