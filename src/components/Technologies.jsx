import { RiReactjsLine } from "react-icons/ri"
import { FaLaravel } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiMariadb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { motion } from "motion/react"
import { animate, easeIn } from "motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

export default function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="text-center my-20 text-4xl">Technologies</motion.h2>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap">
                <div className="lg:w-1/2">
                    <h3 className="text-center pb-5 text-2xl italic">Frontend and Backend</h3>
                    <div className="flex flex-wrap items-center justify-center gap-4 p-1">
                        <motion.div 
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <RiReactjsLine className="text-4xl text-cyan-400" />
                        </motion.div>
                        <motion.div 
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <FaLaravel className="text-4xl text-red-600" />
                        </motion.div>
                        <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <SiSpringboot className="text-4xl text-green-500" />
                        </motion.div>
                        <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <DiDjango className="text-4xl text-white" />
                        </motion.div>
                        <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <SiMariadb className="text-4xl text-green-600" />
                        </motion.div>
                        <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <SiMongodb className="text-4xl text-green-500" />
                        </motion.div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-center pb-5 text-2xl italic pt-5 md:pt-0">Programming Languages</h3>
                    <div className="flex flex-wrap items-center justify-center gap-4 p-1 hover:border-blue-600">
                        <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <FaJava className="text-4xl text-red-600" />
                        </motion.div>
                        <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <TbBrandCpp className="text-4xl text-blue-500" />
                        </motion.div>
                        <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600 ">
                            <FaPython className="text-4xl text-yellow-300 " />
                        </motion.div>
                        <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <FaPhp className="text-4xl text-blue-300" />
                        </motion.div>
                        <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate" 
                        className="rounded-2xl border-4 border-neutral-800 p-3 hover:border-blue-600">
                            <IoLogoJavascript className="text-4xl text-yellow-400" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            
        </div>
    )
}