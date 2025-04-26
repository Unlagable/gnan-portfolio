import { useState,useEffect } from "react";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GoBrowser } from "react-icons/go";
import { LuPenTool } from "react-icons/lu";
import { FaDesktop } from "react-icons/fa6";
import "./scrollanimation.css"

const Home = () => {
    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);
    const handleClick = () => {
        window.open("https://t.me/Somnang_420", "_blank");
      };
    

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for recuded motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
        }
        
        function addAnimation() {
        scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);
        
            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
        
            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            });
        });
        }
    }, []);
    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const newScale = Math.max(0.7, 1 - scrollY / 1500); // scale from 1 to 0.5
        const newOpacity = Math.max(0, 1 - scrollY / 800);
        setScale(newScale);
        setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="home h-auto mx-auto ">
        
        <div id="hero" className="fixed lg:h-[80%] lg:w-[80%] w-full -translate-x-1/2 left-1/2 z-[-1] ">
            <h1 className="font-bold text-xl w-60 lg:text-4xl lg:w-xl mx-auto mt-30 uppercase text-sky-700 dark:text-white
            text-center transition-opacity duration-1500 ease-in" style={{ transform: `scale(${scale})`, opacity: opacity, lineHeight: "0.2"}}>
            time to turning <span className="highligth-word">ideas</span> into interactive digital <span className="highligth-word">experiences</span>
            </h1>
            <h1 className="text-center font-semibold uppercase text-md lg:text-4xl mt-30 text-sky-700 dark:text-white" style={{ transform: `scale(${scale})`, opacity: opacity}}>
                Just A Curious Student Want to learn more
            </h1>
        </div>
        <div className="padding-div h-screen">
            <button className="btn rounded-4xl font-semibold text-white border-2 border-sky-700 bg-sky-400 shadow-md shadow-gray-600 relative block z-1 top-[70%] lg:left-[80%] left-[55%] min-h-10 min-w-auto p-4 hover:rounded-xl"
             onClick={handleClick} >Contact Me</button>

        </div>
        <hr className="w-[60%] mx-auto border-t-2 dark:text-white"/>
        <div className="h-auto w-full bg-white dark:bg-neutral-900 z-0">
            <h2 className="title-describe">What I Like To Do</h2>
            <div className="flex flex-row flex-wrap gap-4 w-full h-auto px-4">

                <div className="card group flex-grow ">
                    <div className="card-icon-parent h-35" ><HiOutlinePaintBrush size="64" className=" card-icon group-hover:scale-200" data="uxui"/></div>
                    <div className="card-title" data="uxui">UX & UI</div>
                    <div className="card-des">Design Resposive User Interface Mockup</div>
                </div>
                <div className="card group flex-grow ">
                    <div className="card-icon-parent h-35"><GoBrowser size="64" className=" card-icon group-hover:scale-200" data="web" /></div>
                    <div className="card-title" data="web">Web Design</div>
                    <div className="card-des">Develop Resposive Fron-End Website</div>
                </div>
                <div className="card group flex-grow  ">
                    <div className="card-icon-parent h-35"><LuPenTool size="64" className=" card-icon group-hover:scale-200" data="graphic" /></div>
                    <div className="card-title" data="graphic">Graphic Design</div>
                    <div className="card-des">Design Poster And Photo Manipulation</div>
                </div>
                <div className="card group flex-grow  ">
                    <div className="card-icon-parent h-35"><FaDesktop size="64" className=" card-icon group-hover:scale-200" data="desktop" /></div>
                    <div className="card-title" data="desktop">Desktop App</div>
                    <div className="card-des">Develop Desktop Application</div>
                </div>

            </div>
            <br />
            <hr className="text-neutral-900 dark:text-white border-t-2 "/>
            <h2 className="title-describe">Technologies I've Worked With</h2>
            <div className="Tools h-auto my-0 pb-4">
                <div className="scroller mx-auto" data-direction="left" data-speed="fast">
                    <div className="scroller__inner">
                        <img src="https://abrudz.github.io/logos/Java.svg"/>
                        <img src="https://abrudz.github.io/logos/CPlusPlus.svg"/>
                        <img src="https://abrudz.github.io/logos/PHP.svg"/>
                        <img src="https://abrudz.github.io/logos/Python.svg"/>
                        <img src="https://abrudz.github.io/logos/JS.svg"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home
