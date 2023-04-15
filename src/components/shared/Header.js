import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let [open, setOpen] = useState(false);
  const { numberOfProductsInCart } = useSelector((state) => state.cart);
  return (
    <div className="min-h-full">
      <nav className="border-b border-green-300 border-opacity-25 bg-green-600 lg:border-none">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-green-400 lg:border-opacity-25">
            <div className="flex items-center px-2 lg:px-0">
              <NavLink to="/">
              <div className="flex-shrink-0 text-3xl rounded-md p-2 text-white hover:bg-green-500">
                <ion-icon name="balloon-outline"></ion-icon>
                Flopsy
              </div>
              </NavLink>
              <div className="hidden lg:ml-10 lg:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className="text-white hover:bg-green-500 rounded-md py-2 px-3 text-sm font-light"
                    aria-current="page">
                    Home
                  </NavLink>
                  <NavLink
                    to="/contact_us"
                    className="text-white hover:bg-green-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-light">
                    Contact
                  </NavLink>
                  <NavLink
                    to="/cart"
                    className="text-white hover:bg-green-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-light">
                    My Products
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-600 ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <ion-icon name="search-outline"></ion-icon>
                  </div>
                  <input
                    id="search"
                    className="block w-full outline-none rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:block">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-green-600 p-2 text-3xl text-green-200 hover:bg-green-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Cart icon</span>
                <NavLink to="/cart">
                <ion-icon
                  name="cart-outline"
                  role="img"
                  className="md hydrated"></ion-icon>
                </NavLink>
              
                <span className=" text-white text-sm ">
                  {numberOfProductsInCart}
                </span>
              </button>
            </div>
            <div className=" lg:ml-4 lg:hidden">
              <div className="flex items-center">
                <div className="relative ml-3 flex-shrink-0">
                  <div>
                    <button
                      onClick={() => setOpen(!open)}
                      type="button"
                      className="flex rounded-full bg-green-600 text-3xl text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                      id="user-menu-button"
                      aria-expanded="true"
                      aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <ion-icon
                        name={open ? "close" : "menu-outline"}
                        className="md hydrated"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu" className={`${open ? "block" : "hidden"}`}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink to="/"
              className="text-white hover:bg-green-500 block rounded-md py-2 px-3 text-base font-medium" 
              aria-current="page">
              Home
            </NavLink>
            <NavLink to="/cart" className="text-white hover:bg-green-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
              Contact
            </NavLink>
            <NavLink to="/contact_us" className="text-white hover:bg-green-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
              My Products
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
