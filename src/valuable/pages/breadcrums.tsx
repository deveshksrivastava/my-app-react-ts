import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  console.log(pathnames);

  return (
    <div>
      <nav className="flex w-full" aria-label="Breadcrumb">
        {/* <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"> */}
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
