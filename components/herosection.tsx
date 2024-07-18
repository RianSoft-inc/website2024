export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center pt-25 px-10 gap-10">
      <div className="w-10/12 h-full rounded-xl overflow-hidden flex justify-center items-center">
        <video
          autoPlay
          muted
          loop
          className="w-full -translate-y-1/5 object-cover object-center"
        >
          <source src="../image/foot.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=" top-32 right-40 flex flex-col justify-center items-start">
        <h2 className="text-5xl font-semibold">
          새로운 기술로{" "}
          <span className="bg-green-400 inline-block h-10">인간이 이롭게,</span>
        </h2>
        <h2 className="text-5xl font-semibold">
          <span className="bg-green-400 inline-block h-10">
            고객이 만족하는
          </span>{" "}
          소프트웨어를 제공합니다.
        </h2>
        <h5 className="text-3xl drop-shadow-2xl mt-5 ml-5">
          주식회사 리안소프트
        </h5>
      </div>
    </section>
  );
}
