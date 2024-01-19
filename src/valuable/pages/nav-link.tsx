import { NavLink } from 'react-router-dom';
interface NavLinkProps {
  href: string;
  title: string;
}

const NavLinkTag: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <NavLink
      to={href}
      // className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white `}
      className={({ isActive }) => {
        return 'px-2 py-2  text-md font-medium ' + (isActive ? 'text-gray-300 bg-gray-500 border-b-[4px]  border-b-zinc-100 hover:text-white ' : ' text-white');
      }}
    >
      {title}
    </NavLink>
  );
};

export default NavLinkTag;
