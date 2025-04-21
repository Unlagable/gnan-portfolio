import { ImMail4 } from "react-icons/im";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {

    return (
      <div className="footer h-auto mx-5  bg-white dark:bg-neutral-900 border-2 border-gray-600 rounded-2xl block relative z-1 py-5">
          <div className="grid grid-cols-10 gap-10 mx-auto w-[80%] h-auto">
            <div className="col-span-3 w-[75%]  text-2xl font-bold dark:text-white"><span className="bg-gradient-to-r from-orange-500  to-yellow-300 text-transparent bg-clip-text">Knowledge</span> from real world</div>
            <div className="md:col-span-2 col-span-3">
                <h1 className="footer-nav text-2xl mb-5 font-extrabold bg-gradient-to-t from-pink-400  to-violet-600 text-transparent bg-clip-text">Explore</h1>
                <div className="nav-items"><a href="#home-section" className="scroll-smooth">Home</a></div>
                <div className="nav-items"><a href="#about-section" className="scroll-smooth">About</a></div>
                <div className="nav-items"><a href="#portfolio-section" className="scroll-smooth">Portfolio</a></div>
            </div>
            <div className="md:col-span-1"></div>
            <div className="col-span-4 connect ">
                <h1 className="text-end text-2xl mb-5 font-extrabold bg-gradient-to-t from-violet-500  to-sky-500 text-transparent bg-clip-text">Connect with Me</h1>
                <div className="connect-item group ">
                    <ImMail4 className="contact-icon group-hover:text-sky-500 dark:text-white"/>
                    <a href="mailto:" className="email group-hover:text-sky-500 dark:text-white"> E-mail</a>
                </div>
                <div className="connect-item group">
                    <FaLinkedin  className="contact-icon group-hover:text-sky-500 dark:text-white"/>
                    <a href="https://www.linkedin.com/in/somnang-kheum/" className="linkedin group-hover:text-sky-500 dark:text-white">Linkedin</a>
                </div>
                <div className="connect-item  group">
                    <SiTelegram className="contact-icon group-hover:text-sky-500 dark:text-white"/> 
                    <a href="https://t.me/Somnang_420" className="telegram group-hover:text-sky-500 dark:text-white">Telegram</a>
                </div>
                <div className="connect-item  group">
                    <FaGithub className="contact-icon group-hover:text-sky-500 dark:text-white"/>
                    <a href="https://github.com/Unlagable" className="github group-hover:text-sky-500 dark:text-white">Github</a>
                </div>

            </div>
          </div>

      </div>
    )
  }
  
  export default Footer
  