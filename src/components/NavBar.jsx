import { navBarMenu } from "../config/constants"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'
import { useState } from "react"

function NavBar() {

    const [nav, setNav] = useState(false)
    const home = 'home';

    return (
        <div className="bg-black text-zinc-50 flex justify-between w-full h-16 items-center fixed px-4">
            <h1 className="cursor-pointer text-center font-signature text-4xl">
            <Link to={home} 
                smooth 
                duration={500}>
                Ayush
            </Link>
            </h1>
            <div>
                <ul className="hidden md:flex gap-10">
                    {
                        navBarMenu.map(({ id, name }) => (
                            <li
                                key={id}
                                className="cursor-pointer capitalize text-gray-500 hover:scale-125 duration-300 hover:text-slate-400" >

                                <Link to={name} smooth duration={500}>
                                    {name}
                                </Link>

                            </li>
                        ))
                    }
                </ul>

            </div>
            <div onClick={() => setNav(!nav)} className="cursor-pointer text-gray-500 z-10 pr-4 md:hidden">
                {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            {
                nav &&
                (<ul 
                    className="flex flex-col items-center text-gray-500 gap-6 absolute top-14 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
                    {
                        navBarMenu.map(({ id, name }) => (
                            <li key={id} 
                                className="cursor-pointer capitalize text-gray-500 hover:scale-125 duration-200 hover:text-slate-400">
                                {/* {name} */}

                                <Link onClick={ () => setNav(!nav)} to={name} smooth duration={500}>
                                    {name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>)
            }

        </div>
    )
}

export default NavBar