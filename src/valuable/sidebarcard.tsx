import React, { useState } from 'react'
import { TbDatabaseSearch } from 'react-icons/tb';

interface card{
    st:string,
    id?:number,
    title?:string

}

const SideBarCard:React.FC<card> = (props:card) => {
    const {st}=props;
    const [showData, setShowData] = useState<number| null>(null);
    const data=[
        {id:1, title:"Data catalog",path:"/"},
        {id:2,title:"Data Upload",path:'/'},
        {id:3,title:"Open Data Publication",path:'/'},
        {id:4, title:"Advanced Analytics",path:'/'},
    ]
    const toggleVisibility = (itemId:number) => {
        setShowData(showData === itemId ? null:itemId );
    };
    return (
        <>
    {data?.map((item)=>{
        const visible = showData === item.id ? '' : 'hidden';
        return(
            <div key={item.id} className={`${st} `} onClick={() => toggleVisibility(item.id)} /* onMouseOver={() => toggleVisibility(item.id)} */>
            <TbDatabaseSearch />
            <div className={`${visible} `}>{item.title}</div>
            </div>
        )
    })

    }
    </>
  )
}

export default SideBarCard;