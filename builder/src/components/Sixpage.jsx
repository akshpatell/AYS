"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sixpage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-5 ">
        <div className="text-center flex items-center">
          <p className="text-8xl max-sm:text-3xl max-md:text-5xl max-lg:text-6xl">
            ThankYou Geek
          </p>
          <audio controls autoPlay className="hidden">
            <source src="/audio/thankyou.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <Image
            className="max-sm:w-[20vw] max-sm:h-[10vh] mx-2"
            src="/images/handshakegif.gif"
            alt="img"
            width={100}
            height={20}
          />
        </div>
        <button>
          <div className="px-3 py-3 rounded text-white bg-red-500">
            <Link className="w-full" href="/">
              Back To HomePage 🙂
            </Link>
          </div>
        </button>
      <div className="flex justify-end">
        - Created by Aksh Patel
        </div>
      </div>
    </>
  );
};

export default Sixpage;
