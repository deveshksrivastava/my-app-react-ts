import React, { useState } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { sideFilterData, product } from "../valuable/data/product";

interface Group {
  id: number;
  groupName: string;
  children?: Child[];
}

interface Child {
  id: number;
  childName: string;
  children?: Child[];
}

const SidePannel: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number[]>([]);
  const sideFilterData = [
    {
      id: 1,
      groupName: "Group 1",
      children: [
        {
          id: 11,
          childName: "Child 1.1",
          children: [
            {
              id: 111,
              childName: "Grandchild 1.1.1",
            },
            {
              id: 112,
              childName: "Grandchild 1.1.2",
            },
          ],
        },
        {
          id: 12,
          childName: "Child 1.2",
        },
      ],
    },
    {
      id: 2,
      groupName: "Group 2",
      children: [
        {
          id: 21,
          childName: "Child 2.1",
        },
        {
          id: 22,
          childName: "Child 2.2",
          children: [
            {
              id: 221,
              childName: "Grandchild 2.2.1",
            },
          ],
        },
      ],
    },
  ];
  const toggleId = (childId: number): void => {
    setExpandedId((prevExpandedId) => {
      if (prevExpandedId.includes(childId)) {
        return prevExpandedId.filter((child) => child !== childId);
      } else {
        return [...prevExpandedId, childId];
      }
    });
  };

  const renderChildren = (children: Child[] | undefined, childId: number): JSX.Element | null => {
    if (!children || children.length === 0 || !expandedId.includes(childId)) {
      return null;
    }

    return (
      <div>
        {children.map((child: Child, index: number) => (
          <div
            key={index}
            className="flex items-center gap-2 flex-col w-full hover:bg-gray-200"
          >
            <div className="flex items-center gap-2 w-full border-b-2 py-2">
              <div onClick={() => toggleId(child.id)}>
                {child.children && child.children.length > 0 ? (
                  expandedId.includes(child.id) ? (
                    <CgMathMinus size={15} />
                  ) : (
                    <CgMathPlus size={15} />
                  )
                ) : (
                  <div className="w-4" />
                )}
              </div>
              <div>{child.childName}</div>
              <input type="checkbox" className="ml-auto" />
            </div>
            {child.children && renderChildren(child.children, child.id)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col row-gap-1">
        
      {sideFilterData.map(({ id, groupName, children }: Group, index: number) => (
        <div key={index}>
          <div className="w-full p-3 bg-red-800 text-white flex items-center">
            <div>{groupName}</div>
            <div
              onClick={() => toggleId(id)}
              className="cursor-pointer ml-auto"
            >
              {expandedId.includes(id) ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </div>
          </div>
          {expandedId.includes(id) &&
            renderChildren(children, id)}
        </div>
      ))}
    </div>
  );
};

export default SidePannel;
