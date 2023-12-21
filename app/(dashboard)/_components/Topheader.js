"use client";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify, FileUp, Files, Shield } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const Topheader = () => {
  const [activNav, setActivNav] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  return (
    <div>
      <div className="flex p-5 border-b items-center justify-between">
        <button>
          <AlignJustify
            className="md:hidden cursor-pointer"
            onClick={() => setActivNav(!activNav)}
          />
        </button>

        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={50}
          className="md:hidden"
        />
        <UserButton />
      </div>
      <div
        className={`transition-all ease-out duration-500 overflow-hidden ${
          activNav ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="pt-4 pb-10">
          <div className="flex flex-col gap-6 text-center">
            {menuList.map((item, index) => (
              <button
                className={`py-2 ${
                  activeIndex === index ? "bg-blue-50 text-primary" : ""
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setActivNav(false);
                }}
              >
                <item.icon className="w-6 h-6 mx-auto" />
                <span className="text-sm">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
