// const AboutRian: React.FC = () => {
const AboutRian = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView({ triggerOnce: false });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  // const descriptionVariants = {
  //   hidden: { opacity: 0, x: 100 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { ease: "easeInOut", duration: 1 },
  //   },
  // };

  // const pictureVariants = {
  //   hidden: { opacity: 0, x: 100 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  // };

  return (
    <div className="h-full p-12">
      <p className="font-extralight text-lg text-gray-400 mb-20">회사 철학</p>
      {/* <motion.div
        // className="flex-1"
        initial="hidden"
        animate={controls}
        variants={pictureVariants}
      > */}
      <div className="relative flex justify-center items-center">
        {/* 초록색 원형 */}
        <div className="md:h-[300px] md:w-[300px] sm:w-[280px] sm:h-[280px] max-sm:translate-x-10 rounded-full bg-green-500 ml-14 w-56 h-56"></div>
        {/* 글씨 - 리안 */}
        <div className="absolute -translate-x-10 max-sm:translate-x-5 flex justify-center items-center">
          <div className="flex-col">
            <h2 className="md:text-14xl sm:text-12xl text-10xl font-bold">
              利
            </h2>
            <p className="-mt-10 text-gray-700 text-center">이로울 리</p>
          </div>
          <div className="flex-col">
            <h2 className="md:text-14xl sm:text-12xl text-10xl font-bold">
              安
            </h2>
            <p className="-mt-10 text-gray-700 text-center">편안할 안</p>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default AboutRian;
