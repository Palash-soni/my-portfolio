import React from "react";
import "./Marquee.css";
import { motion } from "motion/react";


const Skills = () => {
  return (
    <div className="h-full w-full bg-slate-900 flex flex-col items-center gap-10 lg:gap-10 md:gap-20"
    >
      <div className="h-1 md:h-10 lg:h-0"></div>
      <div className="text-5xl text-white font-semibold z-15">Skills</div>
      
     

      <div className="w-85 lg:w-320 md:w-200 flex flex-col gap-9 lg:gap-5">

        <div className="marquee">
          <div className="marquee__content" aria-hidden="true">
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://images.icon-icons.com/171/PNG/512/html5_23329.png')] bg-contain bg-no-repeat bg-center"></div>
              HTML
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://cdn-icons-png.flaticon.com/512/732/732190.png')] bg-contain bg-no-repeat bg-center"></div>
              CSS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png')] bg-contain bg-no-repeat bg-center"></div>
              Tailwind CSS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png')] bg-cover bg-no-repeat bg-center"></div>
              JavaScript
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://miro.medium.com/1*CtHRfxjyXRAADIS8gue9nw.png')] bg-contain bg-no-repeat bg-center"></div>
              React JS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png')] bg-contain bg-no-repeat bg-center"></div>
              Framer Motion
            </div>
            
          </div>
          
          <div className="marquee__content">
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://images.icon-icons.com/171/PNG/512/html5_23329.png')] bg-contain bg-no-repeat bg-center"></div>
              HTML
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://cdn-icons-png.flaticon.com/512/732/732190.png')] bg-contain bg-no-repeat bg-center"></div>
              CSS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png')] bg-contain bg-no-repeat bg-center"></div>
              Tailwind CSS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png')] bg-cover bg-no-repeat bg-center"></div>
              JavaScript
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://miro.medium.com/1*CtHRfxjyXRAADIS8gue9nw.png')] bg-contain bg-no-repeat bg-center"></div>
              React JS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png')] bg-contain bg-no-repeat bg-center"></div>
              Framer Motion
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee__contentrev">
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174935.png')] bg-cover bg-no-repeat bg-center"></div>
              NodeJS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://cdn.worldvectorlogo.com/logos/expressjs.svg')] bg-contain bg-no-repeat bg-center"></div>
              Express JS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/919/919830.png')] bg-contain bg-no-repeat bg-center"></div>
              PHP
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-svg-download-png-3030165.png')] bg-cover bg-no-repeat bg-center"></div>
              MySQL
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivXCkaET9d6hHwTXDxxR8Lw5Vql5cUqrkAg&s')] bg-contain bg-no-repeat bg-center"></div>
              MongoDB
            </div>
          </div>
          <div className="marquee__contentrev">
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7  bg-[url('https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174935.png')] bg-cover bg-no-repeat bg-center"></div>
              NodeJS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://cdn.worldvectorlogo.com/logos/expressjs.svg')] bg-contain bg-no-repeat bg-center"></div>
              Express JS
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/919/919830.png')] bg-contain bg-no-repeat bg-center"></div>
              PHP
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-svg-download-png-3030165.png')] bg-cover bg-no-repeat bg-center"></div>
              MySQL
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivXCkaET9d6hHwTXDxxR8Lw5Vql5cUqrkAg&s')] bg-contain bg-no-repeat bg-center"></div>
              MongoDB
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee__content" aria-hidden="true">
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/226/226777.png')] bg-contain bg-no-repeat bg-center"></div>
              Java
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://static.vecteezy.com/system/resources/previews/048/332/171/non_2x/c-programming-icon-free-png.png')] bg-contain bg-no-repeat bg-center"></div>
              C
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/500px-ISO_C%2B%2B_Logo.svg.png')] bg-contain bg-no-repeat bg-center"></div>
              C++
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png')] bg-cover bg-no-repeat bg-center"></div>
              C#
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://img.icons8.com/color/512/python.png')] bg-contain bg-no-repeat bg-center"></div>
              Python
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://cdn-icons-png.flaticon.com/512/5968/5968389.png')] bg-contain bg-no-repeat bg-center"></div>
              VB
            </div>
          </div>
          <div className="marquee__content" aria-hidden="true">
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/226/226777.png')] bg-contain bg-no-repeat bg-center"></div>
              Java
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://static.vecteezy.com/system/resources/previews/048/332/171/non_2x/c-programming-icon-free-png.png')] bg-contain bg-no-repeat bg-center"></div>
              C
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/500px-ISO_C%2B%2B_Logo.svg.png')] bg-contain bg-no-repeat bg-center"></div>
              C++
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png')] bg-cover bg-no-repeat bg-center"></div>
              C#
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://img.icons8.com/color/512/python.png')] bg-contain bg-no-repeat bg-center"></div>
              Python
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://cdn-icons-png.flaticon.com/512/5968/5968389.png')] bg-contain bg-no-repeat bg-center"></div>
              VB
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee__contentrev">
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png')] bg-contain bg-no-repeat bg-center"></div>
              VS Code
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://www.svgrepo.com/show/354202/postman-icon.svg')] bg-contain bg-no-repeat bg-center"></div>
              Postman
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://static.thenounproject.com/png/1430829-200.png')] bg-contain bg-no-repeat bg-center"></div>
              DSA
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://www.svgrepo.com/show/303548/git-icon-logo.svg')] bg-cover bg-no-repeat bg-center"></div>
              Git
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/25/25231.png')] bg-contain bg-no-repeat bg-center"></div>
              Git Hub
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/6124/6124995.png')] bg-contain bg-no-repeat bg-center"></div>
              Linux
            </div>
          </div>
          <div className="marquee__contentrev">
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png')] bg-contain bg-no-repeat bg-center"></div>
              VS Code
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 bg-[url('https://www.svgrepo.com/show/354202/postman-icon.svg')] bg-contain bg-no-repeat bg-center"></div>
              Postman
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://static.thenounproject.com/png/1430829-200.png')] bg-contain bg-no-repeat bg-center"></div>
              DSA
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://www.svgrepo.com/show/303548/git-icon-logo.svg')] bg-cover bg-no-repeat bg-center"></div>
              Git
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/25/25231.png')] bg-contain bg-no-repeat bg-center"></div>
              Git Hub
            </div>
            <div
              className="bg-slate-800 text-white leading-10 rounded-xl flex gap-2 items-center justify-between"
              style={{
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "20px",
              }}
            >
              <div className="h-7 w-7 rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/6124/6124995.png')] bg-contain bg-no-repeat bg-center"></div>
              Linux
            </div>
          </div>
        </div>

        
      </div>
      <div className="h-10"></div>
    </div>
  );
};

export default Skills;
