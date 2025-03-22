import { EXPERIENCES } from "../constants"
import { motion } from "motion/react"
export default function Experience() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="text-center my-20 text-4xl">Experience</motion.h2>
            <div className="">
                {EXPERIENCES.map((e,index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{e.year}</p>
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {e.role} - <span className="text-sm text-indigo-600">{e.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{e.description}</p>
                            {e.roles.map((MyRoles) => (
                                <p className="mb-4 text-neutral-400">{MyRoles}</p>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}