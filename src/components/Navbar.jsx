import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../layout/AuthProvider";

const Navbar = () => {
  const { logOutUser, user } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#573AEE] font-bold"
              : "hover:border-b border-[#573AEE] font-semibold text-white"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#573AEE] font-bold"
              : "hover:border-b border-[#573AEE] font-semibold text-white"
          }
          to={"/all-series"}
        >
          All Series
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#573AEE] font-bold"
              : "hover:border-b border-[#573AEE] font-semibold text-white"
          }
          to={"/add-series"}
        >
          Add Series
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#573AEE] font-bold"
              : "hover:border-b border-[#573AEE] font-semibold text-white"
          }
          to={"/favorite-series"}
        >
          My Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#573AEE] font-bold"
              : "hover:border-b border-[#573AEE] font-semibold text-white"
          }
          to={"/discover"}
        >
          Discover
        </NavLink>
      </li>
    </>
  );
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
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Islamic Vision</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-4 relative">
        {user ? (
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setTimeout(() => setShow(false), 3000)}
            className="bg-white rounded-full p-2"
          >
            <img
              className="w-[40px] h-[38px]"
              title={user?.displayName}
              src={user?.photoURL}
              alt=""
            />
          </div>
        ) : (
          <Link
            to={"/login"}
            className="btn bg-[#573AEE] text-white border-none"
          >
            Login
          </Link>
        )}
        {!user && (
          <Link
            to={"/register"}
            className="btn bg-[#573AEE] text-white border-none"
          >
            Register
          </Link>
        )}
        {show && (
          <div className="absolute top-2 right-20" onClick={logOutUser} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <Link
              to={"/login"}
              className="btn bg-[#573AEE] text-white border-none"
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
