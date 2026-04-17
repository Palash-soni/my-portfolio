import Aurora from "./Aurora";
import React, { useEffect, useRef, useState} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Snowfall from "react-snowfall";
import Footer from "./Footer";

// const HeavyComponent = lazy(() => import('./Projects.jsx'));

// import { useInView } from 'react-intersection-observer'

const App = () => {
  const [currView, setCurrView] = useState("Home");
  const Projectsref = useRef(null);
  const Homeref = useRef(null);
  const Skillsref = useRef(null);
  const Contactref = useRef(null);

  const snowflake1 = document.createElement('img')
snowflake1.src = './assets/To-Do.png'


const imgs = [snowflake1]

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.6,
      rootMargin: "-40px 0px 0px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrView(entry.target.dataset.section);
        }
      });
    }, options);

    const sections = [Homeref, Projectsref, Skillsref, Contactref];

    sections.forEach((ref) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  return (
    <div className=" bg-slate-900">
      <div className="fixed z-5 top-0 h-screen w-screen">
        <Aurora
          color1="#ccccff"
          color2="#3333ff"
          color3="#000033"
          // color3="#000000"
          speed={0.8}
          blend={0.5}
          amplitude={1}
        />
      </div>
      <div className="fixed top-0 z-50">
        <Navbar
          highlight={currView}
          onHome={() => {
            scrollTo(Homeref);
          }}
          onProjects={() => {
            scrollTo(Projectsref);
          }}
          onSkills={() => {
            scrollTo(Skillsref);
          }}
          onContact={() => {
            scrollTo(Contactref);
          }}
        />
      </div>

{/* 
<Suspense fallback={<div>Loading component...</div>}>
        <HeavyComponent />
      </Suspense> */}


      <div ref={Homeref} className="scroll-mt-[80px] md:snap-start" data-section="Home" >
        <Home onContact={() => {
            scrollTo(Contactref);
          }} />
      </div>
      <div
        ref={Projectsref}
        className="scroll-mt-[80px] md:snap-start" data-section="Projects"
      >
        <Projects />
      </div>
      <div ref={Skillsref} className="scroll-mt-[80px] md:snap-start" data-section="Skills">
        <Skills />
      </div>
      <div ref={Contactref} className="scroll-mt-[80px] md:snap-start" data-section="Contact">
        <Contact />
      </div>
      <div className="md:snap-start">
        <Footer />
      </div>
      <Snowfall
        snowflake="</>"
        snowflakeCount={30}
        // images={imgs}
        // color="#000000"
        enable3DRotation
       
        style={{
          fontFamily: "monospace",
          fontSize: "18px",
          zIndex: 2,
          position: "fixed",
        }}
      />
    </div>
  );
};

export default App;
