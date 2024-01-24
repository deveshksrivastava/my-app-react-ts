import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/file_files.png';
interface BannerProps {
  path: string;
}
const ServiceBanner: React.FC<BannerProps> = ({ path }) => {
  console.log(path);

  return (
    <>
      <div
        className={`h-60 ${path === 'request-advanced-analytics-enviornment' ? 'bg-mso-logo' : 'bg-banner-logo'} w-300 flex  bg-center `}
      ></div>
      <div className="w-full flex ">
        <div className="w-[65%] max-w-4xl  relative m-auto pl-[14rem]">
          <div className="max-w-7xl items-center justify-center ">
            {path === 'request-advanced-analytics-enviornment' ? (
              <>
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
                  <div className="w-[200px] m-auto rounded p-2 items-start bg-red-500 text-center">
                    <span>Request for data upload </span>
                  </div>
                </div>
              </>
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
                  <div className="w-[200px] m-auto rounded p-2 items-start bg-red-500 text-center">
                    <span>Request for data upload </span>
                  </div>
                </div>
              </>
            ) : (
              <>''</>
            )}
          </div>
        </div>
        {/* side bar */}
        <div className="w-[25%] mt-10 hidden md:flex flex-col overflow-hidden underline gap-3 ">
          <Link to={'/service/request-advanced-analytics-enviornment'} className="flex items-center gap-2 m-0 ">
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
