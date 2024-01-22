import React,{useState} from 'react';
import { Link } from 'react-router-dom';
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
        <div
          className="flex items-center justify-between px-4 py-2 cursor-pointer"
          onClick={toggleAccordion}
        >
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


const Banner:React.FC<BannerProps> = ({path,accordionData}) => {
  console.log(path);

  return (
    <>
      <div className={`h-60 ${path ==='faqs' ? 'bg-mso-logo' : 'bg-banner-logo'} w-300 flex  bg-center `}></div>
      <div className="w-full flex ">
        <div className="w-[65%] max-w-4xl  relative m-auto  sm:pl-[14rem]">
          <div className="max-w-7xl items-center justify-center ">
            {path === 'faqs' && (
              <>
                <div className="flex items-center  justify-center ">
                  <div className="absolute  justify-center w-full bg-white    p-10 mb-10 text-center">
                    <h1 className="text-2xl font-bold  ">Frequntly Asked Questions</h1>
                  </div>

                </div>
                <div className="px-10 py-10 ">
                  
                  <div className=" py-3   justify ">

                    {accordionData.map((item, index) => (
                      <Accordion key={index} title={item.title} content={item.content} />
                    ))}
                  </div>
                  <div className='w-[200px] m-auto rounded p-2 items-start bg-red-500 text-center'>

                  <span>Request for data upload </span>
                  </div>
                </div>
              </>
            )}

          </div>
         
        </div>
        {/* side bar */}
        <div className="w-[25%] mt-10 hidden md:flex flex-col overflow-hidden underline gap-3 ">
            <Link to={'/help/about-dap'} className="flex items-center gap-2 m-0 ">
              <img src={logo} className="w-3 h-4" alt='scr'/>
              About Dap
            </Link>
            <Link to={'/help/report-a-dap-issue'} className="flex items-center gap-2 m-0 ">
              <img src={logo} className="w-3 h-4" alt='scr'/>
              Report a DAP issue
            </Link>
            <Link to={'/help/faqs'} className="flex items-center gap-2 m-0 ">
              <img src={logo} className="w-3 h-4" alt='scr'/>
              FAQs
            </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
