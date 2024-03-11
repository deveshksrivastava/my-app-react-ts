import React from 'react';
import MyCard from '../reuseable/card';
import LayoutWrapper from '../wrapper/layoutWrapper';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return <>
    <LayoutWrapper
     coverImage={'/asserts/img/bg.jpg'}
    //  layoutTitle="Welcome to National Grid ESO Data & Analytics Platform"
    layoutTitle={t("layoutTitle")}
     >
    <div className='flex flex-col justify-items-center gap-[2rem] items-center w-full'>
          <h4 className="text-4xl font-medium text-center">`{t("mycardtitle")}`</h4>
          <div className="mt-2 flex gap-6 flex-col">
            <MyCard
              cardImg="/asserts/img/analytics.png"
              cardContent={
                <>
                  <p className="text-site-color">{t("mycardtitle")}</p>
                  <p>{t("mycarddesc")}</p>
                </>
              }
            />
            <div className=" border-t-2" />
            <MyCard
              cardImg="/asserts/img/analytics.png"
              cardContent={
                <>
                  <p className="text-site-color">{t("mycrt1")}</p>
                  <p>{t("mycrtp1")}</p>
                </>
              }
            />
          </div>
          </div>
    </LayoutWrapper>
  </>
};

export default Home;
