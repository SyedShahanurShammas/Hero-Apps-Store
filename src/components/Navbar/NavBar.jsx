import heroIcon from "../../assets/logo.png";
import { Link, Links, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";

const NavBar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#9F62F2] underline underline-offset-2 font-bold"
            : "text-gray-600"
        }
        to={"/"}
      >
        <li className="m-3 cursor-pointer "> Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#9F62F2] underline underline-offset-2 font-bold"
            : "text-gray-600"
        }
        to={"/apps"}
      >
        <li className="m-3 cursor-pointer ">Apps</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#9F62F2] underline underline-offset-2 font-bold"
            : "text-gray-600"
        }
        to={"/installation"}
      >
        <li className="m-3 cursor-pointer ">Installation</li>
      </NavLink>

      {/* <Link to={"/"}>
        {" "}
        <li className="m-2 cursor-pointer ">Home</li>
      </Link>
      <Link to={"/apps"}>
        <li className="m-2 cursor-pointer ">Apps</li>
      </Link>
      <Link to={"/installation"}>
        <li className="m-2 cursor-pointer ">Installation</li>
      </Link> */}
    </>
  );
  return (
    <div className="navbar container mx-auto bg-base-100  ">
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
            {links}
          </ul>
        </div>
        <div className=" hidden md:flex items-center gap-1">
          <img className="h-[40px]" src={heroIcon} alt="" />
          <Link to={"/"}>
            <h1 className="font-bold text-[16px] text-[#9F62F2] ">
              Hero Store
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={() =>
            window.open("https://github.com/SyedShahanurShammas", "_blank")
          }
          className="flex text-white py-3 px-4 cursor-pointer items-center gap-0.5 rounded-[4px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"
        >
          {" "}
          <span>
            {" "}
            <FaGithub />{" "}
          </span>{" "}
          <span>Contribution</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
