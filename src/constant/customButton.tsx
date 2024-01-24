import React from 'react'
type button={
    classname:string
}
const CustomButton:React.FC<button> = ({classname}) => {
  return (
    <button className={`${classname}`} type='submit'>save</button>
  )
}

export default CustomButton;