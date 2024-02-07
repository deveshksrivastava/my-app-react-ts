import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import CustomTextArea from './constant/customArea';
import CustomButton from './constant/customButton';
import CustomInput from './constant/custominput';

type RegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  teamName: string;
  department: string;
  desc: string;
  msg: string;
};
const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    teamName: '',
    department: '',
    desc: '',
    msg: ''
  });
  const handleInputChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };
  const [errors, setErrors] = useState<Partial<RegistrationFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<RegistrationFormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.role.trim()) {
      newErrors.role = 'Role is required';
    }

    setErrors(newErrors);

    // Use Object.keys to get an array of error keys, and check if the array is empty
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('form submitted', formData);
    } else {
      console.log('form Validation fails');
    }
  };
  return (
    // <div className="w-full min-h-[calc(100vh-24vh)]">
    //   <div className={`h-60 bg-banner-logo bg-cover relative w-300  bg-center `}></div>
    //   <div className="sm:max-w-3xl m-auto py-3 relative   ">
    //     <div className="flex items-center justify-center ">
    //       <div className="absolute   bg-white  sm:max-w-7xl w-full   p-10 mb-20   text-center">
    //         <h1 className="text-2xl font-bold  ">user Registration form</h1>
    //       </div>
    //     </div>

    //     <form
    //       onSubmit={e => {
    //         handleSubmit(e);
            
    //       }}
    //       noValidate
    //       className="mt-10 flex flex-col px-3  gap-3"
    //     >
    //       <div className="sm:flex gap-3  justify-between">
    //         <CustomInput
    //           labelstyle='mb-2'
    //           classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           label="firstName:"
    //           id="firstName"
    //           type="text"
    //           name={formData.firstName}
    //           onChange={handleInputChange}
    //           errorStyle='text-red-400 '
    //           error={errors.firstName}
    //         />
    //         <CustomInput
    //         labelstyle='mb-2  mt-2'
    //           classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           label="lastName:"
    //           id="lastName"
    //           type="text"
    //           name={formData.lastName}
    //           onChange={handleInputChange}
    //           error={errors.lastName}
    //         />
    //       </div>
    //       <CustomInput
    //         classname="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         label="email:"
    //         id="email"
    //         type="email"
            
    //         name={formData.email}
    //         onChange={handleInputChange}
    //         error={errors.email}
    //       />
    //       <CustomInput
    //         classname=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
    //         label="role:"
    //         id="role"
    //         type="text"
    //         name={formData.role}
    //         onChange={handleInputChange}
    //         error={errors.role}
    //       />
    //       <CustomInput
    //         classname=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         label="teamName:"
    //         id="teamName"
    //         type="text"
    //         name={formData.teamName}
    //         onChange={handleInputChange}
    //       />
    //       <CustomInput
    //         classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
    //         label="department:"
    //         id="department"
    //         type="text"
    //         name={formData.department}
    //         onChange={handleInputChange}
    //       />
    //       <CustomTextArea classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " label="desc:" id="desc" name={formData.desc} onChange={handleInputChange} />
    //       <CustomTextArea classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " label="msg:" id="msg" name={formData.msg} onChange={handleInputChange} />

    //       <CustomButton
    //                   text="Register"
    //                   classname="flex w-1/2 m-auto justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //                   icon={<FaAngleRight /> }
    //       />
    //     </form>
    //   </div>
    // </div>
    <div className="flex max-w-4xl mt-4 m-auto bg-gray-100 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Registration your account
      </h2>
    </div>
    <form
          onSubmit={e => {
            handleSubmit(e);
            
          }}
          noValidate
          className="mt-10 flex flex-col px-3 gap-2 "
        >
          <div className='w-[100%] sm:flex gap-3'>
            <div className='sm:w-[50%]'>
            <CustomInput
              labelstyle='mb-2'
              classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              label="firstName:"
              id="firstName"
              type="text"
              name={formData.firstName}
              onChange={handleInputChange}
              errorStyle='text-red-400 '
              error={errors.firstName}
            />
            </div>
            <div className='sm:w-[50%]'>
            <CustomInput
            labelstyle='mb-2 '
              classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              label="lastName:"
              id="lastName"
              type="text"
              name={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
              errorStyle='text-red-400 '
            /> 
            </div>
          </div>
          <CustomInput
            classname="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            label="email:"
            id="email"
            type="email"
            
            name={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <CustomInput
            classname=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            label="role:"
            id="role"
            type="text"
            name={formData.role}
            onChange={handleInputChange}
            error={errors.role}
          />
          <CustomInput
            classname=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            label="teamName:"
            id="teamName"
            type="text"
            name={formData.teamName}
            onChange={handleInputChange}
          />
          <CustomInput
            classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            label="department:"
            id="department"
            type="text"
            name={formData.department}
            onChange={handleInputChange}
          />
          <CustomTextArea classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " label="desc:" id="desc" name={formData.desc} onChange={handleInputChange} />
          <CustomTextArea classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " label="msg:" id="msg" name={formData.msg} onChange={handleInputChange} />

          <div className='p-2'>
          <CustomButton 
                      text="Register"
                      classname="flex w-1/2 m-auto justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      icon={<FaAngleRight /> }
                      />
          </div>
        </form>
    </div>
  );
};

export default Registration;
