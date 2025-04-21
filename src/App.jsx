import { useState, useEffect } from 'react'
import './App.css'
import { MdFileDownload } from "react-icons/md"
import Home from './components/home/Home/'
import Portfolio from './components/projectPort/Portfolio'
import Footer from './components/footer/Footer'
import NavBar from './components/headerMenu/Headerbar'
import About from './components/about/About/'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState(1);
  const handleDownload = async () => {
    const fileUrl = "https://files.catbox.moe/qx5cqc.pdf";
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Somnang-CV.pdf"; // rename if you want
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
      const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, scrollY / 500);
      const newPos = Math.max(0, 1 - scrollY / 200);
      setOpacity(newOpacity);
      setPosition(newPos);


      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };


  return (
    <div className={`${darkMode && "dark"} dark:bg-neutral-900 w-full `} id="home-section" >
      <div className="fixed bg-[#0f0f0f] w-full h-15 z-1" style={{opacity: opacity}}></div>
      <div className='header fixed grid grid-cols-5 gap-2 mt-1 mx-auto left-1/2 -translate-x-1/2 w-[80%] z-10'>
        <div className="col-span-1 pl-4 flex items-center ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="self-portray" 
          className='w-12 h-auto rounded-full border-[0.5px] '
          />
          <span id="aniTxt" className="name uppercase ml-2 text-2xl font-bold bg-gradient-to-tr from-orange-500  to-yellow-300 text-transparent bg-clip-text "
           style={{transform: `translate(${position * 302 }%, ${position * 400 }%)` }}>
            Somnang</span>
        </div>
        <div className="col-span-3 h-full p-0 ">
          <NavBar/>
        </div>
        <div className="col-span-1 h-full flex justify-end items-start  pr-6 ">
          <button type='submit' className='btn mt-2 border-2  border-neutral-200 min-h-8 w-24 mr-2 text-center flex rounded-2xl shadow-gray-600 shadow-2xs justify-center items-center
          hover:rounded-lg 
          active:text-blue-800 bg-gradient-to-r from-orange-500  to-yellow-300 text-white font-semibold 
          'onClick={handleDownload}><MdFileDownload className='text-xl '/>Resume</button>
          
          <button className='btn mt-2 min-h-8 min-w-8 bg-gray-900 dark:bg-white rounded-2xl shadow-gray-600 shadow-2xs border-gray-500 border-2 
          hover:rounded-lg 
          '
          onClick={toggleDarkMode}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
      <div className="paddiv pt-16"></div>
      {/* <h1 className='text-red-400 font-bold text-7xl text-center dark:text-blue-400 pt-16'>sup world!</h1> */}
      <div className='h-auto w-[80%] block mx-auto relative z-0 mb-0'>
        <Home />
        <About />
        <Portfolio/>
      </div>
        <Footer />
        <br />
    </div>
  )
}


export default App
