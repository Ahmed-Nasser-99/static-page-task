import React from "react";
import { AddCircleIcon, EmptyHeartIcon, FilledHeartIcon } from "../Icons";
import { data } from "@/data";
import Image from "next/image";

const ProductsCard = () => {
  return (
    <div className="card flex-2 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2">
            {data.tabs.map((tab) => (
              <p
                className={`tab ${tab.isSelected ? "tab-selected" : "tab"}`}
                key={tab.name}
              >
                {tab.name}
              </p>
            ))}
          </div>
          {/* Fixed as the design in figma */}
          <button className="btn-primary px-4 py-2 rounded-[10px] md:relative fixed right-4 top-1/2  z-10">
            <div className="flex items-center gap-1">
              <AddCircleIcon />
              <p className="font-bold text-sm">Add Review</p>
            </div>
          </button>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-gray-1 font-extrabold text-3xl">Products</p>
          <p className="text-gray-3 text-sm">({data.products.length})</p>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {data.products.map((product, index) => (
            <div
              className="flex gap-2 md:gap-4 py-2 pl-4 pr-8 w-full justify-between"
              key={index}
            >
              <div className="flex gap-2 relative">
                <Image
                  src={product.productImage}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-xl md:min-w-[145px] md:h-[127px] min-w-[88px] h-[72px] overflow-hidden object-cover"
                />
                <div className="absolute top-1 left-1 md:hidden">
                  {product.isFavorite ? (
                    <div className="size-6 flex items-center justify-center bg-white rounded-full">
                      <FilledHeartIcon className="size-3" />
                    </div>
                  ) : (
                    <div className="size-6 flex items-center justify-center bg-white rounded-full">
                      <EmptyHeartIcon className="size-3" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-1 md:text-lg text-xs line-clamp-1">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-3 md:text-lg text-xs">
                      Starting from
                    </p>
                    <p className="text-gray-1 font-bold md:text-lg text-xs">
                      ${product.startingPrice} EGP
                    </p>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-2">
                    <p className="text-gray-3 md:text-lg text-xs whitespace-nowrap">
                      Lot starts in
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {product.lotIn.map((lot, index) => (
                        <div className="secondary-card !w-fit py-1" key={index}>
                          <p className="text-orange-1 lg:text-lg text-xs font-bold whitespace-nowrap text-center">
                            {lot}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex hidden">
                {product.isFavorite ? <FilledHeartIcon /> : <EmptyHeartIcon />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
