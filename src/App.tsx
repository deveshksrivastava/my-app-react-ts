import { useMsal } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CustomButton from './constant/customButton';
import CustomInput from './constant/custominput';
import { FaAngleRight } from 'react-icons/fa';
import MyLogin from './MyLogin';

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

const App = () => {
  const user = localStorage.getItem('token');
  if (user) {
    return <Navigate to={'/'} replace={true}></Navigate>;
  }
  return (
    <MsalProvider instance={msalInstance}>
      <MyLogin />
    </MsalProvider>
  );
};

export default App;
