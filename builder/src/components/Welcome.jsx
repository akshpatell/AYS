"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Welcome = () => {
  return (
    <>
      <div className="w-full flex  flex-col items-center justify-center absolute h-full">
        <div className="text-center">
          <p className="text-8xl max-md:text-6xl max-sm:text-4xl max-lg:text-5xl">
            Welcome Geek👋
          </p>
          <audio controls autoPlay className="hidden">
            <source src="/audio/welcome.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="flex gap-3 md:gap-5 justify-center mt-5 md:mt-8">
          <div>
            <button className="w-full flex gap-2 max-sm:gap-1 items-center px-2 py-2 rounded text-white bg-red-500 ">
              <Link href="/donatepage" className="w-full">
                Buy Us Coffee
              </Link>
              <Image
                src="/images/Buy-Us-Coffee.gif"
                alt="img"
                width={20}
                height={20}
              />
            </button>
          </div>
          <button>
            <div className="gap-2 max-sm:gap-1 flex px-2 py-2 rounded text-white bg-black items-center ">
              <Link className="w-full" href="/profile">
                Make Readme
              </Link>
              <Image
                src="/images/makeReadme.gif"
                alt="img"
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>

        <div className="mt-5 md:mt-8 flex justify-center items-center border-b-2 w-[40vw] max-lg:w-[60vw] max-md:w-[80vw] max-sm:w-[92vw]">
          <input
            className="px-2 py-1 outline-none flex-[3] max-sm:w-[60vw] max-lg:w-[75vw] max-sm:text-xs"
            type="email"
            id="email"
            name="email"
            placeholder="Subscribe to Get Connected!"
          />
          <button className="px-3 py-1 bg-blue-500 text-white flex-[1] rounded">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
