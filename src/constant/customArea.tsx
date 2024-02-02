import React, { ChangeEvent, ReactNode } from 'react';

interface CustomTextAreaProps {
    label?: ReactNode;
    id: string;
    name: string;
    classname?:string,
    onChange: (id: string, value: string) => void;
  }

const CustomTextArea:React.FC<CustomTextAreaProps> = ({label,id,name,onChange,classname}) => {
    const handleChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
      onChange(id,e.target.value)
    }
    return (
      <div className={` `}>
        {label && <label htmlFor={id}>{label}</label>}
        <textarea
         className={`${classname}  `}
          id={id}
          name={name}
          onChange={handleChange}
  
        />
      </div>
    )
  };
  export default CustomTextArea;