import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sixpage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-5 ">
        <div className="text-center flex items-center">
          <p className="text-8xl max-md:text-6xl max-sm:text-3xl max-lg:text-5xl">
            ThankYou Geek
          </p>
          <Image
          className="max-sm:w-[20vw] max-sm:h-[10vh] mx-2"
            src="/images/handshakegif.gif"
            alt="img"
            width={100}
            height={20}
          />
        </div>
        <div className="border px-3 py-3 rounded text-white bg-red-500 ">
          <Link className="w-full" href="/">Back To HomePage 🙂</Link>
        </div>
      </div>
    </>
  );
};

export default Sixpage;
