import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { motion } from "motion/react";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.EMAILJS_PUBLIC_KEY,
        import.meta.env.EMAILJS_TEMPLATE_KEY,
        form.current,
        import.meta.env.EMAILJS_PRIVATE_KEY,
      )
      .then(() => {
        alert("Message Has been sent");
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <div className="h-full w-full bg-slate-900 flex flex-col gap-10 items-center">
      <div></div>
      <div className="text-5xl text-white z-2 font-semibold  z-15">Contact</div>
      <motion.div
            initial={{scale:0.5}}
    whileInView={{scale:1}}
    viewport={{once:true,amount:0.5}}
    transition={{duration:0.5}} 
      
      
      className="h-140 md:h-100 w-80 md:w-200 bg-slate-800 rounded-2xl flex flex-col-reverse items-center justify-center gap-10 md:items-stretch md:justify-center md:flex-row md:gap-10 z-20">
        <div className="flex flex-col gap-15 items-center ">
          <div className="hidden md:block"></div>
          <div className="text-4xl text-white font-bold hidden md:block">
            Contact Details
          </div>
          <div className="md:h-100 md:hidden h-[2px] w-60 bg-slate-700 rounded-2xl"></div>
          <div className="flex flex-col gap-7">
            <div className="w-70 text-white" style={{ paddingLeft: "20px" }}>
              <div className="cursor-pointer">
                <i className="fa-solid fa-envelope"></i> :{" "}
                <a href="mailto:work.palashsoni@gmail.com">
                  work.palashsoni@gmail.com
                </a>
              </div>
            </div>
            <div className="w-70 text-white" style={{ paddingLeft: "20px" }}>
              <div className="cursor-pointer">
                <i className="fa-solid fa-phone"></i> :{" "}
                <a href="tel:+919131491316">+91-91314-91316</a>
              </div>
            </div>
            <div className="w-70 text-white" style={{ paddingLeft: "20px" }}>
              <div className="cursor-pointer">
                <i className="fa-solid fa-location-dot"></i> :{" "}
                <a href="https://maps.app.goo.gl/BpD4BgoeMQFNEHB89">
                  Raghunath pura, Dhar (M.P.)
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:h-100 md:w-[2px] h-[2px] w-60 bg-slate-700 rounded-2xl"></div>
        <div className="flex items-center justify-center">
          <form
            action=""
            className="flex flex-col items-center gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              className="h-10 w-70 bg-slate-700 border-1 border-white rounded-md text-white focus:bg-slate-900 focus:border-0"
              placeholder="Your Name"
              style={{ paddingLeft: "10px" }}
              required
            />
            <input
              type="text"
              name="user_email"
              className="h-10 w-70 bg-slate-700 border-1 border-white rounded-md text-white focus:bg-slate-900 focus:border-0"
              placeholder="Your Mail ID"
              style={{ paddingLeft: "10px" }}
              required
            />
            <textarea
              name="message"
              className="h-25 w-70 bg-slate-700 border-1 border-white rounded-md text-white focus:bg-slate-900 focus:border-0"
              placeholder="Message"
              style={{ padding: "10px", resize: "none" }}
              required
            ></textarea>
            <button
              type="submit"
              className="h-10 w-50 text-slate-700 bg-white rounded-2xl text-md font-bold cursor-pointer hover:border-1 hover:border-white hover:bg-slate-900 hover:text-white"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
      <div></div>
    </div>
  );
};

export default Contact;
