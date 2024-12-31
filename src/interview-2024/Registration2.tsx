// import React, { useState } from 'react'

// const fruits = ["Apple", "Banana", "Orange", "Grapefruit", "Mango", "Pineapple", "Watermelon", "Strawberry", "Blueberry", "Kiwi"];
// export const Registration2 = () => {
//     const [fname, setFName] = useState<string>('')
//     const [age, setAge] = useState<string>('')
//     const [error, setError] = useState<[]>([])
//     const [fruitsData, setFruitsData] = useState<string[]>(fruits)
//     const [searchText, setSearchtext] = useState<string>('')
//     const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) =>{
//         console.log(fname)
//         console.log(age)

//         const myError = []
//         if (fname){
//             myError.push(`${fname} cannot be blank`)
//         }

//         if (myError.length>0){
//             // setError(myError)
//             // return 
//         }

//         console.log("sucessfully submited")
//     }


    


// //  1. Search and making bold the search text in the list of fruits
// //  2. Filter the fruits based on the search text

//  const fruitsDataFiler = fruitsData.filter((fruit)=> fruit.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
//   console.log("result",fruitsDataFiler)
//   console.log(fruitsData)
//   console.log(searchText)

//   return (
//     <>
//             <SearchInput />
//     <div className='h-24 bg-gray-200 flex items-between'>
//         <div>logo</div>
//         <ul className='flex'>
//             <li>Menu1</li>
//             <li>Menu1</li>
//             <li>Menu1</li>
//             <li>Menu1</li>
          
//         </ul>
//         <div>signout</div>
//     </div>
//     <hr /><hr />
//     <h1>Fruits Intervirew Question</h1>
//     <input type="text" className='border' placeholder='Search here....' value={searchText} onChange={(e)=> setSearchtext(e.target.value)} />
//     {
//       fruitsDataFiler.length>0 ?  
//       fruitsDataFiler
//         .filter((fruit)=> fruit.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
//         .map((fruit:any, index:any) => {
//             return <div key={index}>{fruit}</div>
//         }): 
//         <h1>No Result found</h1>
//     }





//         <h1>Registration2</h1>
//         <div>
//             <label htmlFor="fname">First Name</label>
//             <input type="text" className='border' name="fname" id="txtfname" value={fname} onChange={(e)=>setFName(e.target.value)}  />
//         </div>
//         <div>
//             <label htmlFor="fname">Age</label>
//             <input type="text" className='border' name="age" id="txtage" value={age} onChange={(e)=>setAge(e.target.value)} />
//         </div>
//         <button type="button" className='border' onClick={handlerSubmit}    >Submit</button>

//         {/* {JSON.stringify(JSON.parse(error))} */}

//     </>
//   )
// }



// interface SearchResult {
//   id: string;
//   text: string;
// }

// const results: SearchResult[] = [
//     { id: '1', text: 'Search result 1 - This is a long description that may go beyond two lines. This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.' },
//     { id: '2', text: 'Search result 2 - A shorter description. This is a long description that may go beyond two lines. This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines. This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines. This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.This is a long description that may go beyond two lines.' },
//   ];

// const SearchInput: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
// const [isOpened, setIsOpened] = useState(false)


//   return (
//     <div className="mx-auto w-2/3">
//       {results.map((result:any) => (
//         <div key={result.id} className="search-result border">
//           <div className={isOpened ? '':'line-clamp-2 box-orient-vertical overflow-hidden display-webkit-box'}>{result.text}</div>
//           <button type="button" onClick={(e)=>setIsOpened(!isOpened)}>{isOpened ? 'read less...' : 'read more..'}   </button>
//         </div>
//       )
//     )}
//     </div>
//   );
// };

// export default SearchInput;



import React, { useState, useLayoutEffect } from 'react';

const useTruncatedElement = ({ ref }:any) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isReadingMore, setIsReadingMore] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {};
    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ref]);

  return { isTruncated, isReadingMore, setIsReadingMore };
};

function Registration2() {
    
  const ref = React.useRef(null);
  const { isTruncated, isReadingMore, setIsReadingMore } = useTruncatedElement({ ref });

  // Code to get your note content...
  const note = {
    noteContent :  'Microsoft and our third-party vendors use cookies to store and access information such as unique IDs to deliver, maintain and improve our services and ads. If you agree, MSN and Microsoft Bing will personalise the content and ads that you see. You can select ‘I Accept’ to consent to these uses or click on ‘Manage preferences’ to review your options and exercise your right to object to Legitimate Interest where used.  You can change your selection under ‘Manage Preferences’ at the bottom of this page.'
  }
  return (
    <div>
      <p ref={ref} className={`break-words text-xl ${!isReadingMore && 'line-clamp-2'}`}>
        {note?.noteContent}
      </p>
      <br /><br /><br />
      {isTruncated && !isReadingMore && (
        <button onClick={() => setIsReadingMore(true)}>Read more</button>
      )}
    </div>
  );
}

export default Registration2;