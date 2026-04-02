import { motion } from "motion/react";
import { div, style } from "motion/react-client";
import React from "react";
import ProjectCards from "./components/ProjectCards";
import ToDoImage from "./assets/ToDo.png";
import ConnectUsImg from "./assets/ConnUs.png";
import PortfolioIMG from "./assets/Portfolio.png";
import ATMimg from "./assets/ATM.png";
import HotelImg from "./assets/HotelRest.png";

const Projects = () => {
  // const redir = (url) => {
  //   window.open(url, "_blank");
  // };

  const projectData = [
    {
      Name: "My Portfolio",
      Description:
      "A modern and responsive developer portfolio website built using React.js, Tailwind CSS, and Framer Motion for smooth animations and interactive user experience. The website showcases my projects, skills, and technical journey with clean UI design principles and optimized performance. This project highlights my frontend development skills, component-based architecture understanding, animation integration, and responsive design practices.",
      ImagePath: PortfolioIMG,
      URL: "https://palashsoni.vercel.app/",
      gitURL: "https://github.com/Palash-soni/my-portfolio",
      direction: "LTR",
      iFrame: true,
      Line: true,
    },
    {
      Name: "Connect Us App",
      Description:
        "ConnectUs is a social media web application developed using PHP and MySQL to practice backend logic and database management. The platform includes essential social networking features such as user registration, login authentication, profile management, posting stories and updates, and interaction between users. This project helped enhance my server-side programming skills, database design knowledge, and understanding of session handling and CRUD operations.",
      ImagePath: ConnectUsImg,
      URL: "https://connectus.great-site.net",
      gitURL: "https://github.com/Palash-soni/ConnectUs",
      direction: "RTL",
      iFrame: false,
      Line: true,
    },
    {
      Name: "Hotel and Restaurant Management System",
      Description:
        "A full-stack Hotel and Restaurant Management System developed as my major college project using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for modern UI design. The application streamlines hotel and restaurant operations through dedicated role-based modules including Customer, Admin, Waiter, and Receptionist. Features include table booking, order management, billing system, room management, user authentication (JWT), and real-time data handling. The project demonstrates my ability to design scalable architectures, implement REST APIs, manage complex workflows, and build responsive user interfaces.",
      ImagePath: HotelImg,
      URL: "",
      gitURL: "https://github.com/Palash-soni/ConnectUs",
      direction: "LTR",
      iFrame: false,
      Line: true,
    },
    {
      Name: "To-Do App",
      Description:
        "A beginner-friendly To-Do List Application developed using React.js to strengthen my understanding of core frontend concepts such as component structure, state management, event handling, and dynamic rendering. The application allows users to add, delete, and manage daily tasks efficiently, demonstrating foundational React development skills and clean UI implementation.",
      ImagePath: ToDoImage,
      URL: "http://to-do-application-reactjs-palash-soni.netlify.app",
      gitURL: "https://github.com/Palash-soni/To-Do-Application-React",
      direction: "RTL",
      iFrame: true,
      Line: true,
    },
    {
      Name: "Basic ATM Application",
      Description:
        "A basic ATM Simulation System created using PHP and MySQL implementing core ATM functionalities such as user authentication, balance inquiry, deposit, withdrawal, and transaction history management. The project focuses on backend logic development, secure database interaction, and simulation of real-world banking operations while strengthening my fundamentals in PHP programming and database connectivity.",
      ImagePath: ATMimg,
      URL: "https://basic-atm-application.great-site.net/",
      gitURL: "https://github.com/Palash-soni/Basic-ATM-Web-Application",
      direction: "LTR",
      iFrame: false,
      Line: false,
    },
  ];

  return (
    <div className="h-fit w-full bg-slate-900 flex flex-col gap-10 items-center">
      <div></div>
      <div className="text-5xl text-white font-semibold z-15">Projects</div>
      <div className="z-2 w-60 bg-white h-1 z-15"></div>
      <div></div>
      <div className="z-2 w-screen flex flex-col gap-10 items-center z-15">
        {projectData.map((prjData,idx) => (
          <div
            className="z-2 w-[95%] flex flex-col gap-10 items-center"
            style={{ padding: "0px" }}
            key={idx}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className=" w-full "
              style={{ backgroundColor: "rgba(1, 1, 31, 0.3)" }}
            >
              <ProjectCards data={prjData} />
            </motion.div>
            {prjData.Line && <div className="w-[90%] bg-amber-50 h-[0.5px]"></div>}
          </div>
        ))}
      </div>
      <div className="h-50"></div>
      {/* <div></div> */}
    </div>
  );
};

export default Projects;
