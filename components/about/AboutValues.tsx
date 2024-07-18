import React from "react";

export default function AboutValues() {
  return (
    <div className="h-full p-12">
      <p className="font-extralight text-lg text-gray-400 mb-20">회사 가치</p>

      <div className="h-120 grid grid-rows-2 grid-cols-2 gap-2 md:max-w-2xl mx-auto">
        <div className=" grid grid-cols-3">
          <div className="col-span-2 flex justify-end items-center text-11xl font-bold">
            便
          </div>
          <div className="vertical-rl flex items-end mt-8 ml-5 text-xl font-extralight">
            편할 편
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex justify-end items-center text-11xl font-bold">
            易
          </div>
          <div className="vertical-rl flex items-end mt-8 ml-5 text-xl font-extralight">
            쉬울 이
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex justify-end items-center text-11xl font-bold">
            愉
          </div>
          <div className="vertical-rl flex items-end  mt-8 ml-5 text-xl font-extralight">
            즐거울 유
          </div>
        </div>
        <div className="bg-gray-200 grid grid-cols-3">
          <div className="col-span-3 text-lg font-semibold leading-relaxed flex justify-center items-center max-sm:px-4">
            리안과 함께라면, <br />
            사용이 편리하고 쉬우며 <br />
            즐거움을 느낄 수 있습니다.
            <br />
            <br />
            리안은 편리하고,
            <br />
            쉽고, 재밌습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
