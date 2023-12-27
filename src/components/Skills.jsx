import React from 'react'
import Java from '../assets/skills/java.png'
import Node from '../assets/skills/node.png'
import ReactImage from '../assets/skills/react.png'
import TailwindCSS from '../assets/skills/tailwind.png'
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import Github from '../assets/skills/github.png'
import JavaScript from '../assets/skills/javascript.png'
import Git from '../assets/skills/git.png'
import MongoDB from '../assets/skills/mongodb.png'
import MySQL from '../assets/skills/mysql.png'
import Redux from '../assets/skills/redux.png'

function Experience() {

    const techs = [
        {
            id: "html",
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: "css",
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: "js",
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: "j2se",
            src: Java,
            title: 'Java',
            style: 'shadow-red-500'
        },
        
        {
            id: "tailwind",
            src: TailwindCSS,
            title: 'Tailwind CSS',
            style: 'shadow-sky-500'
        },
        {
            id: "react",
            src: ReactImage,
            title: 'React JS',
            style: 'shadow-blue-500'
        },
        {
            id: "redux",
            src: Redux,
            title: 'Redux',
            style: 'shadow-blue-500'
        },
        {
            id: "node",
            src: Node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        
        {
            id: "git",
            src: Git,
            title: 'Git',
            style: 'shadow-red-500'
        },
        {
            id: "github",
            src: Github,
            title: 'Github',
            style: 'shadow-gray-500'
        },
        {
            id: "mongodb",
            src: MongoDB,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id: "mysql",
            src: MySQL,
            title: 'MySQL',
            style: 'shadow-orange-500'
        },
    ]

    return (
        <div
            name='skills'
            className='bg-gradient-to-b from-gray-800 to-black w-full sm:min-h-[140vh] md:h-auto h-[100vh]'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-grey-500 p-2 inline'>
                        Skills
                    </p>
                    <p className='py-6'>
                        These are some of the technologies I have worked with....
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-8'>
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience