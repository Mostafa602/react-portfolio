import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
export default function Navbar() {
    return(
        <nav className="mb-10 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <span className="text-3xl font-light tracking-normal">MM</span>
            </div>
            <div className="flex items-center m-8 justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/mostafa-mohamed-b0a165275/" target="blank_"><FaLinkedin /></a>
                <a href="https://github.com/Mostafa602" target="blank_"><FaGithub /></a>
                <a href="https://leetcode.com/u/Mostafa602/" target="blank_"><SiLeetcode /></a>
            </div>
        </nav>
    )
}

