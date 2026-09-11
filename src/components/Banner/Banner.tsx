import React from "react";
import BannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto flex max-w-[1250] flex-col items-center gap-12 px-5 md:flex-row md:justify-between">
        <div className="w-full max-w-150 ">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-5 max-w-137.5 text-base leading-7 text-slate-500 md:mt-6 md:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="w-full rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white sm:w-auto">
              Explore Technologies
            </button>
            <button className="w-full rounded-md border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center md:w-auto">
          <img
            src={BannerImg}
            alt=""
            className="w-[350px] sm:w-[390px] md:w-[400px] lg:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
