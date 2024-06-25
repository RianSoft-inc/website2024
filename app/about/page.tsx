export default function About() {
    return (
      <div>
        <section className='h-screen bg-white flex flex-col items-center justify-center gap-16'> {/* 센터 정렬을 위한 flex 속성 추가 */}
          <div className=' self-center text-center'>
            <h2 className='mb-4 text-2xl text-blue-700'>기술과 인간을 이어주는 <span className='bg-blue-200'>"징검다리"</span></h2>
            <h3 className='mb-3 text-xl'>현대의 세상은 너무나도 빠르게 변합니다. </h3>
            <h3 className='text-xl'>이 세상에서 저희는 혁신적인 소프트웨어 솔루션을 통해</h3> 
            <h3 className='text-xl my-1'><span className='bg-blue-600 text-white px-1 py-0.5'>사람들이 더 편리하게 소통하고,</span></h3>
            <h3 className='text-xl my-1'><span className='bg-blue-600 text-white px-1 py-0.5'>업무를 더 효율적으로 처리할 수 있도록</span> 돕겠습니다.</h3>
          </div>
          <div className='flex gap-5'>
            <div className='w-48 h-48 overflow-hidden relative hover:translate-y-5 transition-all'>
              <span className='absolute top-0 right-0 z-10 text-right text-2xl text-white p-5'>사용자<br />중심</span>
              <img src='../image/usercentered.jpeg' alt='a man looking at his client' className='transition-all absolute top-0 left-0 w-52 h-52 object-cover object-right-bottom'/> {/* 수정된 이미지 경로 */}
            </div>
            <div className='w-48 h-48 overflow-hidden relative hover:translate-y-5 transition-all'>
              <span className='absolute top-0 right-0 z-10 text-right text-2xl text-white p-5'>혁신적<br />사고</span>
              <img src='../image/innovation.jpeg' alt='robot' className='group-hover:scale-150 transition-all absolute top-0 left-0 w-52 h-52 object-cover object-center'/> {/* 수정된 이미지 경로 */}
            </div>
            <div className='w-48 h-48 overflow-hidden relative hover:translate-y-5 transition-all'>
              <span className='absolute top-0 right-0 z-10 text-right text-2xl text-white p-5'>쉬운<br/>경험</span>
              <img src='../image/easyexperience.png' alt='kids participate in experiments with excitement' className='group-hover:scale-150 transition-all absolute top-0 left-0 w-52 h-52 object-cover object-center'/> {/* 수정된 이미지 경로 */}
            </div>
            <div className='w-48 h-48 overflow-hidden relative hover:translate-y-5 transition-all'>
              <span className='absolute top-0 right-0 z-10 text-right text-2xl text-white p-5'>새로운<br />기술</span>
              <img src='../image/newtech.jpeg' alt='two little kids reading books' className='group-hover:scale-150 transition-all absolute top-0 left-0 w-52 h-52 object-cover object-center'/> {/* 수정된 이미지 경로 */}
            </div>
          </div>
        </section>
      </div>
    );
}
