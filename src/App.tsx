import { useMsal } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CustomButton from './constant/customButton';
import CustomInput from './constant/custominput';
import { FaAngleRight } from "react-icons/fa";

const { clientId, authority, redirectUri } = msalConfig.auth;
if (!clientId) {
  throw new Error('clientId is required');
}
const msalInstance = new PublicClientApplication({
  auth: {
    clientId,
    authority,
    redirectUri
  },
  cache: msalConfig.cache
});

const App=()=> {
  const user = localStorage.getItem('token');
  if (user) {
    return <Navigate to={'/'} replace={true}></Navigate>;
  }
  return (
    
    <MsalProvider instance={msalInstance}>
       
      <MyComponent />
      
    </MsalProvider>
    

  )
}

export default App;

const MyComponent = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();
  const handleLogin = () => {
    instance.loginPopup().then(response => {
      console.log(response);
      localStorage.setItem('token', JSON.stringify(response));
      navigate('/',{replace:true})
    });
  };
  const handleChange = () => {};
  return (
    <>
    <div className="flex max-w-sm mt-4 m-auto bg-gray-100 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
  
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <CustomButton
          text="Login by Microsoft"
          classname="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={handleLogin}
        />
  
        <p className="text-center my-3">Or</p>
        <form
          className="space-y-6"
          onSubmit={data => {
            console.log(data);
          }}
          noValidate
        >
          <CustomInput
            id="email"
            name="email"
            type="text"
            label="Email Address"
            onChange={handleChange}
            labelstyle="block text-sm font-medium leading-6 text-gray-900 mb-2"
            classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
  
          <CustomInput
            id="password"
            name="password"
            type="password"
            label="Password"
            onChange={handleChange}
            labelstyle="block text-sm font-medium leading-6 text-gray-900 mb-2"
            classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <CustomButton
            text="Login"
            classname="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            icon={<FaAngleRight /> }
          />
        </form>
  
        <p className="mt-6 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  </>
  )
};
