import React from "react";
import Link from "next/link";

const Welcome = () => {
 
  return (
    <>
    <div className="w-full flex  flex-col items-center justify-center absolute top-[35%]">

      <div className="text-center">
        <p className="text-8xl max-md:text-6xl max-sm:text-4xl max-lg:text-5xl">Welcome Geek👋</p>
      </div>
      <div className="flex gap-3 md:gap-5 justify-center mt-5 md:mt-8">
        <div className="border px-3 py-2 rounded text-white bg-red-500 ">
          <button className="w-full">Buy Us Coffee</button>
        </div>
        <div className="border px-3 py-2 rounded text-white bg-black ">
          <Link className="w-full" href="/firstpage">Make Readme</Link>
        </div>
      </div>

      <div className="mt-5 md:mt-8 flex justify-center items-center border-b-2 w-[40vw] max-lg:w-[60vw] max-md:w-[80vw] max-sm:w-[92vw]">
          <input
            className="px-2 py-1 outline-none flex-[3] max-sm:w-[60vw] max-lg:w-[75vw] max-sm:text-xs"
            type="email"
            id="email"
            name="email"
            placeholder="Subscribe to Get Connected!"
          />
          <button className="px-3 py-1 bg-blue-500 text-white border-b-2 flex-[1]">Subscribe</button>
        </div>
      </div>
    

    </>
  );
};

export default Welcome;
