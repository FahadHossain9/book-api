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
      className="text-md font-semibold leading-6 text-black hover:text-[#F04D99]"
    >
      {children}
    </button>
  );
};

export default NavItem;
