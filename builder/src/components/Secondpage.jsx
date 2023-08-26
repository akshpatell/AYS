import Link from "next/link";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Secondpage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:h-[100vh]">
        <div>
          <p className="text-5xl text-center max-sm:text-3xl max-lg:text-4xl">
            Work Information💼
          </p>
        </div>
        <div className="border-2 flex flex-col rounded mt-3 w-[80vw] max-lg:w-[90vw] gap-5 pt-5 max-md:w-[90vw] max-sm:w-[96vw] max-sm:gap-8 max-sm:pt-2 justify-center items-center">
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="🔭 I’m currently working on"
                className="outline-none border-b-2  w-[35vw] max-sm:w-[80vw]  px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="project name"
                className="outline-none border-b-2  w-[35vw] max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]    max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="👯 I’m looking to collaborate on"
                className="outline-none border-b-2   w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="project name"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="🤝 I’m looking for help with"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="project name"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="🌱 I’m currently learning"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Framework, courses etc."
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="💬 Ask me about"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="react, vue and gsap"
                className="outline-none border-b-2 w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="📫 How to reach me"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="example@gmail.com"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="👨‍💻 All of my projects are available at"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="portfolio link"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="📝 I regularly write articles on"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="blog link"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="📄 Know about my experiences"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="resume link"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex justify-center gap-[5vw]   max-sm:gap-2 max-sm:flex-col">
            <div>
              <input
                value="⚡ Fun fact"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw] px-1 text-gray-600"
              />
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="i think i am crazy"
                className="outline-none border-b-2    w-[35vw]  max-sm:w-[80vw]"
              />
            </div>
          </div>
          <div className="flex flex-row gap-10 pt-4 w-full justify-center mb-3">
            <Link
              className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md max "
              href="/firstpage"
            >
              <AiOutlineLeft />
              Prev
            </Link>
            <Link
              className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md"
              href="/thirdpage"
            >
              Next
              <AiOutlineRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondpage;
