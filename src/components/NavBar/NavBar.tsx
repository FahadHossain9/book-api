import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Articles", href: "/articles" },
    { name: "Books", href: "/books" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white">
      <nav
        className="flex items-center justify-between p-3 lg:px-8 max-w-[1440px] mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* Insert your logo here */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#F04D99] bg-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center mr-16">
          {navigation.map((item) => (
            <NavItem key={item.name} href={item.href}>
              {item.name}
            </NavItem>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-1/2 overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* Insert your logo here */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavItem key={item.name} href={item.href}>
                    {item.name}
                  </NavItem>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
