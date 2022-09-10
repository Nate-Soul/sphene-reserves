import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";
import SearchDialog from "./SearchDialog";

const Navbar = () => {

  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(true);
  const [closeMenu, setCloseMenu] = useState(false);
  const [openSearchDialog, setOpenSearchDialog] = useState(false);

  const handleToggle = () => {
    setOpenMenu(!openMenu);
    setCloseMenu(!closeMenu);
  };

  const toggleSearchDialog = () => {
    setOpenSearchDialog(!openSearchDialog);
  }

  return (
    <>
    <nav id="mainMenu" className="bg-secondary py-4">
      <div className="container flex flex-wrap items-center justify-between">
        <Link to="/" className="navbar-brand text-primary font-bold">
          Sphene Reserves
        </Link>
        <div className="navbar-togglers flex justify-between gap-6 items-center justify-self-end md:hidden text-primary">
          <button onClick={toggleSearchDialog} className="hover:text-primary-700">
            <FaSearch/>
          </button>
          {closeMenu && (
            <button onClick={handleToggle} className="hover:text-primary-700">
              <FaBars />
            </button>
          )}
          {openMenu && (
            <button onClick={handleToggle} className="hover:text-primary-700">
              <FaTimes />
            </button>
          )}
        </div>
        <div
          id="mainMobileMenu"
          className={`${
            closeMenu ? "hidden " : ""
          }md:flex basis-full md:basis-auto mt-4 md:mt-0 grow-1`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-3 uppercase text-sm text-gray-700 font-medium">
            <li className="nav-item mb-2 md:mb-0">
              <Link
                to="/"
                className={`nav-link py-2 px-3 ${(location.pathname === "/") ? "text-primary hover:text-primary-700" : "hover:text-primary"}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mb-2 md:mb-0">
              <Link to="/about" className={`nav-link py-2 px-3 ${(location.pathname === "/about") ? "text-primary hover:text-primary-700" : "hover:text-primary"}`}>
                About
              </Link>
            </li>
            <li className="nav-item mb-2 md:mb-0">
              <Link to="/contact" className={`nav-link py-2 px-3 ${(location.pathname === "/contact") ? "text-primary hover:text-primary-700" : "hover:text-primary"}`}>
                Contact
              </Link>
            </li>
            <li className="nav-item mb-2 md:mb-0">
              <Link
                to="/login"
                className={`nav-link py-2 px-3 ${(location.pathname === "/login") ? "text-primary hover:text-primary-700" : "hover:text-primary"}`}
              >
                Login
              </Link>
            </li>
            <li className="nav-item mb-2 md:mb-0">
              <Link
                to="/register"
                className="nav-link-btn bg-primary uppercase text-sm text-white rounded hover:bg-primary-700 py-2 px-3 transition"
              >
                Reserve a spot
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {openSearchDialog && (
      <div className={`mobile-search-dialog block md:hidden bg-white py-6 shadow`}>
        <SearchDialog/>
      </div>
      )
    }
    </>
  );
};

export default Navbar;