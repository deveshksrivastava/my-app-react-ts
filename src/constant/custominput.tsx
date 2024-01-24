import React,{ChangeEvent,ReactNode} from 'react'

interface CustomInputProps {
    label?: ReactNode;
    type?: string;
    id: string;
    name: string;
    classname?:string;
    onChange: (id: string, value: string) => void;
    error?:string;
  }
 const CustomInput:React.FC<CustomInputProps> = ({label,type,id,name,onChange,classname,error}) => {
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    onChange(id,e.target.value)
  }
  return (
    <div className={`grid text-start px-20 `}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
       className={`${classname} border outline-none p-1 w-full  `}
        type={type}
        id={id}
        name={name}
        onChange={handleChange}

      />
      {error && <p className='mt-2 text-sm text-red-300'>{error}</p>}
    </div>
  )
}

export default CustomInput;