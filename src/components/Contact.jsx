import { BiLogoGmail } from "react-icons/bi";
import {CONTACT} from '../constants'
import { motion } from "motion/react"
export default function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-10">
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="text-center mt-10 text-3xl">Get in Touch</motion.h2>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}} 
            className="flex justify-center text-center tracking-tighter mt-5">
                <span><BiLogoGmail className="text-2xl text-blue-600"/></span>
                <a className="ml-2 " href="mailto:mostafamohamed62005@gmail.com">{CONTACT.email}</a>
            </motion.div>
        </div>
    )
}