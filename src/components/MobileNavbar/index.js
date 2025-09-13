import { useState } from "react";
import { FaBars, FaTimes, FaDownload  } from "react-icons/fa";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import './index.css'

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


const MobileNavbar = () => {
    const [showMenuBarItems, setMenuBarItems] = useState(false)
      const [activeTab, setActiveTab] = useState(navigationTabsList[0].tabId) // default active tab (Home)

// Menu Bar Items >> Show 
const onMenuBar = () => (
setMenuBarItems(prev => !prev)
)

//  MenuBar and >>>>>
const renderMenuBarItems = () => {
  // if show Menu bar view 'active' style will be assign
  const isShownItems = showMenuBarItems ? "active" : ""
    return (
      <div
        className={`min-h-[400px] bg-gray-950 w-10/12 p-2 sm:w-6/12 fixed top-16 left-1/2 z-50 ml-auto 
        rounded-bl-lg menu ${isShownItems}`} onClick={onMenuBar} >
          {/* navigation tabs list mapping  */}
        <ul className="w-full p-2 flex flex-col justify-start items-start">
            {navigationTabsList.map(eachTab => {
              /* active tab style >>> */
                const activeTabStyle = activeTab === eachTab.tabId ? "activated-tab":"" 
            return  (
              // list items along with 
              <li className="mb-2 ml-4" key={eachTab.tabId}>
                <a href={eachTab.tabLink} className={`flex flex-row justify-start items-center mb-4
                text-slate-300 tracking-wider text-[12px] font-bold no-underline m-0 navigation-glow ${activeTabStyle}`}
                onClick={() => setActiveTab(eachTab.tabId)}>
                {eachTab.tabIcon}{eachTab.tabName}</a>
              </li>
            )
            })}
        </ul>

          {/* Download Resume Button ^ */}
            <button className="h-8 w-28 ml-2 sm:ml-5 bg-sky-900 border-none outline-none rounded-sm mt-2 mb-4 shadow-sm shadow-gray-900 hover:bg-sky-950 "> 
              <a href="/Raju_Badanakanti_fullstack_resume.pdf" download="Raju_Badanakanti_Resume" target="__blank"
              className=" text-slate-100 text-[8px] tracking-wider font-poppins font-bold flex flex-row justify-center items-center no-underline">
               Download Resume <FaDownload className="ml-1"/></a>
            </button> 

        {/* FOOTER Navigation links >>  */}
        <div className="w-6/12 ml-6 flex flex-row justify-start items-start">

        {/* Git Hub */}
            <a href='https://github.com/RajuBadanakanti-cloud'
            target="__blank"
            className="text-slate-100 text-lg hover:text-amber-400 mr-8"><FaGithub/></a>

        {/* Linkedin */}
            <a  href='https://www.linkedin.com/in/raju-badanakanti-491705259/'
            target="__blank"
            className="text-slate-100 text-lg hover:text-amber-400 mr-8"><FaLinkedin/></a>
        </div>

    </div>
    )
}


  return (
      <>
        <div className="h-16 w-full bg-gray-950 p-4 fixed top-0 left-0 z-50 
        flex flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-start">
            <p className="text-slate-300 font-playfair text-[8px] tracking-[1.4px] m-0">Personal Portfolio</p>
            <p className=" text-amber-400 text-[12px] font-bold tracking-wider m-0 mt-1">Raju Badanakanti</p>
          </div>
        {/* show Menu Bar Items close button and  MenuBar button >>  */}
        {showMenuBarItems ? <button className="bg-transparent text-amber-400 border-none outline-none ml-auto"
         onClick={onMenuBar}><FaTimes className="ml-auto text-2xl"/></button> :

        <button className="bg-transparent text-amber-400 border-none outline-none ml-auto"
        onClick={onMenuBar}><FaBars className="ml-auto text-2xl"/></button>}
    
        </div>
        {/*  rendering the Menubar - It will be shown condition is true */}
         <div className="mt-16 w-full flex flex-row justify-start items-center bg-slate-50">
            {showMenuBarItems && renderMenuBarItems()}
         </div>
    </>
    )
}

export default MobileNavbar