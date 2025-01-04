import Image from "next/image";
import React from "react";
import {
  AddCircleIcon,
  GlobalIcon,
  NotificationIcon,
  SearchIcon,
} from "./Icons";
import { data } from "@/data";

export const NavBar = () => {
  return (
    <div className="flex justify-center items-center p-3 bg-white w-full">
      <div className="flex justify-between gap-5 md:w-11/12 w-full">
        <div className="flex items-center gap-5 ">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <div className="flex items-center gap-10">
            {data.pages.map((page) => (
              <p
                className={`${
                  page.isSelected
                    ? "text-primary font-bold before:content-[''] before:absolute before:w-11 before:left-1/2 before:-translate-x-1/2 before:h-1 before:rounded-t-sm before:bg-primary before:-bottom-[18px]"
                    : "text-gray-3"
                } text-lg relative`}
                key={page.name}
              >
                {page.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5  h-full">
          <SearchIcon />
          <div className="w-px h-9 bg-orange-2" />
          <NotificationIcon />
          <div className="w-px h-9 bg-orange-2" />
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full size-10 object-cover"
          />
          <button className="btn-primary text-white px-4 py-2 rounded-[10px]">
            <div className="flex items-center gap-1">
              <AddCircleIcon />
              <p className="font-bold text-sm">Add new product</p>
            </div>
          </button>
          <div className="flex items-center gap-2">
            <GlobalIcon />
            <div className="w-px h-5 bg-gray-4 " />
            <p className="text-gray-1 font-bold text-lg">EN</p>
          </div>
        </div>
      </div>
    </div>
  );
};
