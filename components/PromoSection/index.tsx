import { memo } from "react";
import Image from "next/image";

import promoImage from "public/images/promo.svg";

const PromoSection = () => {
  return (
    <div className="container mx-auto mt-14 flex flex-col items-center px-3 md:px-0">
      <h1 className="w-full text-center text-3xl font-semibold leading-tight text-[#1F1F29] sm:text-4xl md:text-5xl lg:w-2/3 lg:text-6xl">
        <span className="rounded-2xl bg-sky-500 px-5 py-1 text-white">
          HTN Companion
        </span>{" "}
        is a user engagement program
      </h1>
      <div>
        <Image src={promoImage} alt="Engagement program" />
      </div>
    </div>
  );
};

export default memo(PromoSection);
