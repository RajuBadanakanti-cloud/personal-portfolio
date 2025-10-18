import { FaUser, FaHome, FaFolderOpen, FaEnvelope,FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

import './index.css'
import { useState } from "react";
const profileImgLink = "https://res.cloudinary.com/dnh9hnjbx/image/upload/v1757773090/My%20Personals/4KProfile-3-3_IMG_PhotoGrid_fn4dgc.png"

// Navigation Tabs Data
const navigationTabsList = [
  {
  tabId:"HOME",
  tabName:"Home",
  tabLink:"#home",
  tabIcon:<FaHome className="h-4 w-4 mr-2"/>
},
  {
  tabId:"ABOUT",
  tabName:"About",
  tabLink:"#about",
  tabIcon:<FaUser className="h-[14px] w-[14px] mr-2"/>
},
  {
  tabId:"PROJECTS",
  tabName:"Projects",
  tabLink:"#projects",
  tabIcon:<FaFolderOpen className="h-4 w-4 mr-2"/>
},
  {
  tabId:"CONTACT",
  tabName:"Contact",
  tabLink:"#contact",
  tabIcon: <FaEnvelope className="h-[15px] w-[15px] mr-2"/>
},

]

const SideNavbar  = () => {
  const [activeTab, setActiveTab] = useState(navigationTabsList[0].tabId) // default active tab (Home)
    return (
        <div className="bg-gray-950 h-screen w-72 flex flex-col justify-start items-center fixed z-50 top-0 left-0 py-4" >
          {/* Personal Portfolio text */}
          <h1 className='text-xs text-slate-200 tracking-[2.5px] font-playfair mt-1 mb-5 p-0'>Personal portfolio</h1>
             {/*  PROFILE */} 
            <img src={profileImgLink} className=' h-24 w-24 border-3 rounded-full mb-2' alt="Profile" />
            <h1 className='text-lg text-slate-200 m-0 p-0'>Raju Badanakanti</h1>
            <p className="text-slate-400 text-xs mt-1">Web Developer</p>
         
              {/*Unorder List - navigation tabs list mapping >>> */ }
            <ul className="w-2/3 flex flex-col justify-center items-center px-3 mt-5">
            {navigationTabsList.map(eachTab =>{
              // if active tab and selecting tab is same bellow style will be apply
            const activeTabStyle = activeTab === eachTab.tabId ? "activated-tab":""
              return (
                // List-items
                <li className="w-full" key={eachTab.tabId}>
                  <a href={eachTab.tabLink} className={`flex flex-row justify-start items-center mb-4
                 text-slate-300 tracking-wider font-bold no-underline m-0 navigation-glow ${activeTabStyle}`}
                  onClick={() => setActiveTab(eachTab.tabId)}>
                  {eachTab.tabIcon}{eachTab.tabName}</a>
                </li> 
              )
            }
          )} 
          </ul>

            {/* FOOTER */}
            <div className="flex flex-col justify-end items-center mt-auto">

              {/* Download Resume Button ^ */}
              <button className="h-10 w-44 bg-sky-900 border-none outline-none rounded-md mt-2 mb-4 shadow-sm shadow-gray-900 hover:bg-sky-950"> 
                <a href="/Raju_Badanakanti_fullstack_resume.pdf" download="Raju_Badanakanti_Resume" target="__blank"
                className=" text-slate-100 text-sm font-poppins font-bold flex flex-row justify-center items-center no-underline">
                Download Resume <FaDownload className="ml-2"/></a>
              </button> 

              <div className="flex flex-row justify-center items-center mb-2">
                {/* Linkedin >>  */}
                <a href='https://www.linkedin.com/in/raju-badanakanti-491705259/' 
                  target="__blank" className='mr-3 text-slate-700 text-xl hover:text-amber-500'>
                  <FaLinkedin/></a>

                {/* Github >>  */}
                <a href='https://github.com/RajuBadanakanti-cloud' 
                  target="__blank" className='mr-3 text-slate-700 text-xl hover:text-amber-500'>
                  <FaGithub/></a>

              </div>
              {/* footer */}
              <p className="text-gray-600 text-sm m-1">© 2025 Raju Badanakanti</p>
              <p className="text-gray-600 text-xs ">Always learning, always building</p>

            </div>
            
        </div>
    )
 
}

export default SideNavbar