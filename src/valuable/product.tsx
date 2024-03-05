import Breadcrumbs  from './pages/breadcrums';
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { product } from "./data/product";
import MostRelevant from './mostRelavent';
import SidePannel from '../reuseable/sidePannel';
import Card from '../reuseable/cardProduct';
import moment from 'moment';

interface Item {
    name: string;
    createdDate: string;
    description?: string;
    fileType?:string;
    groupName?:string;
    tags?:object;
    index?: number;
    handleCardClick?: (item: Item, index: number) => void;
    // onclick?: (item: Item, index: number) => void;
    // Add any other properties here
  }

interface MainProps {
  // item: Item;

}

 const Product: React.FC<MainProps> = () => {
    const PAGE_SIZE = 3;
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState<Item[]>(product);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [id,setId]=useState<number>(0)
  
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  
    const handlePageChange = (page:number) => {
      setCurrentPage(page);
    };
  
    const paginatedData = filteredData.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
    );
  console.log(paginatedData);
  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
      handlePageChange(1);
      if (!e.target.value) {
        setFilteredData(product);
      }
      setSearchValue(e.target.value);
    };
  
    const handleSearch = () => {
      const searchTerm = searchValue.toLowerCase();
      const filteredResults = product.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      });
  
      setFilteredData(filteredResults);
    };
  
    const handleKeyDown = (e:React.KeyboardEvent<HTMLImageElement>):void => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
  
    const handleSelect = (item:{title:string}):void => {
      let sortedData:Item[]=[];
      if (item.title === "Name") {
        sortedData = [...filteredData].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (item.title === "Date") {
        sortedData = [...filteredData].sort(
          (a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
        );
      }
      setFilteredData(sortedData);
    };


    const handleCardClick = (item:Item,id:number) => {
      // console.log(item,id);
      setId(id);
      setSelectedItem(item);
      console.log(selectedItem);
      
    };
  return (

    <div>
        <Breadcrumbs />
        <div className="lg:flex  lg:p-10 py-10 w-full h-full gap-10">
            <div className="flex flex-col items-start lg:w-1/6 w-full gap-10 p-2">
                <h1 className="text-3xl font-bold text-black-800">Search results</h1>
                <SidePannel />
            </div>
            <div className="flex flex-col items-center lg:w-2/3 gap-5 p-2">
                <div
                className="flex flex-row items-center w-full"
                onKeyDown={handleKeyDown}
                tabIndex={0}
                >
                <input
                    type="text"
                    className="border-2 p-2 rounded flex-1"
                    onChange={handleChange}
                    value={searchValue}
                />
                <div
                    className="bg-red-700 p-3 hover:bg-red-600 rounded  cursor-pointer"
                    onClick={handleSearch}
                >
                <CiSearch color="white" size={20} />
                </div>
                </div>
                <MostRelevant handleSelect={handleSelect} />
                <section className="w-full flex flex-wrap">
                {paginatedData?.map((item, index) => (
                  <div className='flex w-full justify-between'>
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
                <div className="flex justify-center items-center mb-6">
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                    key={index}
                    className={`cursor-pointer p-2 mx-2 ${
                        currentPage === index + 1 ? "bg-gray-300" : "hover:bg-gray-200"
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                    >
                    {index + 1}
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}
export default Product;