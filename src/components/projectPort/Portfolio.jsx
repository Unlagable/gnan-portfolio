import "./Portfolio.css"

const Portfolio = () => {

    return (
      <div className="portfolio block h-auto  lg:m-8 "  id="portfolio-section">
        <br />
        <hr className="text-neutral-900 dark:text-white border-t-2 "/>
        <div><h2 className="title-describe">Project I Have Done</h2></div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">

            {/* items---------------------------------------------------------------------------- */}
            <div className="portfolio-card h-auto rounded-xl lg:rounded-2xl my-4 group">
                <div className="p-card-img h-auto rounded-xl mb-1 border-2 border-gray-600 dark:bg-gray-900 items-center justify-center flex">
                    <img src="..\..\assets\image\ralken design.png" alt="" className="p-card-image scale-85 drop-shadow-xl group-hover:drop-shadow-neutral-700 group-hover:scale-75 h-100 object-contain"/>
                </div>
                <div className="p-card-info gap-0.5">
                    <div className="col-span-3 p-title font-bold text-xl dark:text-white">
                        <h1 >
                            Ralkenn
                        </h1>
                    </div>
                    <div className="p-year text-end text-sm pt-2 dark:text-white"><h2>2023</h2></div>
                    <div className="col-span-3 p-des text-sm dark:text-white">
                        <h2>Front-end Web Design for vihicle rental service.</h2>
                    </div>
                    <div className="used-tech text-end text-sm dark:text-white "><h2>HTML & CSS</h2></div>
                </div>
            </div>
            {/* items---------------------------------------------------------------------------- */}
            {/* items---------------------------------------------------------------------------- */}
            <div className="portfolio-card h-auto rounded-xl lg:rounded-2xl my-4 group">
                <div className="p-card-img h-auto rounded-xl mb-1 border-2 border-gray-600 dark:bg-gray-900 items-center justify-center flex">
                    <img src="..\..\assets\image\jewelry.png" alt="" className="p-card-image scale-85 drop-shadow-xl group-hover:drop-shadow-neutral-700 group-hover:scale-75 h-100 object-contain"/>
                </div>
                <div className="p-card-info gap-0.5">
                    <div className="col-span-3 p-title font-bold text-xl dark:text-white">
                        <h1 >
                            Jewelry shop
                        </h1>
                    </div>
                    <div className="p-year text-end text-sm pt-2 dark:text-white"><h2>2024</h2></div>
                    <div className="col-span-3 p-des text-sm dark:text-white">
                        <h2>Responsive UX UI Design</h2>
                    </div>
                    <div className="used-tech text-end text-sm dark:text-white "><h2>Figma</h2></div>
                </div>
            </div>
            {/* items---------------------------------------------------------------------------- */}

          </div>
      </div>
    )
  }

  export default Portfolio
