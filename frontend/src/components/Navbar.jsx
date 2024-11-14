import { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import avatarImg from "../assets/avatar.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Checkout", href: "/checkout" },
];
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = false;
  return (
    <>
      <header className="max-w-screen-2xl mx-5 px-4 py-6">
        <nav className="flex justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <HiBars2 className="size-6" />
            </Link>

            {/*Search Input*/}
            <div className="relative sm:w-72 w-40 space-x-2">
              <CiSearch
                className="absolute inline-block 
              left-3 inset-y-2 size-4"
              />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#EAEAEA] 
            w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex items-center md:space-x-3 space-x-2">
            <div>
              {currentUser ? (
                <>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img
                      src={avatarImg}
                      alt=""
                      className={`size-7 rounded-full ${
                        currentUser ? "ring-2 ring-blue-500" : ""
                      }`}
                    />{" "}
                  </button>
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <CiUser className="size-6" />
                </Link>
              )}
            </div>
            <button className="hidden sm:block">
              <CiHeart className="size-6" />
            </button>
            <Link
              to="/cart"
              className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
            >
              <CiShoppingCart className="size-4" />
              <span className="text-sm font-semibold sm:ml-1">0</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
