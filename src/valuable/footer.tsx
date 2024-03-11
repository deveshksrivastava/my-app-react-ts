
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t}=useTranslation();
  return (
    <div className="fixed bottom-0  bg-[#f5d5d3] w-full text-center pb-3 border-b  border-gray-500 ">
      <h2 className="py-3 font-bold">
        {t("footer-heading")}
        <span className="text-[#82302b]"> {/* box.unicone@regional.co.uk */} abc@gmail.com </span>
      </h2>
    </div>
  );
};

export default Footer;
