"use client";
import React, { useState } from "react";
import { FileUp, Files, Shield } from "lucide-react";
import Image from "next/image";

const Sidenav = () => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: FileUp,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: Files,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <Image src="/logo.svg" alt="Logo" width={150} height={100} />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-6 hover:bg-gray-100 text-gray-500 ${activeIndex === index ? "bg-blue-50 text-primary" : ""}`}
            key={item.id}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
          
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
