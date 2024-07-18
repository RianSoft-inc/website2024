"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import RianSoftImage from "@/public/리안소프트3.png";

export default function AboutFirstPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-full flex justify-center">
      <div className="flex flex-col absolute sm:left-16 md:translate-x-1/4 lg:translate-x-3/7 max-sm:left-16">
        <Image
          src="/image/RianSoft로고.png"
          alt="회사로고"
          width={isSmallScreen ? 40 : 90}
          height={isSmallScreen ? 40 : 90}
        />
        <h1 className="mt-3 sm:text-7xl max-sm:text-4xl md:text-8xl lg:text-9xl xl:text-10xl max-xl:text-13xl font-black leading-none">
          리안
          {isSmallScreen ? "" : <br />}
          소프트
        </h1>
        <p className="z-20 sm:bg-slate-800 sm:text-white text-center bg-transparent">
          기술로 인간의 이로움과 편안함을 추구합니다.
        </p>
      </div>

      <Image
        src="/image/리안소프트4.png"
        alt="회사이미지"
        width={1200}
        height={850}
        style={{ transform: "translateY(60px)" }}
      />
    </div>
  );
}
