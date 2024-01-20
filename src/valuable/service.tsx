import React from 'react';
import Breadcrumbs from './pages/breadcrums';
import { useLocation } from 'react-router-dom';
import ServiceBanner from './pages/servicebanner';


const Services = () => {
  const location=useLocation()
  const pathname = location.pathname.split('/').filter(x => x);
  const path=pathname.slice(1)
  console.log(path);
  
  return (
    <div className="min-h-[calc(100vh-24vh)] w-full">
       <Breadcrumbs />
      <ServiceBanner path={path[0]} />
    </div>
  );
};

export default Services;
