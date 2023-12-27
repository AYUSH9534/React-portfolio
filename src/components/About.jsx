import React from 'react'

function About() {
    return (
        <div
            name='about'
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
        >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>

                </div>


                <p className='text-xl'>
                👋 Hello, I'm Ayush, a passionate MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer on a mission to create impactful and scalable web solutions. With a deep-rooted love for both frontend and backend development, I find joy in turning ideas into dynamic, user-friendly applications.
                </p>
                <br />
                <p className='text-xl'>
                🚀 In my coding endeavors, I consider application performance a top priority. Through rigorous DSA problem-solving, I ensure that the solutions I implement are not only functional but optimized for speed, scalability, and resource efficiency.

                </p>
                <br />
                <p className='text-xl'>
                💻 On the Front-end, I am Proficient in crafting sleek and responsive user interfaces using React.js, ensuring a seamless and engaging user experience.
                </p>
                <br />
                <p className='text-xl'>
                🌐 Whether it's Back-end development, I am passionate about delivering high-quality software solutions specializing in Node.js and Express.js to build robust and efficient server-side applications.
Let's build something amazing together! 🤝🏻
                </p>

                <br />

            </div>
        </div>
    )
}

export default About