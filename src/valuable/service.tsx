import React, { useState } from 'react';
import Breadcrumbs from './pages/breadcrums';
import { Link, useLocation, useParams } from 'react-router-dom';
import ServiceBanner from './pages/servicebanner';
import LayoutWrapper from '../wrapper/layoutWrapper';
import MyCard from '../reuseable/card';
import { useTranslation } from 'react-i18next';

const Services = () => {
  // const [location, setLocation] = useState<string | null>(null);
  // const loc=useLocation()
  // const pathname = loc.pathname.split('/').filter(x => x);
  // const path=pathname.slice(1)
  // console.log(path);
  // const { id } = useParams();
  // setLocation(pathname[0]);
  const {t}=useTranslation();
  return (
    // <div className="min-h-[calc(100vh-24vh)] w-full">
      //  <Breadcrumbs />
    //   <ServiceBanner path={path[0]} />
    // </div>
    <>
    
    <LayoutWrapper coverImage={"/asserts/img/base.jpg"} layoutTitle="">
          <div className='flex flex-col justify-items-center gap-[2rem] items-center w-full'>
          <h4 className="text-4xl font-medium text-center">`{t("mycardtitle")}`</h4>
          <div className="mt-2 flex gap-6 flex-col">
            <MyCard
              cardImg="/asserts/img/analytics.png"
              cardContent={
                <>
                  <p className="text-site-color">`{t("serviced1")}`</p>
                  <p>`{t("mycarddesc")}`</p>
                </>
              }
            />
            <div className=" border-t-2" />
            <MyCard
              cardImg="/asserts/img/analytics.png"
              cardContent={
                <>
                  <p className="text-site-color">`{t("mycrt1")}`</p>
                  <p>`{t("mycrtp1")}`</p>
                </>
              }
            />
          </div>
          </div>
    </LayoutWrapper>
    </>
  );
};

export default Services;
