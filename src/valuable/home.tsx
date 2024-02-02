import React from 'react';
import MyCard from '../reuseable/card';
import LayoutWrapper from '../wrapper/layoutWrapper';
const Home = () => {
  return <>
    <LayoutWrapper
     coverImage={'/asserts/img/bg.jpg'}
     layoutTitle="Welcome to National Grid ESO Data & Analytics Platform"
     >
    <div className='flex flex-col justify-items-center gap-[2rem] items-center w-full'>
          <h4 className="text-4xl font-medium text-center">Accelerate your Data & Analytics Process</h4>
          <div className="mt-2 flex gap-6 flex-col">
            <MyCard
              cardImg="/asserts/img/analytics.png"
              cardContent={
                <>
                  <p className="text-site-color">Request Advanced Analytics Enviroment</p>
                  <p>For requesting AAE that enables you to embed AI.</p>
                </>
              }
            />
            <div className=" border-t-2" />
            <MyCard
              cardImg="/asserts/img/analytics.png"
              cardContent={
                <>
                  <p className="text-site-color">Request for Data Upload</p>
                  <p>For requesting data upload into ZAP on an adhoc basis.</p>
                </>
              }
            />
          </div>
          </div>
    </LayoutWrapper>
  </>
};

export default Home;
