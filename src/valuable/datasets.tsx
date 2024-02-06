import React, { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { constants } from '../constant/constant';
import CustomButton from '../constant/customButton';
import EmptyView from '../constant/emptyview';
import TabBar from '../reuseable/tabbar';
import Breadcrumbs from './pages/breadcrums';

const DataSets = () => {
  const [csvData, setCsvData] = useState<string[][]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<string>('table');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        if (e.target) {
          const content = e.target.result as string;
          const rows = content.split(/\r?\n/);
          const data = rows.map(row => row.split(','));
          setCsvData(data);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleclick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  interface YourDataType {
    // Define the structure of your data
  }
  
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, data: YourDataType) => {
    e.preventDefault()
    console.log("select data",data);
  };
  return (
    <div>
      <Breadcrumbs />
      <div className="max-w-5xl w-full flex  h-screen m-auto ">
        {/* <div className=" w-[20%] h-screen bg-gray-100 ">List of filters</div> */}

        <div className="w-full  h-screen">
          <section className="p-10">
            <div
              className="flex items-center gap-1 p-2 rounded cursor-pointer bg-gray-300 w-fit "
              onClick={handleclick}
            >
              <FaPlus className=" fill-white bg-black" />
              &nbsp; Add File
              <input
                type="file"
                accept=".csv"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </section>
          <p className="py-2">total rows:{csvData && csvData.length}</p>
          <section className="py-1 flex gap-2 ">
           <button className='border p-2  sm:text-xs hover:bg-red-500 '>Add a Filter</button>
           <CustomButton
            classname='bg-red-400 p-2 text-custom-white sm:text-xs hover:bg-red-500'
            text='Summit'
           />
           <CustomButton
            classname='bg-gray-800  p-2 text-white sm:text-xs hover:bg-black'
            text='Reset'
           />
           <CustomButton
            classname='bg-gray-800  p-2 text-white sm:text-xs hover:bg-black'
            text='Query builder'
           />
          </section>
          <TabBar onChangeTab={handleTabChange} />
          {activeTab === 'table' && (
            <section className=" overflow-scroll h-[50vh]">
              <table className="min-w-full divide-y  divide-gray-200 ">
                <thead className="bg-gray-300">
                  {csvData.length === 0 ? (
                    ''
                  ) : (
                    <tr className=" w-full h-[60px] text-center ">
                      {csvData?.[0]?.map((header, index) => (
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          key={`header-${index}`}
                        >
                          {header}
                        </th>
                      ))}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Operations
                      </th>
                    </tr>
                  )}
                </thead>
                <tbody className=" divide-y divide-gray-500">
                  {csvData.length === 0 && (
                    <tr>
                      <td colSpan={4}>
                        <EmptyView
                          title={constants.SORRY}
                          discription={'No Users Found'}
                          bgcolor={'white'}
                          icon={'mdi mdi-account-multiple'}
                        ></EmptyView>
                      </td>
                    </tr>
                  )}
                  {csvData?.slice(1, 10)?.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {row.map((cell, cellIndex) => (
                        <td key={`cell-${rowIndex}-${cellIndex}`} className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{cell}</div>
                        </td>
                      ))}
                      <td className="px-6  whitespace-nowrap  text-sm font-medium">
                        <button className="text-green-600 hover:text-indigo-900 hover:bg-green-500 rounded border p-2"
                        onClick={(e)=>{handleEdit(e,row)}}
                        >
                          Edit
                        </button>{' '}
                        &nbsp;
                        <button className="text-red-600 hover:text-red-900 hover:bg-red-500 rounded border p-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
          {activeTab === 'chart' && <section className=""></section>}
        </div>
      </div>
    </div>
  );
};

export default DataSets;
