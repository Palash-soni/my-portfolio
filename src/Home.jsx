import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
import Resume from "./assets/Palash_Soni_Resume.pdf";




const Home = ({ onContact }) => {
  return (
    <>
      <div className="h-[90vh] md:h-150 lg:h-screen w-full bg-transparent flex flex-col items-center justify-center gap-15 md:gap-18 lg:gap-20 md:flex-row">
       
        <motion.div
        animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity
            }}
        className="h-60 lg:h-90 w-60 lg:w-90 bg-white rounded-full bg-[url('./assets/PalImgFr.png')] bg-contain bg-no-repeat bg-center z-21 drop-shadow-xl drop-shadow-blue-300"></motion.div>
        <div className="md:hidden"></div>
        <div
          className="text-3xl text-white h-20 leading-15 flex flex-col items-start justify-center gap-2 md:gap-4 z-21 lg:text-7xl text-shadow-sm text-shadow-black font-bold"
          style={{ paddingTop: "14px" }}
        >
          <span className="text-2xl md:text-3xl lg:text-4xl">Hi, I'm</span>
          <span className="text-5xl md:text-6xl lg:text-7xl text-blue-300 font-semibold">
            Palash Soni
          </span>
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            <span>And I'm a </span>

            <span className="text-green-400  ">
              <ReactTyped
                strings={["Developer", "Coder", "Learner"]}
                typeSpeed={90}
                backSpeed={50}
                loop
              />
            </span>
          </div>

          <div className="text-3xl flex gap-3 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/palashsoni28"
              className="text-gray-400 hover:text-white"
              title="LinkedIn"
            >
              <i className="fa-brands fa-square-linkedin"></i>
            </a>
            <a
              href="https://github.com/Palash-soni"
              className="text-gray-400 hover:text-white"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-white"
              title="LeetCode"
            >
              <i className="fa-solid fa-terminal"></i>
            </a>
          </div>
          <div className="h-2 bg-transparent text-transparent md:hidden ">sdj</div>

          <div style={{ marginTop: "-10px" }}>
            <div className="hidden md:block">
              <a onClick={onContact}>
              <button className=" text-2xl bg-white text-slate-800  font-bold rounded-3xl cursor-pointer" style={{padding:"7px",paddingLeft:"18px",paddingRight:"18px"}}>
                <i className="fa-solid fa-phone"></i> Contact Me
              </button>
            </a> 
            </div>
            

            <div className="block md:hidden"> <a
              href={Resume}
              download="Palash_Soni"
            >
              <button className=" text-2xl bg-white text-slate-800  font-bold rounded-3xl cursor-pointer" style={{padding:"7px",paddingLeft:"18px",paddingRight:"18px"}}>
                <span className="font-semibold"><i className="fa-solid fa-circle-down"></i></span> <span className="inline md:hidden">Download</span> CV
              </button>
            </a></div>
          </div>
        </div>
      </div>
      <div className="h-20 md:hidden"></div>
    </>
  );
};

export default Home;
