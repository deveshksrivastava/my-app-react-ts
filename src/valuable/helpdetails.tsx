import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePageTitle from '../utils/hooks/usePageTitle';
import LayoutWrapper from '../wrapper/layoutWrapper';
import MyDialog from '../reuseable/mydialog';
import { MdArrowForwardIos } from 'react-icons/md';
import MyButton from '../reuseable/mybutton';
import Breadcrumbs from '../utils/hooks/breadcrums';
import MyToggleCard from '../reuseable/mytogglecard';

const HelpServices = () => {
  const { id } = useParams();
  usePageTitle(id);
  const [aboutStatus, setAboutStatus] = useState(false);
  const handleAboutClick = () => {
    setAboutStatus(true);
  };
  const handleAboutClose = () => {
    setAboutStatus(false);
  };
  const [eligibleStatus, setEligibleStatus] = useState(false);
  const handleClick = () => {
    setEligibleStatus(true);
  };
  const handleClose = () => {
    setEligibleStatus(false);
  };

  useEffect(() => {
    // Check if the pathname meets the condition to open the modal
    if (id === 'about-us') {
        handleAboutClick()
    }
    if (id === 'report-a-us-issue') {
        handleAboutClick()
    }
  }, [id]);

  return (
    <>
      <Breadcrumbs currentLoc={id} />
      <LayoutWrapper
        coverImage={'/asserts/img/base.jpg'}
        layoutTitle=""
        sideContent
        subContentItem={[
          {
            path: `/help/about-us`,
            title: 'About US',
            toggleEnable: true
          },
          {
            path: `/help/report-a-us-issue`,
            title: 'Report a US issue',
            toggleEnable: true
          },
          {
            path: `/help/faqs`,
            title: 'FAQs'
          }
        ]}
      >
        {id?.includes('faqs') && (
          <>
            <div className="pl-10 pr-10">
              <div className="flex flex-col justify-items-center gap-[2rem] items-center w-full">
                <h4 className="text-3xl font-medium text-center text-site-color">Frequently Asked Questions</h4>
              </div>

              <div className="mt-20 ">
                {faqItem.map((item: any) => (
                  <MyToggleCard question={item.qs} answer={item.ans} />
                ))}
              </div>
            </div>
          </>
        )}
      {/* {id?.includes('about-dap') ? handleAboutClick():"no" } */}
      </LayoutWrapper>
      <MyDialog open={aboutStatus} onClose={handleAboutClose}>
          <div className="pl-5 pr-5 mt-2">
            <p className="text-site-color text-lg">You are being redirected</p>
            <p className="mt-4 mb-6 font-medium">
              ESO IT Portal will open in a new tab to report an issuse related to ZAP.
              <br />
              Do you want to proceed?
            </p>
          </div>
        </MyDialog>
    </>
  );
};
export default HelpServices;
export const faqItem = [
  {
    qs: 'What purpose does the National Grid ESO Data Analytics Platform (ZAP) serve and what are the benifits?',
    ans: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nihil ipsa non deleniti doloremque voluptatem aut laborum cumque distinctio, architecto, aspernatur quod eos ab consequatur dignissimos. Eaadipisci maiores ex?'
  },
  {
    qs: 'What purpose does the National Grid ESO Data Analytics Platform (ZAP) serve and what are the benifits?',
    ans: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nihil ipsa non deleniti doloremque voluptatem aut laborum cumque distinctio, architecto, aspernatur quod eos ab consequatur dignissimos. Eaadipisci maiores ex?'
  },
  {
    qs: 'What purpose does the National Grid ESO Data Analytics Platform (ZAP) serve and what are the benifits?',
    ans: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nihil ipsa non deleniti doloremque voluptatem aut laborum cumque distinctio, architecto, aspernatur quod eos ab consequatur dignissimos. Eaadipisci maiores ex?'
  },
  {
    qs: 'What purpose does the National Grid ESO Data Analytics Platform (ZAP) serve and what are the benifits?',
    ans: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nihil ipsa non deleniti doloremque voluptatem aut laborum cumque distinctio, architecto, aspernatur quod eos ab consequatur dignissimos. Eaadipisci maiores ex?'
  },
  {
    qs: 'What purpose does the National Grid ESO Data Analytics Platform (ZAP) serve and what are the benifits?',
    ans: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nihil ipsa non deleniti doloremque voluptatem aut laborum cumque distinctio, architecto, aspernatur quod eos ab consequatur dignissimos. Eaadipisci maiores ex?'
  }
];
