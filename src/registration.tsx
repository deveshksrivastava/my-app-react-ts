import React, { useState } from 'react';
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
    if(!formData.role.trim()){
      newErrors.role="Role is required"
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
    <div className="w-full min-h-[calc(100vh-24vh)]">
      <div className={`h-60 bg-banner-logo bg-cover relative w-300  bg-center `}></div>
      <div className="max-w-3xl m-auto py-3 relative   ">
        <div className="flex items-center justify-center ">
          <div className="absolute justify-center w-full bg-white  max-w-3xl  p-10 mb-20  text-center">
            <h1 className="text-2xl font-bold  ">user Registration form</h1>
          </div>
        </div>

        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
          className="mt-10 flex flex-col gap-3"
        >
          <div className="flex justify-between">
            <CustomInput
              classname=" "
              label="firstName:"
              id="firstName"
              type="text"
              name={formData.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />
            <CustomInput
              classname=" "
              label="lastName:"
              id="lastName"
              type="text"
              name={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />
          </div>
          <CustomInput
            classname=""
            label="email:"
            id="email"
            type="email"
            name={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <CustomInput
            classname="  "
            label="role:"
            id="role"
            type="text"
            name={formData.role}
            onChange={handleInputChange}
            error={errors.role}
          />
          <CustomInput
            classname=" "
            label="teamName:"
            id="teamName"
            type="text"
            name={formData.teamName}
            onChange={handleInputChange}
          />
          <CustomInput
            classname=" "
            label="department:"
            id="department"
            type="text"
            name={formData.department}
            onChange={handleInputChange}
          />
          <CustomTextArea classname=" " label="desc:" id="desc" name={formData.desc} onChange={handleInputChange} />
          <CustomTextArea classname=" " label="msg:" id="msg" name={formData.msg} onChange={handleInputChange} />

          <CustomButton classname="bg-green-300 w-[200px] m-auto p-1 active:bg-green-500" />
        </form>
      </div>
    </div>
  );
};

export default Registration;
