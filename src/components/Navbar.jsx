import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../layout/AuthProvider";

const Navbar = () => {
  const {logOutUser, user} = useContext(AuthContext);

    const navNavLinks = <>
    <li><NavLink className={({isActive}) => isActive ? 'text-[#573AEE] font-bold' : 'hover:border-b border-[#573AEE] font-semibold text-white'} to={'/'}>Home</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-[#573AEE] font-bold' : 'hover:border-b border-[#573AEE] font-semibold text-white'} to={'/all-series'}>All Series</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-[#573AEE] font-bold' : 'hover:border-b border-[#573AEE] font-semibold text-white'} to={'/add-series'}>Add Series</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-[#573AEE] font-bold' : 'hover:border-b border-[#573AEE] font-semibold text-white'} to={'favorite-series'}>My Favorites</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-[#573AEE] font-bold' : 'hover:border-b border-[#573AEE] font-semibold text-white'} to={'discover'}>Discover</NavLink></li>
    </>
  return (
    <div className="navbar  w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navNavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Islamic Vision</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navNavLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <Link onClick={logOutUser} to={'/login'} className="btn bg-[#573AEE] text-white border-none">Log Out</Link> : <Link to={'/login'} className="btn bg-[#573AEE] text-white border-none">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
