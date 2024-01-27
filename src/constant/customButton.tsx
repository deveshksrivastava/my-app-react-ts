import React from 'react'
type button={
    classname:string,
    text?:string,
    onClick?:()=> void;
    icon?:React.ReactNode
}
const CustomButton:React.FC<button> = ({classname,text,icon,onClick}) => {
  return (
    
    <button className={`${classname}`} type='submit' onClick={onClick}>
      {text}
      {icon && <span className="ml-5  ">{icon}</span>}  
    </button>
    
  )
}

export default CustomButton;