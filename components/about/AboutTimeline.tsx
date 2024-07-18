import React from "react";

export default function AboutTimeline() {
  return (
    <div className="h-full p-12 sm:flex-col ">
      <p className="font-extralight text-lg text-gray-400 mb-20">회사 연혁</p>
      {/* 타임라인 시작 */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact sm:px-48 max-sm:px-24 timeline-vertical sm:mx-auto">
        {/* 첫 번째 타임라인 시작 */}
        <li>
          {/* 첫 번째 타임라인 도형 시작 */}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-100"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* 첫 번째 타임라인 도형 끝*/}
          {/* 첫 번째 타임라인 글 시작*/}
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023.07</time>
            <div className="text-lg font-black">팀 두리안 결성</div>
            {/* <p className="bg-blue-200 text-white p-0.5 text-center w-20 rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-md">
              Do!Rian
            </p> */}
          </div>
          {/* 첫 번째 타임라인 글 끝*/}

          <hr className="bg-green-100" />
        </li>
        {/* 첫 번째 타임라인 끝 */}
        <li>
          <hr className="bg-green-100" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-200"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023.11</time>
            <div className="text-lg font-black">타로 서비스 제작</div>
          </div>
          <hr className="bg-green-200" />
        </li>

        <li>
          <hr className="bg-green-200" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-300"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024.04.29</time>
            <div className="text-lg font-black">리안소프트(주) 설립</div>
          </div>
          <hr className="bg-green-300" />
        </li>

        <li>
          <hr className="bg-green-300" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-400"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2024.05</time>
            <div className="text-lg font-black">
              신규 인원 고용 및 인력 양성
            </div>
          </div>
          <hr className="bg-green-400" />
        </li>

        <li>
          <hr className="bg-green-400" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024.07~11</time>
            <div className="text-lg font-black">
              ICT AI 시제품 제작 지원 사업 참여
            </div>
            감성 분석 서비스 제작 중
          </div>
          <hr className="bg-green-500" />
        </li>
      </ul>
    </div>
  );
}
