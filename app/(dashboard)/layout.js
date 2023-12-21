import React from "react";
import Sidenav from "./_components/Sidenav";
import Topheader from "./_components/Topheader";

const layout = ({ children }) => {
  return (
    <div>
      <div className="h-full md:w-64 flex-col fixed inset-y-0 z-50 hidden md:flex">
        <Sidenav />
      </div>
      <div className="md:ml-64">
        <Topheader />
        {children}
        </div>
    </div>
  );
};

export default layout;
