import { Progress } from "flowbite-react";
import { Construction, GitForkIcon, Link } from "lucide-react";
import { scale } from "motion";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const ProjectCards = ({ data }) => {
  const redir = (url) => {
    window.open(url, "_blank");
  };

  const [direction, setDirection] = useState("");
  useEffect(() => {
   
    if (data.direction === "LTR") {
      setDirection("flex-col lg:flex-row");
    } else {
      setDirection("flex-col lg:flex-row-reverse");
    }
  });
  return (
    <div
      className={`w-full flex ${direction} justify-around gap-10 lg:gap-0 z-21`}
      style={{ padding: "30px" }}
    >
      <div className="">
        {/* <motion.img src={data.ImagePath} alt="To Do Image" className='cursor-pointer w-120'
        whileHover={{
          scale:1.03
        }}
        /> */}
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="w-[95%] lg:w-100 h-55 lg:h-62 rounded-xl overflow-hidden z-21"
        >
          {data.iFrame ? (
            <div>
              <iframe
              src={data.URL}
              frameBorder="0"
              className="cursor-pointer z-21 h-140 w-190 lg:h-125 lg:w-200 scale-40 lg:scale-50 hidden lg:block"
              style={{
                
               
                transformOrigin: "top left",
              }}
            >Live Preview Not Available</iframe>

            <motion.img
              src={data.ImagePath}
              alt="To Do Image"
              className="cursor-pointer w-full scale-135 lg:hidden z-21"
              style={{ transformOrigin: "center" }}
              whileHover={{
                scale: 1.03,
              }}
            />
            </div>
          ) : (
            <motion.img
              src={data.ImagePath}
              alt="To Do Image"
              className="cursor-pointer w-full scale-135 z-22"
              style={{ transformOrigin: "top" }}
              whileHover={{
                scale: 1.03,
              }}
            />
          )}
        </motion.div>
      </div>
      <div className="w-[90%] lg:w-180 flex flex-col gap-5 ">
        <div className="text-3xl text-white font-semibold z-2 w-full">{data.Name}</div>
        <div className="text-md text-white z-2">
          {data.Description}
        </div>
        <div className="flex gap-10 flex-col md:flex-row">
          <motion.button
            onClick={() => {

              if(data.URL){
                redir(data.URL);
              }
            }}
            whileHover={{
              scale: 1.02,
            }}
            className={`bg-white w-50 text-xl z-2 font-semibold flex h-12 items-center justify-around rounded-2xl ${data.URL?"cursor-pointer":"cursor-not-allowed"}`}
          >
            {data.URL?"View Live":"In Progress"} 
            {data.URL?(<Link color="black" />):(<Construction color="black" />)} 
          </motion.button>
          <motion.button
            onClick={() => {
              redir(data.gitURL);
            }}
            whileHover={{
              scale: 1.02,
            }}
            className={`bg-white w-50 text-xl z-2 font-semibold flex h-12 items-center justify-around rounded-2xl cursor-pointer ${!data.URL&&"hidden"}`}
          >
            GitHub <GitForkIcon color="black" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
