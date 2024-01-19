import { useLocation } from 'react-router-dom';
import Banner from './pages/banner';
import Breadcrumbs from './pages/breadcrums';

const Help = () => {
  
  return (
    <div className="min-h-screen">
       <Breadcrumbs />
      <Banner />
    </div>
  );
};

export default Help;
