import React, { useState } from "react";
import { useDispatch } from "react-redux";
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logoMini from "../../assets/icon-logo.png";
import logo from "../../assets/logo-banner.png";
import { HomeIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import allStore from "../../store/actions/index";

const Navbar = () => {
  const navigation = [{ name: "Home", href: "/" }];
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(term);
    dispatch(allStore.fetchSearch(term));
    if (term.length !== 0) {
      navigate(`/search/${term}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 border-b-2 border-red-600" style={{ position: "fixed", top: "0", zIndex: "100", width: "100%" }}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 shadow-2xl">
            <div className="relative flex items-center justify-between h-16 ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block lg:hidden h-8 w-auto" src={logoMini} alt="Workflow" />
                  <img className="hidden lg:block h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex align-center space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        //home-button
                        className={classNames(item.current ? "bg-gray-900 text-white" : "text-white hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center")}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {<HomeIcon className="w-7 h-7 text-red-600 pr-1 " />}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <form className="flex justify-center" onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="text-center border-0 rounded border-b-2 bg-gray-800 border-gray-100 border-transparent focus:outline-none focus:border-gray-100 border-transparent focus:ring-red-600 focus:border-transparent text-gray-100 py-1 text-sm "
                  onChange={(e) => setTerm(e.target.value)}
                />
                <button type="submit">
                  <SearchIcon className="w-6 h-6 text-red-600 mt-2 border-b-2 rounded border-gray-100" />
                </button>
              </form>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium")}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
