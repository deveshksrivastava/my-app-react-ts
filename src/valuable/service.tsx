import React from 'react';
import Banner from './pages/banner';
import Breadcrumbs from './pages/breadcrums';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location=useLocation()
  const pathname = location.pathname.split('/').filter(x => x);
  const path=pathname.slice(0,2).join('/')
  console.log(pathname,path);
  
  return (
    <div className="min-h-[calc(100vh-24vh)] w-full">
       <Breadcrumbs />
      <Banner  />
    </div>
  );
};

export default Services;
