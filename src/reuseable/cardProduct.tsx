import React, { MouseEventHandler } from "react";
import moment, { Moment } from "moment";

interface Item {

  name: string;
  createdDate: string;
  description?: string;
}


interface CardProps {
  item?: Item;
  index?: number;
  onclick?: (item: Item, index: number) => void;

}

const Card: React.FC<CardProps> = ({ item,index,onclick }) => {
  const handleClick = () => {
    if (item && onclick) {
      onclick(item, index || 0); // Providing a default value for index
    }
  };
  return (
    <article className="w-full sm:w-[80%] p-3 hover:bg-gray-200 transition-colors duration-300"  onClick={handleClick}>
    <div className="rounded text-red-700">{item?.name}</div>
    <div className="rounded text-black-800">
      {moment(item?.createdDate).format("DD/MM/YYYY")}
    </div>
    <div className="rounded text-black-800">{item?.description}</div>
    <hr className="mt-4"/>
    
  </article>
  );
};

export default Card;
