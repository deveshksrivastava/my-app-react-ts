import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { relavent } from "./data/product"; // Assuming the type of relavent is RelevantItem[]

interface RelevantItem {
    id: number;
    title: string;
  }
interface MostRelevantProps {
  handleSelect: (item: RelevantItem) => void;
}

const MostRelevant: React.FC<MostRelevantProps> = ({ handleSelect }) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className="relative inline-block ml-auto">
      <div
        onClick={() => setExpand(!expand)}
        className="cursor-pointer flex items-center gap-2"
      >
        <div>{"Most relevant"}</div>
        <div>
          {expand ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </div>
      </div>
      {expand && (
        <div className="absolute top-8 mt-2 w-40 bg-white border rounded shadow-md z-10">
          {relavent.map((item: RelevantItem, index: number) => ( // Change 'relavent' to 'relavent' in this line
            <div
              key={index}
              onClick={() => {
                setExpand(false);
                handleSelect(item);
              }}
              className="p-2 hover:bg-gray-100 border-b-2 cursor-pointer"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MostRelevant;
