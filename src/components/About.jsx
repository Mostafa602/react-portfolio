import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "motion/react"

export default function About() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
            <h2 className="text-center my-20 text-4xl">About 
                <span className="text-blue-600 "> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.8}}
                className="w-full lg:w-1/2 lg:p:8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-3xl w-[350px]" src={aboutImg} />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.8}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}