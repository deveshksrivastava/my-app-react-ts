import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
interface ToggleCardProps {
  question: string;
  answer: string;
}
const MyToggleCard: React.FC<ToggleCardProps> = ({ question, answer }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div >
       <h2>
        <button
          type="button"
          onClick={handleClick}
          className="flex items-center   w-full py-5 font-small rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-2"
          aria-expanded={toggle}
        >
          <span>{question}</span>
          {toggle ? (
            <MdKeyboardArrowUp
              style={{
                fontSize: '2rem'
              }}
            />
          ) : (
            <MdKeyboardArrowDown
              style={{
                fontSize: '2rem'
              }}
            />
          )}
        </button>
      </h2>
      {toggle && (
        <div  className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default MyToggleCard;
