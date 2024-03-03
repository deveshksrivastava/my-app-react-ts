import Breadcrumbs  from './pages/breadcrums';
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { product } from "./data/product";
import MostRelevant from './mostRelavent';
import SidePannel from '../reuseable/sidePannel';
import Card from '../reuseable/cardProduct';

interface Item {
    name: string;
    createdDate: string;
    // Add any other properties here
  }
  
interface MainProps {}

 const Product: React.FC<MainProps> = () => {
    const PAGE_SIZE = 3;
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState<Item[]>(product);
    const [currentPage, setCurrentPage] = useState<number>(1);
  
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  
    const handlePageChange = (page:number) => {
      setCurrentPage(page);
    };
  
    const paginatedData = filteredData.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
    );
  
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
  return (

    <div>
        <Breadcrumbs />
        <div className="flex p-20 w-full h-full gap-10">
            <div className="flex flex-col items-start w-1/3 gap-10">
                <h1 className="text-3xl font-bold text-black-800">Search results</h1>
                <SidePannel />
            </div>
            <div className="flex flex-col items-center w-2/3 gap-10">
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
                    <Card item={item} key={index} />
                ))}
                </section>
                <div className="flex justify-center items-center mt-4">
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