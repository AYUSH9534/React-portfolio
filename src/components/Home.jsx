import React, { useEffect, useRef } from 'react'
import MyImage from '../assets/my-image.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Typed from 'typed.js'
import { RESUME_URL } from '../config/constants';
// import 

function Home() {

    const el = useRef(null);

    useEffect(() => {

        const typed = new Typed(el.current, {

            strings: [
                "MERN Stack Developer",
                "Java Developer",
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
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full w-[2/4]'>

                    <h2 className='text-4xl sm:text-[2.5rem] font-bold'>
                        {/* Hi! I'm a Full Stack Developer */}
                        Hi! I'm a
                        <br />
                        <span ref={el}></span>
                    </h2>
                    <br />

                    <p className='text-grey-500 py-4 max-w-md'>
                        <span
                            className='font-bold text-xl'>I'
                        </span>m
                        <span
                            className='font-bold text-xl'> A
                        </span>
                        yush,
                        <br />
                        👨‍💻 Java Developer specializing in J2EE. 
                        <br />
                        Solved approx 350+ problems of Data Structures and Algorithms on GeeksForGeeks. 
                        <br />
                        🚀 Skilled in MERN stack with Redux.js for dynamic web applications. Let's build something great!
                    </p>

                    <div>

                        <button className='group text-white font-medium w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-t from-cyan-500 to-blue-500'>
                            <a href={RESUME_URL} target='_blank' rel='noreferrer'>Resume</a>
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight className='ml-1' size={25} />
                            </span>
                        </button>

                    </div>


                </div>
                <div className='w-80 lg:ml-12'>

                    {/* <img src={} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full' /> */}
                    <img src={MyImage} alt="" className='md:mt-10 mb-5 rounded-full mx-auto w-2/3 md:w-full' />

                </div>

            </div>

        </div>
    )
}

export default Home
