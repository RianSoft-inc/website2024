import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gray-100 mt-24 py-8 flex flex-col items-center">
      {/* Logo */}
      <Image
        src="/image/RianSoft 로고 5.png"
        width={100}
        height={50}
        alt="리안소프트"
      />
      <p className="mt-2 text-neutral-500 font-thin">
        &copy; 2024 RIANSOFT Corporation. All Rights Reserved.{" "}
      </p>
    </div>
  );
}
