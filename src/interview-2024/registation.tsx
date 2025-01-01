import react, { useState } from "react"
import * as Yup from "yup";

type Employee = {
  firstName: string,
  lastName: string,
  city: string,
}

export const RegistrationNew: React.FC = () => {
  const [firstName, setFirstName] = react.useState("");
  const [lastName, setLastName] = react.useState("");
  const [cityName, setCityName] = react.useState("");
  const [addressName, setAdddressName] = react.useState("");
  const [emplyeelist, setEmployeeList] = react.useState<Employee[]>([]);
  const [list, setList] = react.useState(
    [
      { name: "rohit", city: "london" },
      { name: "ramesh", city: "delhi" },
      { name: "sudhir", city: "jaipur" }
    ]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(firstName, lastName, cityName);
    alert("Please enter");
    const employee = {
      firstName,
      lastName,
      city: cityName
    };

    const url = 'http://localhost:5000/register'; // Replace with your API endpoint

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setEmployeeList([...emplyeelist, result]);
    } catch (error) {
      console.log('error', error)
      // setError(error.message);
    }

  }

  const onChangeCityHandler = (e: react.ChangeEvent<HTMLInputElement>) => {
    const addrss = e.target.value
    setAdddressName(addrss)
    console.log("address", addrss)
  }

  console.log(emplyeelist)
  return (
    <div className="flex flex-col  w-2/3 mx-auto rounded-md gap-4">

      <RegistrationForm />
      <hr />

      <RegistrationWithYUP />
      <hr />
      <h1 className="text-2xl">Registration RAHUL</h1>
      <input type="text" placeholder="First Name" className="border-2 border-black" onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="last Name" className="border-2 border-black" onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="city Name" className="border-2 border-black" onChange={(e) => setCityName(e.target.value)} />
      <div>
        <input type="text" placeholder="Address Name" className="border-2 border-black w-28" onChange={onChangeCityHandler} />
        {
          list.map((item, index) => {
            return <div className="w-28 border-2 border-site-color hidden">{item.name}</div>;
          })}

      </div>
      <button className="bg-blue-300" onClick={handleSubmit}>Submit</button>

      {
        emplyeelist.map((item, index) => {
          return <div className="w-28">{item.lastName}</div>;
        })
      }

      {JSON.stringify(emplyeelist)}
    </div>
  )
}

export default RegistrationNew;



type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
  age: number;
  gender: string;
  interests: Array<string>;
  birthDate: string;
};

