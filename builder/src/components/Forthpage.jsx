"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Forthpage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <p className="text-5xl text-center max-sm:text-3xl max-lg:text-4xl p-3">
            Social
          </p>
        </div>
        <div className=" grid grid-cols-2 border-2 gap-5 p-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-md:w-[450px] max-sm:w-[300px] w-[700px]">
          <div className="flex justify-center gap-2 ">
            <Image src="/images/github.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="github username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/twitter.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="twitter username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/stackoverflow.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="stackoverflow user ID"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/linkedin.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="linkedin username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/instagramgif.gif" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="instagram username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/facebook.png" alt="img" width={30} height={20} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="facebook username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/devgif.gif" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="dev. to username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/codepen.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="codepen username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/codesandbox.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="codesandbox username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/kaggle.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="kaggle username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/dribbble.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="dribbble username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/behance.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="behance username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/hashnode.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="hashnode username (with @)"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/medium.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="medium username (with @)"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/youtube.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="youtube channel name"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/codechef.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="codechef username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/hackerrank.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="hackerrank username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/codeforces.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="codeforces username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/leetcode.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="leetcode username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/topcoder.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="topcoder username"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/github.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="hackerearth user (with @)"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/gfg.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="GFG (<username>/profile)"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/discord.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              id="text"
              placeholder="discord invite (only code)"
              name="text"
            />
          </div>
          <div className="flex justify-center gap-2 ">
            <Image src="/images/rss.png" alt="img" width={30} height={200} />
            <input
              className="border-b-2 w-[300px] outline-none"
              type="url"
              id="url"
              placeholder="RSS feed URL"
              name="text"
            />
          </div>
        </div>
          <div className="flex flex-row gap-10 pt-4 w-full justify-center mb-3">
            <Link
              className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md max "
              href="/thirdpage"
            >
              <AiOutlineLeft />
              Prev
            </Link>
            <Link
              className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md"
              href="/fifthpage"
            >
              Next
              <AiOutlineRight />
            </Link>
          </div>
      </div>
    </>
  );
};

export default Forthpage;
