import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomButton from '../../constant/customButton';
import logo from '../../images/file_files.png';
interface BannerProps {
  path: string;
}
const ServiceBanner: React.FC<BannerProps> = ({ path }) => {
  console.log(path);

  return (
    <>
      <div
        className={`sm:h-80  h-40 ${path === 'request-advanced-analytics-enviornment' ? 'bg-mso-logo' : 'bg-banner-logo'} w-300 flex  bg-center  `}
      ></div>
      <div className="w-full flex ">
        <div className="sm:w-[65%] sm:max-w-4xl w-[90%]  relative m-auto sm:pl-[14rem]">
          <div className="max-w-7xl  items-center justify-center ">
            {path === 'request-advanced-analytics-enviornment' ? (
              <div className='gap-3 flex flex-col'>
                <div className="flex items-center  justify-center ">
                  <div className="absolute  justify-center w-full bg-white    p-10 mb-20 text-center">
                    <h1 className="text-2xl font-bold  ">Advanced Analytics Subject(AAS)</h1>
                  </div>
                  <img className="absolute  items-center " src={logo} alt="logo" />
                </div>
                <div className="px-10 py-4 ">
                  <div className="justify ">
                    <h2 className="font-bold ">
                      Download Paragraph Completion Questions PDF for Bank Exams 2022 at Smartkeeda?
                    </h2>
                    <p>
                      Paragraph Completion is the integral part of the Verbal Reasoning Section asked in all the major
                      competitive examinations. In Paragraph Completion Questions, a paragraph is generally given by the
                      author in which some statements will be missing which has to be answered by the students.
                    </p>
                  </div>
                  <div className=" justify ">
                    <h2 className="font-bold py-1">
                      Download Paragraph Completion Questions PDF for Bank Exams 2022 at Smartkeeda?
                    </h2>
                    <p>
                      Paragraph Completion is the integral part of the Verbal Reasoning Section asked in all the major
                      competitive examinations. In Paragraph Completion Questions, a paragraph is generally given by the
                      author in which some statements will be missing which has to be answered by the students.
                    </p>
                  </div>
                  <CustomButton
                    text="Request for data upload"
                    classname="flex sm:w-1/2 m-auto justify-center items-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    icon={<FaAngleRight /> }
                  />
                </div>
              </div>
            ) : path === 'request-data-update' ? (
              <>
                <div className="flex items-center  justify-center ">
                  <div className="absolute  justify-center w-full bg-white  p-10 mb-20 text-center">
                    <h1 className="text-2xl font-bold  ">Request for Data Upload</h1>
                  </div>
                  <img className="absolute  items-center " src={logo} alt="logo" />
                </div>
                <div className="px-10  py-4 ">
                  <div className="justify ">
                    <h2 className="font-bold">
                      Download Paragraph Completion Questions PDF for Bank Exams 2022 at Smartkeeda?
                    </h2>
                    <p>
                      Paragraph Completion is the integral part of the Verbal Reasoning Section asked in all the major
                      competitive examinations. In Paragraph Completion Questions, a paragraph is generally given by the
                      author in which some statements will be missing which has to be answered by the students.
                    </p>
                  </div>
                  <div className=" py-1 justify ">
                    <h2 className="font-bold ">
                      Download Paragraph Completion Questions PDF for Bank Exams 2022 at Smartkeeda?
                    </h2>
                    <p>
                      Paragraph Completion is the integral part of the Verbal Reasoning Section asked in all the major
                      competitive examinations. In Paragraph Completion Questions, a paragraph is generally given by the
                      author in which some statements will be missing which has to be answered by the students.
                    </p>
                  </div>
                  <CustomButton
                    text="Request for data upload"
                    classname="flex sm:w-1/2 m-auto justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    icon={<FaAngleRight /> }
                  />
                </div>
              </>
            ) : (
              <>''</>
            )}
          </div>
        </div>
        {/* side bar */}
        <div className="sm:w-[25%] mt-10 hidden md:flex flex-col overflow-hidden underline gap-3 ">
          <Link to='/service/request-advanced-analytics-enviornment' className="flex items-center gap-2 m-0 ">
            <img src={logo} className="w-3 h-4" alt="scr" />
            request-advanced-analytics-enviornment
          </Link>
          <Link to={'/service/request-data-update'} className="flex items-center gap-2 m-0 ">
            <img src={logo} className="w-3 h-4" alt="scr" />
            request-data-update
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
