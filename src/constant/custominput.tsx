import React,{ChangeEvent,ReactNode} from 'react'

interface CustomInputProps {
    label?: ReactNode;
    type?: string;
    id: string;
    name: string;
    labelstyle?:string;
    classname?:string;
    onChange: (id: string, value: string) => void;
    error?:string;
    errorStyle?:string;
  }
 const CustomInput:React.FC<CustomInputProps> = ({label,type,id,name,onChange,classname,labelstyle,error,errorStyle}) => {
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    onChange(id,e.target.value)
  }
  return (
    <>
      {label && <label htmlFor={id} className={`${labelstyle}`}>{label}</label>}
      <input
       className={`${classname} p-2 `}
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
      />      
      {error && <p className={`'mt-2 text-sm text-red-300' ${errorStyle}`}>{error}</p>}
    </>
  )
}

export default CustomInput;