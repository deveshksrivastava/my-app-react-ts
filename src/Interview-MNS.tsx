// import react, { FC, useState,useEffect } from 'react';

// type Users = {

// }

// const myJson = [{
//   name: 'john1',
//   email: 'john1@gmail.com',
//   password: '123',
// }, { name: 'john2',
// email: 'john2@gmail.com',
// password: '1231',
// }]

// export const App=() => {
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [users, setUsers] = useState<Users[]>([])

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setUsers([...users, values])
//     myJson.push(values)
//   };

//   useEffect(() => {
//    console.log("email ->",values.email)
//   }, [values.email])

//   return (
//     <div className="App">
//       <form onSubmit={(e) => handleSubmit(e)} >

//         <h1>Registratino form</h1>
//         name: <input type="text" name="name" onChange={handleChange} />
//         <br />
//         Email:<input type="email" name={'email'} onChange={handleChange} />
//         <br />
//         Password
//         <input type="password" name={'password'} onChange={handleChange} />
//         <br />
//         <button  type={'submit'} >
//           Submit
//         </button>
//       </form>
//       {JSON.stringify(users)}<br/>
//       JSON{JSON.stringify(myJson)}

//     </div>
//   );
// };

// export default App;

// // 1) Email
// // 2) Password
// // 3) Name
// // 4) Submit button

import React from 'react';

export default function InterviewMNS() {
  return <div></div>;
}
