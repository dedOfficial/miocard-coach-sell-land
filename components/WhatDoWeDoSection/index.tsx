import { memo } from "react";
import Image from "next/image";

import RequestDemo from "../RequestDemo";

import computerImage from "public/images/computer.svg";

const WhatDoWeDoSection = () => {
  return (
    <div className="container mx-auto mt-24 mb-24 flex flex-col items-center px-3 md:mt-32 md:px-0">
      <h2 className="w-1/2 text-center text-2xl font-semibold leading-tight text-[#1F1F29] md:text-4xl lg:text-[40px]">
        What do we do?
      </h2>
      <p className="mt-8 w-full text-justify font-light text-[#1F1F29] opacity-[.80] sm:w-11/12 md:text-xl lg:w-[810px]">
        We help companies create engaging programs to help their users achieve
        clinically meaningful results. We improve blood pressure measurements
        regiment, body weight monitoring, medication adherence, lifestyle,
        mental health and habit optimization.
      </p>
      <div>
        <Image src={computerImage} alt="computer" />
      </div>
      <RequestDemo />
    </div>
  );
};

export default memo(WhatDoWeDoSection);
