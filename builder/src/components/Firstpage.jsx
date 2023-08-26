import Link from "next/link";
import React from "react";
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'

const Firstpage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] ">
        <div>
          <p className="text-5xl text-center max-sm:text-3xl max-lg:text-4xl">Profile Information😉</p>
        </div>

        <div className="border-2 flex flex-col rounded mt-3 w-[50vw] max-lg:w-[70vw] max-md:w-[90vw] max-sm:w-[96vw]">
          <div className="pt-4 px-4">
            <label>Title: </label>
          </div>
          <div className="pt-2 px-4">
            <div className="border-2 rounded p-1">
              <input
                className="outline-none w-full"
                type="text"
                id="title"
                name="title"
                placeholder="Hi 👋, I'm Elon Musk"
              />
            </div>
          </div>

          <div className="pt-4 px-4">
            <label>Subtitle: </label>
          </div>
          <div className="pt-2 px-4">
            <div className="border-2 rounded p-1">
              <input
                className="outline-none w-full"
                type="text"
                id="subtitle"
                name="subtitle"
                placeholder="A passionate Software developer from India"
              />
            </div>
          </div>

          <div className="pt-4 px-4">
            <label>Tell me about your self: </label>
          </div>
          <div className="pt-2 px-4 mb-3">
            <div className="border-2 rounded p-1">
              <textarea
                className="outline-none w-full"
                type="text"
                id="message"
                name="message"
                rows="5"
                cols="45"
                placeholder="I'm Elon musk, I have learned Rocket Science from reading books📖, Isn't it Amazing!"
              ></textarea>
            </div>
            <div className="flex flex-row gap-10 pt-4 w-full justify-center">

            <Link className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md max " href="/"><AiOutlineLeft/>Home</Link>
            <Link className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md" href="/secondpage">Next<AiOutlineRight/></Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Firstpage;
