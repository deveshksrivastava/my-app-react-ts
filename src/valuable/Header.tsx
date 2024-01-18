
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" justify-between bg-slate-100 shadow-md h-15">
      <div className="flex items-start max-w-7xl px-2 py-2">
        <img src="/asserts/img/logo.png" className="w-20" alt="Logo" />
      </div>
      <div className="flex bg-blue-400  justify-center items-center">
        <ul className="flex gap-4 no-underline ">
          <li className="text-white  p-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white  p-2 ">
            <Link to="/service">Service</Link>
          </li>
          <li className="text-white  p-2 ">
            <Link to="/help">Help</Link>
          </li>
          <li className="text-white  p-2 ">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
