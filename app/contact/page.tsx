"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillBuildingFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

//이메일 관련
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCircleCheck } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import Modal from "@/components/modal";

export default function ContactPage() {
  const parts = [
    "반갑습니다!",
    "고객님의 니즈에 맞는 서비스를",
    "제작해드리겠습니다 :)",
  ];

  const SUCCESS = "#3b82f6";
  const FAIL = "#C5C6C7";
  const BTN_SUCCESS = "bg-blue-500";
  const BTN_FAIL = "bg-gray-500";

  const form = useRef<HTMLFormElement>(null);
  const [isModalOpen, setModalOpen] = useState(false); // 모달은 기본적으로 닫힘
  const [modalMessage, setModalMessage] = useState(
    `<span class="font-bold text-2xl">메일이 성공적으로 전송되었습니다.</span><br /><p class="text-gray-400 mt-2">빠른 시일내에 담당자가 연락할 예정입니다.</p>`
  );
  const [modalIcon, setModalIcon] = useState(<FaCircleCheck />);
  const [modalIconColor, setModalIconColor] = useState(SUCCESS); // 초기 아이콘 색상 설정
  const [btnColor, setBtnColor] = useState(BTN_SUCCESS); // 성공을 기본적으로 세팅

  const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY || "";

  const sendEmail = async (e) => {
    e.preventDefault();

    if (form.current) {
      try {
        await emailjs.sendForm(
          serviceId,
          templateId,
          form.current as HTMLFormElement,
          publicKey
        );
        console.log("성공");
        setModalMessage(
          `<span class="font-bold text-2xl">메일이 성공적으로 전송되었습니다.</span><br /><p class="text-gray-400 mt-2">빠른 시일내에 담당자가 연락할 예정입니다.</p>`
        );
        setModalIcon(<FaCircleCheck />);
        setModalIconColor(SUCCESS); // 성공 아이콘 색상 설정
        setBtnColor(BTN_SUCCESS);
        setModalOpen(true);
      } catch (error) {
        console.error(error, "실패");
        setModalMessage(
          `<span class="font-bold text-2xl">메일 전송에 실패하였습니다.</span><br /><p class="text-gray-400 mt-2">새로고침 후 다시 한 번 시도해주세요.</p>`
        );
        setModalIcon(<RiErrorWarningFill />);
        setModalIconColor(FAIL); // 실패 아이콘 색상 설정
        setBtnColor(BTN_FAIL);
        setModalOpen(true);
      }
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <section className="lg:mt-18 min-h-screen flex flex-col gap-14 lg:flex-row px-3 sm:px-8 md:px-12 lg:px-15 xl:px-20 justify-center items-center">
        <div className="flex-grow lg:h-80 lg:w-1/3 md:text-md mb-8 flex flex-col justify-center items-end">
          {parts.map((part, index) => (
            <h2 key={index} className="text-4xl font-semibold">
              {part}
            </h2>
          ))}
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="border-t-gray-100 flex-grow w-2/5 py-6 px-4 rounded-lg shadow-2xl hover:-translate-y-2 transition-all"
        >
          <div className="w-full flex gap-3 mb-2.5">
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="name" className="font-thin">
                작성자
              </label>
              <input
                className="font-extralight bg-gray-100 rounded-md pl-4 py-2 outline-none"
                required
                type="text"
                name="name"
                placeholder="작성자명"
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
            type="submit"
            className="right-0 border-2 w-full border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white transition-colors py-2 px-6 mt-5 rounded-lg"
          >
            전송하기
          </button>
        </form>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          message={modalMessage}
          icon={modalIcon}
          iconColor={modalIconColor} // 아이콘 색상 prop 추가
          btnColor={btnColor}
        />
      </section>

      <section className="h-screen flex flex-col lg:flex-row items-center justify-center gap-14">
        <div className="bg-green-200 w-[500px] h-[500px]">{/* 지도 */}</div>
        <div className="h-96 px-14 py-28 flex flex-col justify-center gap-10 bg-white rounded-lg shadow-2xl hover:-translate-y-6 transition-all">
          <div className="md:text-md text-left">
            <h1 className="text-3xl font-semibold">
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
                광주광역시 동구 동계천로 150 IPLEX 2층 205호-4
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
