import React, { useEffect, useState,useRef } from "react";
import { get, map } from "lodash";
import i18n from "../i18n";
import languages from "../constant/languages";

interface Language {
  label: string;
  flag: string;
}


const LanguageDropdown: React.FC = React.memo(() => {
    
    
  const [selectedLang, setSelectedLang] = useState<any>("");
  const [menu, setMenu] = useState<any>(false);
 

  useEffect(() => {
    const currentLanguage = localStorage.getItem("I18N_LANGUAGE");
    setSelectedLang(currentLanguage || "");
  }, []);

  const changeLanguageAction = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("I18N_LANGUAGE", lang);
    setSelectedLang(lang);
    setMenu(false);
  };

  const toggle = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="relative" >
        <button
          onClick={toggle}
          className=" flex  items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="language-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <img
            src={get<Language>(languages, selectedLang)?.flag}
            alt="Language Flag"
            className="w-5 h-5 mr-2"
          />
          {get<Language>(languages, selectedLang)?.label}
          <svg
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 6.707a1 1 0 0 1 1.414 0L10 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {menu && (
          <div
            className="absolute z-10 right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            <div className="py-1 " role="none">
              {map(Object.keys(languages), (key: any) => (
                <button
                  key={key}
                  onClick={() => changeLanguageAction(key)}
                  className={`${
                    selectedLang === key
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  }  w-full px-4 py-2 text-sm text-left flex `}
                  role="menuitem"
                >
                  <img
                    src={get<Language>(languages, key)?.flag}
                    alt="Language Flag"
                    className="w-5 h-5 mr-5"
                  />
                  {get<Language>(languages, key)?.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
});

export default LanguageDropdown;
