import { memo } from "react";

import { NextPage } from "next";

interface Props {
  children: string;
  gradientClass: string;
}

const GroupItem: NextPage<Props> = ({ children, gradientClass }) => {
  return (
    <div
      className={`${gradientClass} flex w-full grow items-center rounded-3xl py-6 px-8 text-center text-xl font-medium text-[#1F1F29] sm:w-fit sm:max-w-[246px] sm:grow-0 md:text-2xl`}
    >
      <span className="mx-auto sm:mx-0">{children}</span>
    </div>
  );
};

export default memo(GroupItem);
