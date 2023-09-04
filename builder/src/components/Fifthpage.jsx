"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

const Fifthpage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full py-14 max-sm:py-5">
        <p className="text-5xl max-sm:text-3xl max-lg:text-4xl p-3">Add-ons</p>

        <div className="border-2 flex flex-col rounded mt-3 w-[50vw] max-lg:w-[90vw] gap-5 pt-5 max-md:w-[90vw] max-sm:w-[96vw] max-sm:gap-5 max-sm:pt-2 max-sm:my-2">
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>display visitors count badge</p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>display github trophy</p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>display github profile stats card</p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>display top skills</p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>display github streak stats</p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>display twitter badge</p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>display latest dev.to blogs dynamically(GitHub Action)</p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>display latest medium blogs dynamically(GitHub Action)</p>
          </div>
          <div className="flex gap-2 px-2 items-center">
            <input type="checkbox" className="cursor-pointer w-4 h-4 max-sm:w-3 max-sm:h-3" />
            <p>
              display latest blogs from your personal blog dynamically(GitHub
              Action)
            </p>
          </div>

          <div className="flex flex-row gap-10 pt-4 w-full justify-center mb-3">
            <Link
              className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md max "
              href="/forthpage"
            >
              <AiOutlineLeft />
              Prev
            </Link>
            <Link
              className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md"
              href="/sixpage"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifthpage;
