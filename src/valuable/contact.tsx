import React, { useState } from 'react';

const Contact = () => {
  return (
    <div className='min-h-[calc(100vh-24vh)]'>
      <div className=" bg-[#e3dfdf] w-full text-center pb-3  ">
        <h2 className="py-5 font-bold">
          Do you want to get in touch with us ? feel free to email us at
          <span className="text-[#82302b] underline ml-2">.box.DAPmanagers@nationalgrideso.com </span>
        </h2>
      </div>
      Contact phage
      <Modal />
    </div>
  );
};

export default Contact;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHealth, setIsOpenHealth] = useState(false);
  const openModalhealth = () => setIsOpenHealth(true);
  const closeModalHealth = () => setIsOpenHealth(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Modal
      </button>

      <button onClick={openModalhealth} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Modal for Helath
      </button>

      {isOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

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
      )}
    </>
  );
};