function RegistrationForm() {
  const [formData, setFormData] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    password: "",
    confirmPassword: "",
    age: 0,
    gender: "",
    interests: [],
    birthDate: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof IUser, string>>>({});
  const [formDataArray, setFormDataArray] = useState<IUser[]>([]);

  const changehandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log("changehandler", name, value);
    // let ss = [...formData.interests];
    // if (checked) {
    //     ss.push(name)
    // }else{
    //     ss = ss.filter((intrest)=>intrest != name)
    // }
    setFormData({ ...formData, [name]: value });
  };

  const changeCheckhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    let updateIntrests = [...formData.interests];
    if (checked) {
      updateIntrests.push(name);
    } else {
      updateIntrests = updateIntrests.filter((intrest) => intrest != name);
    }
    console.log("changeCheckhandler", updateIntrests);
    setFormData({ ...formData, interests: updateIntrests });
  };

  const isValidEmail = (email: string) => {
    // Regular expression for basic email validation
    const emailregix = /^\S+@\S+\.\S+$/;
    return emailregix.test(email);
  };

  const isValidPhoneNumber = (phoneNumber: number) => {
    // Regular expression for basic phone number validation (10 digits)
    const phoneRegix = /^\d{10}$/;
    return phoneRegix.test(phoneNumber!.toString());
  };

  const isValidPassword = (password: string) => {
    // Regular expressions for password validation
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;

    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const validateForm = () => {
    let newErrors: Partial<Record<keyof IUser, string>> = {};

    if (!formData.firstName) {
      newErrors.firstName = "FirstName is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "lastName is required";
    }
    if (!formData.email) {
      newErrors.email = "email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (formData.phoneNumber <= 0) {
      newErrors.phoneNumber = "phoneNumber is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phoneNumber, It should be 10 number";
    }
    if (!formData.password) {
      newErrors.password = "password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = "Invalid password, should have no symbol, have number, 1 uppercase and 1 lowercase";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "confirmPassword is required";
    }
    if (formData.age <= 0) {
      newErrors.age = "age  is required";
    }
    if (!formData.gender) {
      newErrors.gender = "gender  is required";
    }
    if (formData.interests?.length === 0) {
      newErrors.interests = "Select at least one intrest";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "birthDate is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandle = (e: any) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Sussessfullt submitted", formData);


      setFormDataArray([...formDataArray, formData]);
    } else {
      console.log("Fail to submit", formData);
    }

  };

  const clearHandle = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: 0,
      password: "",
      confirmPassword: "",
      age: 0,
      gender: "",
      interests: [],
      birthDate: "",
    });
    setErrors({});
  };

  return (
    <div className="auto w-full m-2 p-2">
      <h1 className="text-2xl underline">Form swithout Yup</h1>
      <div>
        <label htmlFor="name" className="w-64">FirstName</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => changehandler(e)}
          placeholder="Enter firstName"
          className="bg-grey-400 border-2"
        />
        {errors && errors.firstName ? (
          <span className="text-red-500">{errors.firstName}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="name" className="w-64">lastName</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => changehandler(e)}
          placeholder="Enter lastName"
          className="bg-grey-400 border-2"
        />
        {errors && errors.lastName ? (
          <span className="text-red-500">{errors.lastName}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="name" className="w-64">email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => changehandler(e)}
          placeholder="Enter email"
          className="bg-grey-400 border-2"
        />
        {errors && errors.email ? (
          <span className="text-red-500">{errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">phoneNumber: </label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => changehandler(e)}
          placeholder="Enter phoneNumber"
          className="bg-grey-400 border-2"
        />
        {errors && errors.phoneNumber ? (
          <span className="text-red-500">{errors.phoneNumber}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => changehandler(e)}
          placeholder="Enter password"
          className="bg-grey-400 border-2"
        />
        {errors && errors.password ? (
          <span className="text-red-500">{errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">confirmPassword: </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => changehandler(e)}
          placeholder="Enter confirmPassword"
          className="bg-grey-400 border-2"
        />
        {errors && errors.confirmPassword ? (
          <span className="text-red-500">{errors.confirmPassword}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">age: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={(e) => changehandler(e)}
          placeholder="Enter age"
          className="bg-grey-400 border-2"
        />
        {errors && errors.age ? (
          <span className="text-red-500">{errors.age}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">gender: </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={(e) => changehandler(e)}
          className="bg-grey-400 border-2"
        >
          <option value="select">Select Option</option>
          <option value="male" selected>male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        {errors && errors.gender ? (
          <span className="text-red-500">{errors.gender}</span>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="" className="w-64">Interests: </label>
        coding
        <input
          type="checkbox"
          name="coding"
          onChange={(e) => changeCheckhandler(e)}
        />
        Sports
        <input
          type="checkbox"
          name="Sports"
          onChange={(e) => changeCheckhandler(e)}
        />
        reading
        <input
          type="checkbox"
          name="reading"
          onChange={(e) => changeCheckhandler(e)}
        />
        {errors && errors.interests ? (
          <span className="text-red-500">{errors.interests}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">Data Of Birth: </label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={(e) => changehandler(e)}
          placeholder="Enter birthDate"
          className="bg-grey-400 border-2"
        />
        {errors && errors.birthDate ? (
          <span className="text-red-500">{errors.birthDate}</span>
        ) : (
          ""
        )}
      </div>
      <button
        type="submit"
        onClick={submitHandle}
        className="bg-blue-600 m-2 p-2"
      >
        Add User
      </button>
      <button
        type="submit"
        onClick={clearHandle}
        className="bg-blue-600 m-2 p-2"
      >
        Clear
      </button>
      <br />
      {JSON.stringify(formData)}

      {formDataArray.map((item, index) => {
        return (
          <div key={index}>
            {item.firstName} {item.lastName}|{item.email} |{item.phoneNumber}|
            {item.password} |{item.confirmPassword}|{item.age} |{item.gender}|
            {item.interests} |{item.birthDate}|
          </div>
        );
      })}
    </div>
  );
}


type MyUser = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
  age: number;
  gender: string;
  interests: Array<string>;
  birthDate: string;
};

function RegistrationWithYUP() {
  const [formData, setFormData] = useState<MyUser>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    password: "",
    confirmPassword: "",
    age: 0,
    gender: "",
    interests: [],
    birthDate: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof MyUser, string>>>({});
  const [formDataArray, setFormDataArray] = useState<MyUser[]>([]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required(),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(18, "You must be at least 18 years old")
      .max(100, "You cannot be older than 100 years")
      .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array()
      .min(1, "Select at least one interest")
      .required("Select at least one interest"),
    birthDate: Yup.date().required("Date of birth is required"),
  });


  const changehandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log("changehandler", name, value);
    // let ss = [...formData.interests];
    // if (checked) {
    //     ss.push(name)
    // }else{
    //     ss = ss.filter((intrest)=>intrest != name)
    // }
    setFormData({ ...formData, [name]: value });
  };

  const changeCheckhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    console.log('name, value, checked', name, value, checked)

    let updateIntrests = [...formData.interests];
    if (checked) {
      updateIntrests.push(name);
    } else {
      updateIntrests = updateIntrests.filter((intrest) => intrest != name);
    }
    console.log("changeCheckhandler", updateIntrests);
    setFormData({ ...formData, interests: updateIntrests });
  };

  const submitHandle = async (e: any) => {
    console.log('submithandle', formData)
    e.preventDefault();
    // const nonParsed = {
    //   firstName: "Piyush",
    //   lastName: "Agarwal",
    //   email: "piyush@example.com",
    //   phoneNumber: "1231234218",
    //   password: "123456Qq*",
    //   confirmPassword: "123456Qq*",
    //   age: "18",
    //   gender: "male",
    //   interests: ["coding"],
    //   birthDate: "2024-02-12",
    // };

    // const parsedUser = validationSchema.cast(nonParsed);
    // console.log(nonParsed, parsedUser);
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
    } catch (error: any) {
      const newErrors: Partial<Record<keyof MyUser, string>> = {};

      error?.inner?.forEach((err: any) => {
        newErrors[err.path as keyof MyUser] = err.message;
      });

      setErrors(newErrors);
    }
  };


  const clearHandle = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: 0,
      password: "",
      confirmPassword: "",
      age: 0,
      gender: "",
      interests: ["", "", ""],
      birthDate: "",
    });
    setErrors({});
  };

  return (
    <div className="auto w-full m-2 p-2">
      <h1 className="text-2xl underline">Form with Yup</h1>
      <div>
        <label htmlFor="name" className="w-64">FirstName</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => changehandler(e)}
          placeholder="Enter firstName"
          className="bg-grey-400 border-2"
        />
        {errors && errors.firstName ? (
          <span className="text-red-500">{errors.firstName}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="name" className="w-64">lastName</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => changehandler(e)}
          placeholder="Enter lastName"
          className="bg-grey-400 border-2"
        />
        {errors && errors.lastName ? (
          <span className="text-red-500">{errors.lastName}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="name" className="w-64">email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => changehandler(e)}
          placeholder="Enter email"
          className="bg-grey-400 border-2"
        />
        {errors && errors.email ? (
          <span className="text-red-500">{errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">phoneNumber: </label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => changehandler(e)}
          placeholder="Enter phoneNumber"
          className="bg-grey-400 border-2"
        />
        {errors && errors.phoneNumber ? (
          <span className="text-red-500">{errors.phoneNumber}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => changehandler(e)}
          placeholder="Enter password"
          className="bg-grey-400 border-2"
        />
        {errors && errors.password ? (
          <span className="text-red-500">{errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">confirmPassword: </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => changehandler(e)}
          placeholder="Enter confirmPassword"
          className="bg-grey-400 border-2"
        />
        {errors && errors.confirmPassword ? (
          <span className="text-red-500">{errors.confirmPassword}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">age: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={(e) => changehandler(e)}
          placeholder="Enter age"
          className="bg-grey-400 border-2"
        />
        {errors && errors.age ? (
          <span className="text-red-500">{errors.age}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">gender: </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={(e) => changehandler(e)}
          className="bg-grey-400 border-2"
        >
          <option value="select">Select Option</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        {errors && errors.gender ? (
          <span className="text-red-500">{errors.gender}</span>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="" className="w-64">Interests: </label>
        coding
        <input
          type="checkbox"
          name="coding"
          // checked={checkboxState.checkbox1}
          onChange={(e) => changeCheckhandler(e)}
        />
        Sports
        <input
          type="checkbox"
          name="Sports"
          // checked={checkboxState.checkbox2}
          onChange={(e) => changeCheckhandler(e)}
        />
        reading
        <input
          type="checkbox"
          name="reading"
          // checked={checkboxState.checkbox3}
          onChange={(e) => changeCheckhandler(e)}
        />
        {errors && errors.interests ? (
          <span className="text-red-500">{errors.interests}</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="" className="w-64">Data Of Birth: </label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={(e) => changehandler(e)}
          placeholder="Enter birthDate"
          className="bg-grey-400 border-2"
        />
        {errors && errors.birthDate ? (
          <span className="text-red-500">{errors.birthDate}</span>
        ) : (
          ""
        )}
      </div>
      <button
        type="submit"
        onClick={submitHandle}
        className="bg-blue-600 m-2 p-2"
      >
        Add User
      </button>
      <button
        type="submit"
        onClick={clearHandle}
        className="bg-blue-600 m-2 p-2"
      >
        Clear
      </button>

      {JSON.stringify(formData)}

      {formDataArray.map((item, index) => {
        return (
          <div key={index}>
            {item.firstName} {item.lastName}|{item.email} |{item.phoneNumber}|
            {item.password} |{item.confirmPassword}|{item.age} |{item.gender}|
            {item.interests} |{item.birthDate}|
          </div>
        );
      })}
    </div>
  );
}

// export default function page() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//         <form className="w-full max-w-lg bg-gray-100 p-4">
//             <h1>Registration Form</h1><br />
//             <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
//                     First Name
//                 </label>
//                 <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
//                 <p className="text-red-500 text-xs italic">Please fill out this field.</p>
//                 </div>
//                 <div className="w-full md:w-1/2 px-3">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
//                     Last Name
//                 </label>
//                 <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
//                 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
//                 </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full px-3">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                     Password
//                 </label>
//                 <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
//                 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"
//                 type="password" placeholder="******************"/>
//                 <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
//                 </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-2">
//                 <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
//                     City
//                 </label>
//                 <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4
//                 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
//                 </div>
//                 <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
//                     State
//                 </label>
//                 <div className="relative">
//                     <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//                     <option>New Mexico</option>
//                     <option>Missouri</option>
//                     <option>Texas</option>
//                     </select>
//                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
//                         Zip
//                     </label>
//                     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4
//                     leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
//                 </div>
//                 <button className="shadow mt-10 ml-4 bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//                     type="submit">Submit
//                 </button>
//             </div>
//             </form>
//     </div>
//   )
// }