import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navigation";
import Footer from "@/components/footer";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "리안소프트",
  description: "고객이 만족하는 기술로 소프트웨어를 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        <div className="w-screen h-screen">
          <div className="bg-white fixed top-0 left-0 w-full h-18 z-20 shadow-md">
            <Navbar />
          </div>
          <div className="h-[calc(100vh - 3rem)]">{children}</div>
          <div className="h-24 w-screen bottom-0 left-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
