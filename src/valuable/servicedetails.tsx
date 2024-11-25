import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import usePageTitle from '../utils/hooks/usePageTitle';
import LayoutWrapper from '../wrapper/layoutWrapper';
import MyDialog from '../reuseable/mydialog';
import { MdArrowForwardIos } from 'react-icons/md';
import MyButton from '../reuseable/mybutton';
import Breadcrumbs from '../utils/hooks/breadcrums';

const ServiceDetails = () => {
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

  console.log('path-', id);
  return (
    <>
      <Breadcrumbs currentLoc={id} />

      <LayoutWrapper
        coverImage={'/asserts/img/base.jpg'}
        layoutTitle=""
        sideContent
        subContentItem={[
          {
            path: `/service/advance-analytics-enviroment`,
            title: 'Request Advanced Analytics Enviroment',
            img: '/asserts/img/analytics.png'
          },
          {
            path: `/service/data-upload`,
            title: 'Request Data Upload',
            img: '/asserts/img/analytics.png'
          }
        ]}
      >
        {id?.includes('advance-analytics-enviroment') && (
          <div className="pl-10  pr-10 ">
            <div className="flex flex-col justify-items-center gap-[2rem] items-center w-full">
              <h4 className="text-3xl font-medium text-center text-site-color  ">Advance Analytics Environment(AAE)</h4>
              <figure>
                <img src="/asserts/img/analytics.png" className="w-[3rem]" alt="" />
              </figure>
            </div>

            <div className="mt-10 ">
              <strong>What is an AAE?</strong>
              <p className=" text-justify ">
                The purpose of an Advance Analytics(AEE) platform is to provide a capabillity with all the tools you
                need supported by National Grid ESO to do machine learning and articifical intelligence.
                <br />
                <br />
                AEE is a specific environment that has python libraries,machine learning capabilities, that is
                designed for specific business team, i.e Future Energy Scenario,Artificial intelligence Centre of
                Excellence. There are specific componenets that have been built for their needs. So any team that want
                to do machine learning or needs an artificial intelligence capabillity can request it. it is a
                script-based system that runs the whole environment.
                <br />
                <br />
                Stakeholders such as data scientists, analysts, modellers who need an ARR can request and advanced
                analytics environment for their analyticial work, which could be building and testing predictive
                models. running and testing machine learning AI models and so on.
                <br />
                <br />
                <strong>How do i request for an AAE?</strong>
                <br />
                You can click on the request button below which will xxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </p>
            </div>
            <div className="flex justify-center lg:mx-[10rem] 2xl:mx-[20rem] mt-10">
              <MyButton
                classname="w-full gap-2 flex items-center justify-center border p-2 bg-site-color text-custom-white"
                label="Request AAE" icon={<MdArrowForwardIos />} onClick={handleAboutClick} />
            </div>
          </div>
        )}
        {id?.includes('data-upload') && (
          <div className="pl-10 pr-10">
            <div className="flex flex-col justify-items-center gap-[2rem] items-center w-full">
              <h4 className="text-3xl font-medium text-center text-site-color">Request for Data Upload</h4>
              <figure>
                <img src="/asserts/img/analytics.png" className="w-[3rem]" alt="" />
              </figure>
            </div>

            <div className="mt-10">
              <strong>What data can request data upload?</strong>
              <br />
              <p className="mt-2 text-justify">
                The Data and Analytics Platform's(ZAP) mission is to facilitate better data science and analytics by
                making useful data easily discoverable and accessable to the organization. ZAP will host datasets
                based on the ellgibility criteria given in the link below.
                <br />
                <b className=" text-red-600 font-light">
                  You can request a dataset to be considered for inclusion in the Data and Analytics Platform using
                  the button below.
                </b>
                <br />
                Please read the information below carefully before making a request to add Data to ZAP.
                <br />
                <br />
              </p>
              <div onClick={handleClick}>
                <p className=" text-site-color underline cursor-pointer">
                  Click here to view ZAP Data Upload Eligibility criteria for datasets
                </p>
              </div>
              <br />
              <div onClick={handleClick}>
                <p className=" text-site-color underline cursor-pointer">
                  Click here to know more about the process of getting a dataset included in ZAP
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:mx-[10rem] 2xl:mx-[20rem] mt-10">
              <MyButton label="Request for Data Upload"
                classname="w-full gap-2 flex items-center justify-center border p-2 bg-site-color text-custom-white"
                icon={<MdArrowForwardIos />} onClick={handleAboutClick} />
            </div>
          </div>
        )}
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
      <MyDialog open={eligibleStatus} onClose={handleClose} eligibleType>
        <div className="mt-10 p-10">
          <p className=" font-semibold">Do you think your dataset meets the eligibility criteria listed below?</p>
          <div className="mt-5 ">
            <p>Dataset will be eligible for inclusion in ZAP if they meet some or all of the following criteria:</p>
            <br />
            <br />
            <ul className="list-disc">
              <li>
                The Dataset is not required for business critical real-time operation use(ZAP is not currently built
                to handle and share real-time data for business critical processes)
              </li>
              <li>
                The Dataset needs to be shared with more than on business unit or team for Analytics or Data Science
                purposes
              </li>
              <li>The Dattaset is a siurce dataset used in downstream processes</li>
              <li>The Dataset is not already avalilable in ZAP</li>
              <li>
                The Dataset is a final output from a data science/analytic mode! that is used by the organisation
              </li>
              <li>
                The Dataset is not a part-processed version of a source file (for example, an existing source file
                with some fields added or edited to make it suitable for downstream processing)
              </li>
            </ul>
            <br />
            <br />
            <p className=" text-red-600">
              Datasets that do not meet the eligibility criteria will be rejected by the data governance team. if
              there is a critical business need please contact the ZAP team using the link below and a member of the
              ZAP team will assist you.
            </p>
          </div>
        </div>
      </MyDialog>
    </>
  )
}

export default ServiceDetails;