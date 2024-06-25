export default function Hero() {
  return (
      <section className='h-screen flex justify-center items-center pt-32'> 
          <div className='absolute top-32 right-40 flex flex-col justify-center items-end'>
              <h2 className='text-5xl' style={{ fontFamily: "'Happiness-Sans-Title', sans-serif" }}>새로운 기술로 <span className='bg-green-400 inline-block h-12'>인간이 이롭게,</span></h2>
              <h2 className='text-5xl' style={{ fontFamily: "'Happiness-Sans-Title', sans-serif" }}><span className='bg-green-400 inline-block h-12'>고객이 만족하는</span> 소프트웨어를 제공합니다.</h2>
              <h5 className='text-3xl drop-shadow-2xl mt-5'>
              주식회사 리안소프트</h5>
          </div>
          <div className='w-10/12 h-1/2 rounded-xl relative overflow-hidden flex justify-center items-center bg-blue-300'>
              <video autoPlay muted loop className="absolute top-0 left-0 w-full -translate-y-52 object-cover object-center">
                  <source src="../image/foot.mp4" type='video/mp4' />
              </video>
          </div>
      </section>
  );
}
