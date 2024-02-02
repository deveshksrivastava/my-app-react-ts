import React from 'react'
type button={
    classname:string,
    label?:string,
    onClick?:()=> void;
    icon?:React.ReactNode
}
const MyButton:React.FC<button> = ({classname,label,icon,onClick,...rest}) => {
  return (
    <button className={`${classname}`}{...rest} type='submit' onClick={onClick}>
      {label}
      {icon && <span className="ml-5  ">{icon}</span>}  
    </button>
    
  )
}

export default MyButton;