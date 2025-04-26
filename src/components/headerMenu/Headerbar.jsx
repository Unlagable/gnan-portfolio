import { useState, useEffect } from "react";

const NavBar = () =>  {
    const [navIndex, setNavIndex] = useState(0);
    const handleScroll = (i) => {
        document.getElementById(i === 0 ? "home-section" : i === 1 ? "about-section" : "portfolio-section").scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const bar = document.getElementById("nav-border");
        if (bar) {
          const positions = ["translate-x-[-108.5%]", "translate-x-[0%]", "translate-x-[108.5%]"];
          bar.className =
            `selected-border absolute h-8 top-2 w-29 rounded-full  border-2 ${positions[navIndex]} translate-y-[6%] pointer-events-none`;
        }


      }, [navIndex]);

    return(<>
    <div className="hidden navbar lg:flex border-2 rounded-full h-11 w-96 mx-auto mt-1 p-0.5 justify-center border-sky-400 bg-gradient-to-tr from-[#6a11cb] to-[#2575fc]">
      <div id="home" className={`${navIndex === 0 ? "selected-nav-item" : ""} navbar-item`} onClick={ () => {setNavIndex(0);handleScroll(0)} } ><span >home</span></div>
      <div id="about" className={`${navIndex === 1 ? "selected-nav-item" : ""} navbar-item`}  onClick={ () => {setNavIndex(1);handleScroll(1)} } ><span >about</span></div>
      <div id="portfolio" className={`${navIndex === 2 ? "selected-nav-item" : ""} navbar-item`}  onClick={ () => {setNavIndex(2);handleScroll(2)} } ><span >portfolio</span></div>
      <div id="nav-border" className="translate-x-[-108.5%] " ></div>
    </div>
    

    </>)}

  export default NavBar