import React, { useRef, useState } from "react";
import Resume from "./assets/Palash_Resume.pdf";
import "./Nav.css";

const Navbar = ({ highlight, onHome, onProjects, onSkills, onContact }) => {
 

  return (
    <>
    <div className="h-15 w-screen flex items-center justify-center" >
      <nav className="sm:w-full md:w-auto rounded-b-full flex items-center justify-center" style={{padding:"20px",paddingLeft:"90px",paddingRight:"90px"}}>
        
          
          <div className=" flex justify-evenly items-center gap-6 md:gap-10 leading-10 md:text-xl font-semibold ">
            <a
              onClick={onHome}
              className={`${
                highlight === "Home" ? "text-blue-300" : "text-white"
              }`}
            >
              Home
            </a>
            <a
              onClick={onProjects}
              className={`${
                highlight === "Projects" ? "text-blue-300" : "text-white"
              }`}
            >
              Projects
            </a>
            <a
              onClick={onSkills}
              className={`${
                highlight === "Skills" ? "text-blue-300" : "text-white"
              }`}
            >
              Skills
            </a>
            <a
              onClick={onContact}
              className={`${
                highlight === "Contact" ? "text-blue-300" : "text-white"
              }`}
            >
              Contact
            </a>
            <div className="hidden md:block"> <a
              // href="./assets/Portfolio.png"
              href={Resume}
              download=""
            >
              <button className="leading-8 text-lg bg-transparent hover:bg-white text-white hover:text-slate-800  font-bold rounded-3xl cursor-pointer border-2 border-white" style={{paddingLeft:"10px",paddingRight:"10px"}}>
                <span className="font-semibold"><i className="fa-solid fa-circle-down"></i></span> <span className="hidden md:inline">Download</span> CV
              </button>
            </a></div>
           
          </div>
         
      
      </nav>
      </div>
    </>
  );
};

export default Navbar;
