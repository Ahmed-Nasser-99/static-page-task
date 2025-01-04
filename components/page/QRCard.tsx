"use client";

import React, { useState } from "react";
import {
  ArrowDownIcon,
  DocumentDownloadIcon,
  EyeIcon,
  SendSquareIcon,
} from "../Icons";
import Image from "next/image";
import { data } from "@/data";

const QRCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="card w-full">
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <p className="text-gray-1 font-bold text-2xl">QR Code</p>
          <div className="flex items-center gap-3">
            <EyeIcon />
            <SendSquareIcon />
            <DocumentDownloadIcon />
            <button
              onClick={() => {
                console.log(isOpen);
                setIsOpen(!isOpen);
              }}
              className={`"cursor-pointer p-1 rounded-full md:hidden  flex flex-shrink-0 ${
                isOpen ? "bg-pink-1" : "bg-gray-5"
              }`}
            >
              <ArrowDownIcon className={`${isOpen ? "rotate-180" : ""} `} />
            </button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="secondary-card flex items-center gap-2 px-4">
              <DocumentDownloadIcon color="#FF951D" />
              <p className="text-xs text-gray-1">
                Download the QR code or share it with your friends.
              </p>
            </div>
            <div className="flex items-center justify-center p-5 bg-gradient-to-r from-primary to-orange-1 rounded-2xl">
              <div className="bg-white flex flex-col items-center justify-center rounded-2xl py-2 w-full gap-2">
                <Image src="/logo.png" alt="qr" width={152} height={100} />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-1 from-bold text-2xl">
                    {data.account.name}
                  </p>
                  <Image src="/QRCode.png" alt="qr" width={152} height={152} />
                </div>
                <p className="text-gray-1">Follow Us on Mazaady</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QRCard;
