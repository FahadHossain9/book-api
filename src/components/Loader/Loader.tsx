import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      role="status"
      className="flex h-[100vh] fixed top-0 left-0 w-full  bg-white justify-center items-center"
    >
      <div className="h-10 w-10 rounded-full border-b-4 border-blue-500 animate-spin"></div>
    </div>
  );
};

export default Loader;
