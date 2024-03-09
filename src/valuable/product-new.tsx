import React, { useState } from 'react';
import Breadcrumbs from './pages/breadcrums';
import Card from '../reuseable/cardProduct';
import { CiSearch } from 'react-icons/ci';
import { product } from './data/product';
import MostRelevant from './mostRelavent';
import { TbFilterEdit } from "react-icons/tb";
import { BsSliders } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { TbDatabaseSearch } from "react-icons/tb";
import { FaFileUpload } from 'react-icons/fa';
import SideBarCard from './sidebarcard';
interface Item {
  name: string;
  createdDate: string;
  description?: string;
  fileType?: string;
  groupName?: string;
  tags?: object;
  index?: number;
  handleCardClick?: (item: Item, index: number) => void;
  // onclick?: (item: Item, index: number) => void;
  // Add any other properties here
}

const ProductNew = () => {
  const PAGE_SIZE = 3;
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Item[]>(product);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [id, setId] = useState<number>(0);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const paginatedData = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  console.log(paginatedData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handlePageChange(1);
    if (!e.target.value) {
      setFilteredData(product);
    }
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    const searchTerm = searchValue.toLowerCase();
    const filteredResults = product.filter(item => {
      return item.name.toLowerCase().includes(searchTerm);
    });

    setFilteredData(filteredResults);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelect = (item: { title: string }): void => {
    let sortedData: Item[] = [];
    if (item.title === 'Name') {
      sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
    } else if (item.title === 'Date') {
      sortedData = [...filteredData].sort(
        (a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
      );
    }
    setFilteredData(sortedData);
  };

  const handleCardClick = (item: Item, id: number) => {
    // console.log(item,id);
    setId(id);
    setSelectedItem(item);
    console.log(selectedItem);
  };

  return (
    <>
      <Breadcrumbs />
      <div className="flex overflow-x-auto     justify-around    items-center  lg:px-10 lg:py-5 mt-3  search-shadow  lg:w-4/6 m-auto w-full h-full gap-10 bg-gray-100">
        <div className="flex flex-row  items-center w-full" onKeyDown={handleKeyDown} tabIndex={0}>
          <input type="text" placeholder='Search Any of your query' className="border-2 p-2  ml-1 h-14  flex-1" onChange={handleChange} value={searchValue} />
          <div className="bg-red-700 p-3 hover:bg-red-600   cursor-pointer h-14 mr-1" onClick={handleSearch}>
            <CiSearch color="white" size={20} />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <TbFilterEdit />
            <span>Filter</span>
        </div>
        <div className='flex flex-col items-center'>
          <BsSliders />
            <span>Short</span>
        </div>
        <div className='flex flex-col items-center'>
            <IoMdAdd />
            <span>View</span>
        </div>  
      </div>
    <div className='flex '>
    <div className='absolute mt-5 p-3 gap-4 float-end lg:flex  hidden search-shadow left-20  flex-col '>
        <SideBarCard  st='text-2xl gap-3 items-center flex'/>
    </div>
   
      <div className=' lg:w-4/6 m-auto w-full bg-gray-100 mt-5 pb-20 search-shadow'>
      <section className="w-full flex flex-wrap">
                {paginatedData?.map((item, index) => (
                  <div className='flex w-full justify-between '>
                    {/* {JSON.stringify(item)} */}
                    <Card item={item} key={index} onclick={()=>{handleCardClick(item,index)}}/>
                    {/* <article className="w-full sm:w-[80%] p-3 hover:bg-gray-200 transition-colors duration-300" onClick={()=>{handleCardClick(item,index)}}>
                    <div className="rounded text-red-700">{item?.name}</div>
                    <div className="rounded text-black-800">
                      {moment(item?.createdDate).format("DD/MM/YYYY")}
                    </div>
                    <div className="rounded text-black-800">{item?.description}</div>
                  </article> */}
                    <div className='flex-1'>
                    {selectedItem && id === index && (
                      <div>

                        <p>{selectedItem?.name}</p>
                        
                      </div>
                    )}
                    </div>
                  </div>
                ))}
                </section>
       </div>

       </div>
    </>
  );
};

export default ProductNew;
