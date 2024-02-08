import React from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <button
      onClick={handleClick}
      className="text-[15px] font-bold   rounded-full hover:bg-gray-300 px-2 py-[1px] focus:text-[black] focus:bg-white text-[#736d83] w-full hover:text-[#fff] "
    >
      {children}
    </button>
  );
};

export default NavItem;
