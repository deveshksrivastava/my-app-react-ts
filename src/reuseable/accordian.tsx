import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
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
          <div className="text-gray-600">
            {isOpen ? (
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
          </div>
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
export default Accordion;
