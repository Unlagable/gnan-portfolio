import "./About.css"

const About = () => {

  return (
    <div className="about-me py-8 lg:py-0 lg:h-screen rounded-2xl" id="about-section">
        <div className="intro text-white text-left justify-center items-center h-full flex" >
            <div className="intro__inner">

                <h1 className="text-4xl md:text-7xl w-[85%] mx-auto text-center font-extrabold"  style={{ 
                    color: "white",
                    textShadow: `
                        -2px -2px 3px #000,  
                        2px -2px 3px #000,
                        -2px  2px 3px #000,
                        2px  2px 3px #000`
                    }}
                        >Greeting! I'm Somnang 👋
                </h1>
                <br />
                <hr className="border-t-2 w-[90%] mx-auto"/>
                <br />
                <h2 className="capitalize" style={{ 
                    color: "white",
                    textShadow: `
                        -1px -1px 0 #000,  
                        1px -1px 0 #000,
                        -1px  1px 0 #000,
                        1px  1px 0 #000`
                    }}>A Junior Whom Major in Digital Business at CADT.</h2>
                <h2 className="capitalize" style={{ 
                    color: "white",
                    textShadow: `
                        -1px -1px 0 #000,  
                        1px -1px 0 #000,
                        -1px  1px 0 #000,
                        1px  1px 0 #000`
                    }}>Passionate about coding and currently seeking internship opportunities. Eager to bring ideas to interactive digital products, open to internships in front-end dev, UX & UI, and business analysis.</h2>
            </div>
        </div>
    </div>
  )
}


export default About
