import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/image.svg"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <img className="h-8 w-auto text-pink-600" src={logo} alt="Dribbble" />
            </a>
            <div className="hidden sm:ml-6 sm:flex space-x-8">
              <NavLink href="/inspiration">Inspiration</NavLink>
              <NavLink href="/find-work">Find Work</NavLink>
              <NavLink href="/learn-design">Learn Design</NavLink>
              <NavLink href="/go-pro">Go Pro</NavLink>
              <NavLink href="/hire-designers">Hire Designers</NavLink>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <SearchBar />

            <FontAwesomeIcon
              icon={faBriefcaseClock}
              className="text-gray-400"
            />
            <UserMenu />
            <UploadButton />
          </div>
          <div className="flex items-center sm:hidden">
            <MobileMenuButton onClick={toggleMobileMenu} />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="/inspiration">Inspiration</MobileNavLink>
              <MobileNavLink href="/find-work">Find Work</MobileNavLink>
              <MobileNavLink href="/learn-design">Learn Design</MobileNavLink>
              <MobileNavLink href="/go-pro">Go Pro</MobileNavLink>
              <MobileNavLink href="/hire-designers">
                Hire Designers
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
  >
    {children}
  </a>
);

const SearchBar = () => (
  <div className="bg-gray-100 rounded-lg p-2 flex items-center">
    <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-sm mr-2" />
    <input
      type="text"
      placeholder="Search"
      className="bg-transparent focus:outline-none"
    />
  </div>
);

const UploadButton = () => (
  <button className="bg-pink-500 text-white px-3 py-2 text-sm rounded-md">
    Upload
  </button>
);

const UserMenu = () => (
  <div className="ml-4 flex items-center md:ml-6">
    <div className="relative">
      <button
        type="button"
        className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User profile"
        />
      </button>
    </div>
  </div>
);

const MobileMenuButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100  "
    aria-controls="mobile-menu"
    aria-expanded="false"
  >
    <span className="sr-only">Open main menu</span>
    <FontAwesomeIcon icon={faBars} />
  </button>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
  >
    {children}
  </a>
);

export default Navbar;
