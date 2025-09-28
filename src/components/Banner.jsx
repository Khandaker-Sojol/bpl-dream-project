import React from "react";
import bgImg from "/images/banner-main.png";

const Banner = () => {
  return (
    <div className="bg-[url(/images/bg-shadow.png)] rounded-2xl bg-[#131313] max-w-[1320px] my-3 py-17 mx-auto bg-cover text-center">
      <div className=" flex flex-col space-y-6 items-center justify-center">
        <img src={bgImg} alt="" />
        <h1 className="text-3xl md:text-4xl text-[#FFF] font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl text-[#FFFFFFB2]">
          Beyond Boundaries Beyond Limits
        </p>
        <a href="" className="border border-[#E7FE29] py-1 px-1 rounded-xl">
          <button className="text-black font-semibold bg-[#E7FE29] rounded-xl px-4 py-3 cursor-pointer">
            Claim Free Credit
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
