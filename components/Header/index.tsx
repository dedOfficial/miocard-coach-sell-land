import { FC, memo } from "react";
import Image from "next/image";

import RequestDemo from "../RequestDemo";

import logo from "public/logo.svg";

const Header = () => {
  const onLogInClick = () => {
    window.open("https://app.htn.ai", "_blank");
  };

  return (
    <header className="py-2">
      <div className="container mx-auto flex justify-between px-3 md:px-0">
        <div className="logo">
          <span className="flex items-center gap-2 py-3 sm:py-1">
            <Image src={logo} alt="logo" />
            <div className="hidden select-none py-3 text-2xl font-semibold text-[#151E47] sm:block">
              HTN Companion
            </div>
          </span>
        </div>
        <div className="controls flex items-center gap-4 md:gap-8">
          <button
            className="rounded-2xl font-medium text-[#1F1F29] hover:underline"
            onClick={onLogInClick}
          >
            Log in
          </button>
          <RequestDemo />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
