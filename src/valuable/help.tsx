
import { useLocation, useParams } from 'react-router-dom';
import Banner from './pages/banner';


const Help = () => {
  const location =useLocation();
  // const location =useParams();

  console.log(location);
  

  const {user,first,secound} =useParams()
  console.log(user,first,secound);
  
  return (
    <div className="min-h-screen">
      
      <Banner />
    </div>
  );
};

export default Help;
