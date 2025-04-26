import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBar = () =>  {
    const [navIndex, setNavIndex] = useState(0);
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const handleScroll = (i) => {
        document.getElementById(i === 0 ? "home-section" : i === 1 ? "about-section" : "portfolio-section").scrollIntoView({ behavior: "smooth" });
    };


    return(<>
    <div className={` w-fit mt-1 text-4xl hover:cursor-pointer ${!navMenuOpen ? "text-sky-400":"text-red-500"} `} onClick={() => setNavMenuOpen(!navMenuOpen)}> {navMenuOpen ? <ImCross /> : <GiHamburgerMenu />}</div>

    <div className={`nav-btn mt-4 absolute left-[10%] w-[80%] z-2 ${!navMenuOpen && "hidden"}`}>
      <ul className="text-center bg-white *:h-10">
        <li className={`${navIndex === 0 ? "selected-nav-item" : ""} rounded-t-4xl border-t-2 border-l-2 border-r-2`} onClick={ () => {setNavIndex(0);handleScroll(0);setNavMenuOpen(false)} }>Home</li>
        <li className={`${navIndex === 1 ? "selected-nav-item" : ""} border-l-2 border-r-2`} onClick={ () => {setNavIndex(1);handleScroll(1);setNavMenuOpen(false)} }>About</li>
        <li className={`${navIndex === 2 ? "selected-nav-item" : ""} rounded-b-4xl border-b-2 border-l-2 border-r-2`} onClick={ () => {setNavIndex(2);handleScroll(2);setNavMenuOpen(false)} }>Portfolio</li>
      </ul>
    </div>
    
    </>)}

  export default NavBar