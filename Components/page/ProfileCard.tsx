import { data } from "@/data";
import Image from "next/image";
import React from "react";
import { UserTickIcon } from "../Icons/UserTickIcon";
import { FollowersIcon } from "../Icons/FollowersIcon";
import { MagicStarIcon } from "../Icons";

const ProfileCard = () => {
  return (
    <div className="card w-full">
      <div className="flex flex-col gap-4">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={100}
          height={100}
          className="rounded-3xl size-[100px] object-cover"
        />
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-bold text-gray-1">
              {data.account.name}
            </p>
            <p className="text-gray-3">{data.account.description}</p>
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="secondary-card">
              <UserTickIcon />
              <div className="flex flex-col">
                <p className="text-gray-1 font-bold text-sm">
                  {data.account.following}
                </p>
                <p className="text-orange-1 text-xs">Following</p>
              </div>
            </div>
            <div className="secondary-card">
              <FollowersIcon />
              <div className="flex flex-col">
                <p className="text-gray-1 font-bold text-sm">
                  {data.account.followers}
                </p>
                <p className="text-orange-1 text-xs">Followers</p>
              </div>
            </div>
            <div className="secondary-card">
              <MagicStarIcon />
              <div className="flex flex-col">
                <div className="flex items-end gap-[2px]">
                  <p className="text-gray-1 font-bold text-sm">
                    {data.account.rate}
                  </p>
                  <p className="text-gray-3 text-[10px] mb-[2px]">
                    ({data.account.numberOfReviews})
                  </p>
                </div>
                <p className="text-orange-1 text-xs">Rate</p>
              </div>
            </div>
          </div>
          <button className="btn-primary w-full text-lg rounded-[14px]">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
