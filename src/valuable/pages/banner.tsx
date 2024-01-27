import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomButton from '../../constant/customButton';
import logo from '../../images/file_files.png';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto mt-8">
      <div className="border border-gray-300 rounded">
        <div className="flex items-center justify-between px-4 py-2 cursor-pointer" onClick={toggleAccordion}>
          <div className="font-semibold">{title}</div>
          <div className="text-gray-600">{isOpen ? '▲' : '▼'}</div>
        </div>
        {isOpen && (
          <div className="border-t border-gray-300 px-4 py-2">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};
interface BannerProps {
  path: string;
  accordionData: AccordionProps[];
}

const Banner: React.FC<BannerProps> = ({ path, accordionData }) => {
  console.log(path);

  return (
    <>
      <div className={`sm:h-60 h-40 ${path === 'faqs' ? 'bg-mso-logo' : 'bg-banner-logo'} w-300 flex  bg-center `}></div>
      <div className="w-full flex ">
        <div className="sm:w-[65%] w-[90%] sm:max-w-4xl  relative m-auto  sm:pl-[14rem]">
          <div className="max-w-7xl items-center justify-center ">
            {path === 'faqs' && (
              <>
                <div className="flex items-center  justify-center ">
                  <div className="absolute  justify-center w-full bg-white    p-10 mb-10 text-center">
                    <h1 className="text-2xl font-bold  ">Frequntly Asked Questions</h1>
                  </div>
                </div>
                <div className="py-10 ">
                  <div className=" py-3   justify ">
                    {accordionData.map((item, index) => (
                      <Accordion key={index} title={item.title} content={item.content} />
                    ))}
                  </div>
                  <CustomButton
                    text="Request for data upload"
                    classname="flex sm:w-1/2 m-auto justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    icon={<FaAngleRight /> }
                  />
                </div>
              </>
            )}
          </div>
        </div>
        {/* side bar */}
        <div className="w-[25%] mt-10 hidden md:flex flex-col overflow-hidden underline gap-3 ">
          <Link to={'/help/about-us'} className="flex items-center gap-2 m-0 ">
            <img src={logo} className="w-3 h-4" alt="scr" />
            About US
          </Link>
          <Link to={'/help/report-a-us-issue'} className="flex items-center gap-2 m-0 ">
            <img src={logo} className="w-3 h-4" alt="scr" />
            Report a US issue
          </Link>
          <Link to={'/help/faqs'} className="flex items-center gap-2 m-0 ">
            <img src={logo} className="w-3 h-4" alt="scr" />
            FAQs
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
