
import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/MyPic.png"
import { motion } from "motion/react"

import { TypeAnimation } from "react-type-animation"

const container = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})


export default function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-10 text-6xl font-thin tracking-tight 
                        lg:mt-16 lg:text-7xl italic">Mostafa Mohamed</motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-indigo-600 cia-slate-500 to-blue-600 bg-clip-text 
                        text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        href="#projects" className="group mb-7 lg:mb-1">
                            <div className="border-2 rounded-3xl border-blue-600 h-10 px-3 py-2 fancy-text relative overflow-hidden ">
                                <span className=" block transition-all duration-700 opacity-100 group-hover:opacity-0 group-hover:-translate-y-5 ">2+ <span className="italic">Years Of Experience</span></span>
                                <span className=" block transition-all duration-700 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-5">Check My Projects →</span>
                            </div>
                        </motion.a>
                    </div> 
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x: 100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        src={profilePic} className="w-1/2 rounded-2xl" alt="name" />
                    </div>
                </div>
            </div>
        </div>
    )
}