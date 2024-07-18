"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillBuildingFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ChangeEvent, useState } from "react";
import dynamic from "next/dynamic";
import ErrorModal from "@/components/errorModal";

const KakaoMap = dynamic(() => import("@/components/kakaomap"), { ssr: false });

export default function ContactPage() {
  const [onModal, setOnModal] = useState(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOnModal(true);
  };

  const parts = [
    "반갑습니다!",
    "고객님의 니즈에 맞는 서비스를",
    "제작해드리겠습니다 :)",
  ];

  return (
    <div>
      <section className="lg:mt-16 sm:mt-28 min-h-screen flex flex-col gap-14 lg:flex-row px-3 sm:px-8 md:px-12 lg:px-15 xl:px-20 justify-center items-center">
        <div className="flex-grow lg:h-80 lg:w-1/3 mb-8 flex flex-col justify-center items-end">
          {parts.map((part, index) => (
            <h2
              key={index}
              className="md:text-4xl sm:text-2.5xl text-3xl font-semibold  "
            >
              {part}
            </h2>
          ))}
        </div>

        <form className="border-t-gray-100 flex-grow w-2/5 py-6 px-4 rounded-lg shadow-2xl hover:-translate-y-2 transition-all">
          <div className="w-full flex gap-3 mb-2.5">
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="name" className="font-thin">
                작성자
              </label>
              <input
                className="font-extralight bg-gray-100 rounded-md pl-4 py-2 outline-none"
                type="text"
                name="name"
                placeholder="작성자명"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="email" className="font-thin">
                이메일
              </label>
              <input
                className="font-extralight bg-gray-100 rounded-md pl-4 py-2 outline-none"
                required
                type="email"
                name="email"
                placeholder="email@email.com"
              />
            </div>
          </div>
          <div className="w-full flex gap-3 mb-2.5">
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="phone" className="font-thin">
                연락처
              </label>
              <input
                className="font-extralight bg-gray-100 rounded-md pl-4 py-2 outline-none"
                required
                type="tel"
                name="phone"
                placeholder="010-1234-1234"
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="title" className="font-thin">
                제목
              </label>
              <input
                className="font-extralight bg-gray-100 rounded-md pl-4 py-2 outline-none"
                required
                type="text"
                name="title"
                placeholder="문의 제목"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="contents" className="font-thin">
              내용
            </label>
            <textarea
              className="font-extralight bg-gray-100 rounded-md pl-4 py-2 outline-none"
              required
              rows={6}
              name="contents"
              placeholder="문의 상세내용"
            />
          </div>
          <span className="text-red-500 font-medium hidden peer-invalid:block">
            빠진 내용이 있는지 한 번 더 확인해주세요.
          </span>
          <button
            type="button"
            onClick={() => setOnModal(true)}
            className="btn right-0 border-2 w-full border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white transition-colors py-2 px-6 mt-5 rounded-lg"
          >
            전송하기
          </button>
        </form>
      </section>

      <ErrorModal isOpen={onModal} onClose={() => setOnModal(false)} />

      <section className="h-screen flex flex-col lg:flex-row items-center justify-center gap-14 sm:gap-34 sm:mt-15">
        <div className="bg-green-200 w-[500px] h-[500px] sm:w-[440px] sm:h-[320px]">
          <KakaoMap />
        </div>
        <div className="h-96 sm:h-76 px-14 py-28 flex flex-col justify-center gap-10 bg-white rounded-lg shadow-2xl hover:-translate-y-6 transition-all sm:mt-40">
          <div className="md:text-md text-left">
            <h1 className="text-3xl sm:text-2xl font-semibold">
              편안한 분위기에서 <br /> 유익한 만남을 가질 수 있도록, <br />
              여러분을 기다리고 있겠습니다.
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <FaPhoneAlt size={24} color="#00BF63" />
              <span className="text-neutral-500 font-extralight">
                010-5787-0553
              </span>
            </div>
            <div className="flex gap-2">
              <BsFillBuildingFill size={24} color="#00BF63" />
              <span className="text-neutral-500 font-extralight">
                광주광역시 동구 동계천로 150 IPLEX 1층 109호
              </span>
            </div>
            <div className="flex gap-2">
              <MdEmail size={24} color="#00BF63" />
              <span className="text-neutral-500 font-extralight">
                info@riansoft.io
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
