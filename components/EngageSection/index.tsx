import { memo } from "react";
import Image from "next/image";

import engageImage from "public/images/engage.svg";

const EngageSection = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center px-3 md:px-0">
      <h2 className="w-full max-w-screen-lg text-center text-2xl font-medium leading-tight text-[#1F1F29] md:text-4xl lg:text-[40px]">
        Engage your users, help them achieve better health, increase user
        longevity.
      </h2>
      <div>
        <Image src={engageImage} alt="Engage" />
      </div>
    </div>
  );
};

export default memo(EngageSection);
