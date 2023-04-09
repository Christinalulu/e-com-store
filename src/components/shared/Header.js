import { useState } from "react";

const Header = () => {
   let [open, setOpen] = useState(false);
 
  return (
    <div className="min-h-full">
        <nav className="border-b border-green-300 border-opacity-25 bg-green-600 lg:border-none">
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-green-400 lg:border-opacity-25">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0 text-3xl text-white">
                <ion-icon name="balloon-outline"></ion-icon>
                Flopsy
                </div>
                <div className="hidden lg:ml-10 lg:block">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-green-700 text-white rounded-md py-2 px-3 text-sm font-medium"
                      aria-current="page">
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-green-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">
                      Contact
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-green-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">
                      My Products
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-green-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">
                      Calendar
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-green-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">
                      Reports
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label for="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <input
                      id="search"
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 sm:text-sm sm:leading-6"
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
                  <span className="sr-only">Open main menu</span>
                  <ion-icon
                          name="cart-outline"
                          role="img"
                          className="md hydrated"></ion-icon>
                  
                </button>
              </div>
              <div className=" lg:ml-4 lg:hidden">
                <div className="flex items-center">
                  <div className="relative ml-3 flex-shrink-0">
                    <div>
                      <button onClick={()=>setOpen(!open)}
                        type="button"
                        className="flex rounded-full bg-green-600 text-3xl text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                        id="user-menu-button"
                        aria-expanded="true"
                        aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <ion-icon name={open ? 'close':'menu-outline'} className="md hydrated"></ion-icon>
                       
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className={`${open ? 'block': 'hidden'}`}>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              <a
                href="#"
                className="bg-green-700 text-white block rounded-md py-2 px-3 text-base font-medium"
                aria-current="page">
                Home
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                Contact
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                My Products
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                Calendar
              </a>
              <a
                href="#"
                className="text-white hover:bg-green-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                Reports
              </a>
            </div>
          </div>
        </nav>
      </div>
    
  );
};

export default Header;
