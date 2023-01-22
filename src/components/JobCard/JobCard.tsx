import React from "react";
import { JobItem, Tag } from "components";

import { GrFavorite } from "react-icons/gr";

import { BsFolder } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import CompanyAvatar from "components/avatars/CompanyAvatar";

export const JobCard = ({
  name,
  description,
  tags = ["Full time", "Private", "Urgent"],
}: any) => {
  return (
    <div className="justify-between border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 p-4 flex">
      <CompanyAvatar />

      <div className="w-full px-4">
        <h2 className="font-bold text-md text-left mb-2">{name}</h2>
        <p className="mb-2">
          A React developer designs and develops web applications using the
          React JavaScript library.
        </p>
        <div className="flex gap-5 mb-3">
          <JobItem icon={<BsFolder />} text="Segment" />
          <JobItem icon={<BiTime />} text="Time" />
          <JobItem icon={<GoLocation />} text="Location" />
          <JobItem icon={<GiMoneyStack />} text="$35k - $45k" />
        </div>
        {/* <p className="mb-5">{description || 'lorem ipsum'}</p> */}
        <div className="flex gap-3">
          {(tags || []).map((tag: string) => (
            <Tag title={tag} />
          ))}
        </div>
      </div>

      <div>
        <GrFavorite />
      </div>
    </div>
  );
};
