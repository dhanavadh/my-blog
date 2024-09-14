"use client"
import {useState, useEffect} from "react";

  const btnDec = [
    `flex font-mono px-2 py-1 border-2 btn underline-thickness-1 hover:underline hover:bg-[#F2F2F2] hover:text-[#1F1F1F]
    cursor-pointer transition-colors `,
    `flex font-mono px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:
    cursor-pointer transition-colors `,
    
  ]
  const navtext = [
    `flex font-medium font-mono underline-thickness-1 underline-offset-4 hover:underline 
    cursor-pointer`,
    `flex font-medium font-mono underline-thickness-1 underline-offset-4 hover:underline 
    cursor-pointer`,
    
    
  ]


function Navbar() {
    //NavCo
    const [color, setColor ] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }else {
            setColor(false)
        }        

    }
    const [isVisible, setIsVisible] = useState(false);
    const toggleDiv = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
      window.addEventListener("scroll", changeColor);
    }) 
    
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                    <nav className={color ? "navbar-active" : "navbar"}>
                        <div className="flex items-center transition-colors ">
                            <a className="cursor-pointer text-3xl font-mono" href="/">
                            ./dhanav
                            </a>
                        </div>

                    
                        <div className="items-center hidden space-x-8 sm:flex">
                        <a className={color ? navtext[1] : navtext[0]} href="/">
                                Home
                            </a>
                        <a className={color ? navtext[1] : navtext[0]} href="/projects">
                                Projects
                            </a>
                        <a className={color ? navtext[1] : navtext[0]} href="/experience">
                                Experience
                            </a>
                        <a className={color ? navtext[1] : navtext[0]} href="https://github.com/dhanavadh" target="_blank">
                                GitHub
                            </a>
                        </div>
                        <div>
                            </div>
                        <div className="sm:hidden flex items-center">
                                <a
                                type="button"
                                className={color ? btnDec[1] : btnDec[0]}    
                                onClick={toggleDiv}                               
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </a>
                        </div>
                    </nav>
                </div>
            </div>
            {isVisible && (
                <div className="grid grid-cols min-h-screen bg-black">
                    <div className="grid grid-rows min-h-screen items-center justify-items-center">
                        <ol>                            
                            <li className="my-8">
                                <a className="text-xl font-mono underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="my-8">
                                <a className="text-xl font-mono underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors" href="/projects">
                                    Projects
                                </a>
                            </li>
                            <li className="my-8">
                                <a className="text-xl font-mono underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors" href="/experience">
                                    Experience
                                </a>
                            </li>
                            <li className="my-8">
                                <a className="text-xl font-mono underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors" href="https://github.com/dhanavadh" target="_blank">
                                    GitHub
                                </a>
                            </li>
                        </ol>
                        </div>
                </div>
            )}  

        </div>
    );
}

export default Navbar;