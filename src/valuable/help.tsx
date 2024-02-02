import { useState, useEffect, useRef } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import Banner from './pages/banner';
import Breadcrumbs from './pages/breadcrums';
import usePageTitle from '../utils/hooks/usePageTitle';
import LayoutWrapper from '../wrapper/layoutWrapper';
import MyCard from '../reuseable/card';
const Help = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // usePageTitle("help")
  // const pathname = location.pathname.split('/').filter(x => x);
  // const path = pathname.slice(1);
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpenHealth, setIsOpenHealth] = useState(false);
  // const openModalhealth = () => setIsOpenHealth(true);
  // const closeModalHealth = () => {
  //   // navigate('/');
  //   setIsOpenHealth(false);
  // };
  // const closeModal = () => {
  //   // navigate('/');
  //   setIsOpen(false);
  // };
  // const openModal = () => {
  //   setIsOpen(true);
  // };
  // // console.log(path);
  // const accordionData = [
  //   { title: 'Accordion 1', content: 'Content for Accordion 1' },
  //   { title: 'Accordion 2', content: 'Content for Accordion 2' },
  //   { title: 'Accordion 3', content: 'Content for Accordion 3' }
  // ];
  // useEffect(() => {
  //   // Check if the pathname meets the condition to open the modal
  //   if (path[0] === 'about-us') {
  //     openModal();
  //   }
  //   if (path[0] === 'report-a-us-issue') {
  //     openModalhealth();
  //   }
  // }, [location.pathname]);

  return (
    
          <LayoutWrapper coverImage={"/asserts/img/base.jpg"} layoutTitle="">

           
      {/* <Breadcrumbs />
      <Banner path={path[0]} accordionData={accordionData} />
      <Outlet />
      {isOpen && (
        <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="false"
        >
        <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <button type="button" className="absolute top-0 right-4" onClick={closeModal}>
                x
              </button>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg text-left leading-6 font-medium text-[#fd6a6a]" id="modal-title">
                      You are being redirected.
                    </h3>

                    <div className="mt-2 py-3">
                      <p className="text-sm text-gray-500">
                        ANC IT Page will open in a new tab to report an issue related to NHS.
                      </p>
                      <div className="leading"></div>
                      <p className="text-sm text-gray-500 text-left">Do you want to continue?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-300 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-64 inline-flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-site-color text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Proceed
                  <svg
                    className="ml-2 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center px-4 py-2 underline text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpenHealth && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <button type="button" className="absolute top-0 right-4" onClick={closeModalHealth}>
                x
              </button>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex ">
                  <div className="mt-3  sm:mt-0 sm:ml-4 ">
                    <h3 className="text-lg  leading-6 font-medium text-[#000000] text-center py-3" id="modal-title">
                      How to improve your health in your life?
                    </h3>
                    <div>Hygiene and Preventive Measures:</div>
                    <ul className="list-disc list-inside">
                      <li>First item</li>
                      <li>Second item</li>
                      <li>Third item</li>
                    </ul>
                    <div className="text-[red]">
                      Remember, it's essential to tailor these guidelines to your individual needs and consult with
                      healthcare professionals for personalized advice.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-300 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  className="w-64 inline-flex items-center justify-center rounded-md border-2 border-orange-500 shadow-sm px-4 py-2  text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModalHealth}
                >
                  Close
                  <svg
                    className="ml-2 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center  px-4 py-2 underline text-base font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={closeModalHealth}
                >
                  Contact Nhs Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
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
  );
};

export default Help;
