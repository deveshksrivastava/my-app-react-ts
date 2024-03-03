import React from "react";
import moment, { Moment } from "moment";

interface Item {
  name: string;
  createdDate: string;
  description?: string;
}

interface CardProps {
  item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <article className="w-full p-3 hover:bg-gray-200 transition-colors duration-300">
      <div className="rounded text-red-700">{item?.name}</div>
      <div className="rounded text-black-800">
        {moment(item?.createdDate).format("DD/MM/YYYY")}
      </div>
      <div className="rounded text-black-800">{item?.description}</div>
    </article>
  );
};

export default Card;
