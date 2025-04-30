import React from 'react'
import todo from '../assets/portfolio/todo.png';
import genpassword from '../assets/portfolio/genpassword.png';
import ecommerce from '../assets/portfolio/ecommerce.png';
import travel from '../assets/portfolio/travel.png';
import profile from '../assets/portfolio/profile.png';


function Portfolio() {

    const projectsArray = [
        {
            id: 14,
            src: profile,
            name: 'portfolio',
             live: 'https://ayush9534.github.io/portfolio/',
             code: 'https://github.com/AYUSH9534/portfolio',
        },
        {
            id: 13,
            src: travel,
            name: 'Travel Website',
            live: 'https://ayush9534.github.io/Travelers/',
            code: 'https://github.com/AYUSH9534/Travelers',
        },
        
        {
            id: 11,
            src: ecommerce,
            name: 'E-Commerce',
            live: 'https://ayush9534.github.io/E-Commerce/',
            code: 'https://github.com/AYUSH9534/E-Commerce',
        },
        {
            id: 2,
            src: genpassword,
            name: 'Generate Password',
            live: 'https://658935a23098fabc43d5c1a5--extraordinary-banoffee-0884e5.netlify.app/',
            code: 'https://github.com/AYUSH9534/Password-Generator',
        },

        {
            id: 7,
            src: todo,
            name: 'Todo List',
            live: 'https://precious-gnome-4eb246.netlify.app/',
            code: 'https://github.com/AYUSH9534/TodoList',
        },
    ]


    return (
        <div
            name='projects'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Projects
                    </p>
                    <p className='py-6'>
                        Check out some of my work right here
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8'>
                    {
                        projectsArray.map(({ id, src, name, live, code }) => (

                            <div key={id} className='shadow-md shadow-gray-600 rounded-2xl'>

                                <img className='rounded-lg duration-200 hover:scale-105'
                                    src={src}
                                    alt="" />

                                <p className='text-center mt-3'>{name}</p>

                                <div className='flex items-center justify-center space-x-4 mt-2'>
                                    <button className='w-1/2 px-4 py-2 duration-200 hover:scale-105 hover:shadow-lg hover:text-green-300'>
                                        <a href={live} target='_blank' rel="noreferrer">
                                            Demo
                                        </a>
                                    </button>

                                    <button className='w-1/2 px-4 py-2 duration-200 hover:scale-105'>
                                        <a href={code} target='_blank' rel="noreferrer">
                                            Code
                                        </a>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default Portfolio