import { useLocation } from 'react-router-dom';
import Banner from './pages/banner';
import Breadcrumbs from './pages/breadcrums';
// interface AppProps {
//   bannerPath: string;
// }
const Help = () => {
  const location=useLocation()
  const pathname = location.pathname.split('/').filter(x => x);
  const path=pathname.slice(1)
  // console.log(path);
  const accordionData = [
    { title: 'Accordion 1', content: 'Content for Accordion 1' },
    { title: 'Accordion 2', content: 'Content for Accordion 2' },
    { title: 'Accordion 3', content: 'Content for Accordion 3' },
  ];

  return (
    <div className="min-h-[calc(100vh-24vh)]">
       <Breadcrumbs />
      <Banner path={path[0]} accordionData={accordionData}/>
    </div>
  );
};

export default Help;
