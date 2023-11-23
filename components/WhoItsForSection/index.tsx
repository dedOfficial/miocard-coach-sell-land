import { memo } from "react";
import GroupItem from "./GroupItem";

const WhoItsForSection = () => {
  const groupOption = [
    { content: "Remote patient monitoring", className: "item-gradient-1" },
    { content: "Hospitals", className: "item-gradient-2" },
    { content: "Payors", className: "item-gradient-3" },
    { content: "Health Insurance", className: "item-gradient-4" },
    { content: "Pharmaceutical trials", className: "item-gradient-5" },
  ];

  return (
    <div className="container mx-auto mt-20 flex flex-col items-center px-3 md:mt-44 md:px-0">
      <h2 className="w-1/2 text-center text-2xl font-semibold leading-tight text-[#1F1F29] md:text-4xl lg:text-[40px]">
        Who it&#39;s for?
      </h2>
      <div className="mt-10 flex flex-col items-stretch justify-center gap-8 sm:flex-row sm:flex-wrap sm:place-content-center md:mt-16">
        {groupOption.map(({ content, className }) => (
          <GroupItem key={content} gradientClass={className}>
            {content}
          </GroupItem>
        ))}
      </div>
    </div>
  );
};

export default memo(WhoItsForSection);
