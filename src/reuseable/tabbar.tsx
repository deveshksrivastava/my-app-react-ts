import React, { useEffect, useState } from "react";

interface TabBarProps {
  onChangeTab: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ onChangeTab }) => {
  const [activeTab, setActiveTab] = useState<string>("table");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onChangeTab(tab);
  };

  return (
    <div className="py-2 w-[150px] flex  rounded gap-0 ">
      <button className={`${activeTab === 'table'&& 'bg-gray-100 border-b-2 border-solid border-red-500'} w-[100px] `} onClick={() => handleTabChange("table")}>Table</button>
      <button className={`${activeTab === 'chart'&& 'bg-gray-100 border-b-2 border-solid border-red-500'} w-[100px] `}  onClick={() => handleTabChange("chart")}>Chart</button>
    </div>
  );
};

export default TabBar;