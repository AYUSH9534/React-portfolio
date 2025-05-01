import React, { useEffect, useRef } from 'react';
import MyImage from '../assets/pc.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Typed from 'typed.js';
import { RESUME_URL } from '../config/constants';

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "MERN Stack Developer",
        "Full stack Developer",
        "Front-end Developer",
        "Back-end Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto h-full px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Text section */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Hi! I'm a
            <br />
            <span ref={el}></span>
          </h2>

          <p className="text-gray-400 py-4 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            <span className="font-bold text-lg">I'</span>m
            <span className="font-bold text-lg"> A</span>
            yush,
            <br />
            👨‍💻 A Full Stack Developer specializing in MERN.
            <br />
            Solved approx 400+ problems of Data Structures and Algorithms on GeeksForGeeks.
            <br />
            🚀 Skilled in MERN stack with Redux.js for dynamic web applications. Let's build something great!
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="group text-white font-medium w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-t from-cyan-500 to-blue-500 hover:scale-105 duration-300">
              <a href={RESUME_URL} target="_blank" rel="noreferrer">Resume</a>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
              </span>
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={MyImage}
            alt="Profile"
            className="rounded-full w-40 sm:w-56 md:w-72"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
