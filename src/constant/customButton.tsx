import React from 'react'
type button={
    classname:string,
    text?:string,
    onClick?:()=> void;
}
const CustomButton:React.FC<button> = ({classname,text,onClick}) => {
  return (
    
    <button className={`${classname}`} type='submit' onClick={onClick}>{text}</button>
    
  )
}

export default CustomButton;