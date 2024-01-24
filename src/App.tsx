import { useMsal } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

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

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      {/* Your app components */}
      <MyComponent />
    </MsalProvider>
  );
}

export default App;

function MyComponent() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().then(response => {
      console.log(response);
    });
  };

  return <button onClick={handleLogin}>Log in</button>;
}
