import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MyCard from '../reuseable/card';
import MyDialog from '../reuseable/mydialog';
import '../App.css'
interface LayoutProps {
  children: any;
  layoutTitle?: string;
  coverImage?: any;
  sideContent?: boolean;
  subContentItem?: subItem[];
}
interface subItem {
  title: string;
  path: string;
  img?: string;
  toggleEnable?: boolean;
}
const LayoutWrapper: React.FC<LayoutProps> = props => {
  const { layoutTitle, coverImage, children, sideContent, subContentItem } = props;
  const { id } = useParams();
  const [aboutStatus, setAboutStatus] = useState<boolean>(false);
  const handleAboutClick = () => {
    setAboutStatus(true);
  };
  const handleAboutClose = () => {
    setAboutStatus(false);
  };
  const extractPath = (path: string) => {
    const regex = /\/[^\/]+\/(.+)/;
    const match = path.match(regex);
    if (match) {
      const extractPaths = match[1];
      return extractPaths;
    }
  };
  return (
    <div className="relative flex flex-col min-h-screen  w-full ">
      <div className="w-full ">
        {coverImage ? (
          <figure>
            <img src={coverImage} alt="" className="w-full h-[20rem] object-cover" />
          </figure>
        ) : (
          <div className="w-full h-[25rem] bg-gray-200"></div>
        )}
      </div>
      <div className="flex justify-center  ">
        {layoutTitle && (
          <div className="absolute top-[18%] bg-black bg-opacity-50 pt-3 pb-3 pl-2 pr-2">
            <h4 className="md:text-2xl xl:text-3xl text-center text-custom-white font-bold">{layoutTitle} </h4>
          </div>
        )}
        <div 
          className={`bg-custom-white absolute py-[100px]  min-h-[20rem]  top-[30%] pl-34 pr-34 pt-14 2xl:w-[55%]  md:w-[80%] lg:w-[60%]  my-1`}
          >
          {children}
          {sideContent && (
            <div className="xl:hidden pl-6 pr-10 w-full mt-10">
              {subContentItem?.map((item: subItem) =>
                item.toggleEnable ? (
                  <div className="cursor-pointer" onClick={handleAboutClick}>
                    <MyCard
                      cardImg={item.img}
                      cardContent={
                        <>
                          <p className={id === extractPath(item.path) ? `text-gray-500` : `text-site-color`}>
                            {item.title}
                          </p>
                        </>
                      }
                      sx="w-[1.2rem]"
                    />
                  </div>
                ) : (
                  <Link to={`${item.path}`} className="cursor-pointer">
                    <MyCard
                      cardImg={item.img}
                      cardContent={
                        <>
                          <p className={id === extractPath(item.path) ? `text-gray-500` : `text-site-color`}>
                            {item.title}
                          </p>
                        </>
                      }
                      sx="w-[1.2rem]"
                    />
                  </Link>
                )
              )}
            </div>
          )}
        </div>
        {sideContent && (
          <div className="absolute hidden xl:block xl:w-[20%] right-[1rem] mt-10">
            {subContentItem?.map((item: subItem) =>
              item.toggleEnable ? (
                <div className="cursor-pointer" onClick={handleAboutClick}>
                  <MyCard
                    cardImg={item.img}
                    cardContent={
                      <p className={id === extractPath(item.path) ? 'text-gray-500' : 'text-site-color'}>
                        {item.title}
                      </p>
                    }
                    sx="w-[1.2rem]"
                  />
                </div>
              ) : (
                <Link to={`${item.path}`} className="cursor-pointer">
                  <MyCard
                    cardImg={item.img}
                    cardContent={
                      <>
                        <p className={id === extractPath(item.path) ? `text-gray-500` : `text-site-color`}>
                          {item.title}
                        </p>
                      </>
                    }
                    sx="w-[1.2rem]"
                  />
                </Link>
              )
            )}
          </div>
        )}
      </div>
      <MyDialog open={aboutStatus} onClose={handleAboutClose}>
        <div className="pl-5 pr-5 mt-2">
          <p className="text-site-color text-lg">You are being redirected</p>
          <p className="mt-4 mb-6 font-medium">
            ESO IT Portal will open in a new tab to report an issuse related to ZAP.
            <br />
            Do you want to proceed?
          </p>
        </div>
      </MyDialog>
    </div>
  );
};
export default LayoutWrapper;
