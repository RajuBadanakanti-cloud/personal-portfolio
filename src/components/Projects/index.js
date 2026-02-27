import { useEffect, useState } from "react"
import { FaExternalLinkAlt,FaGithub } from "react-icons/fa"
import userProjectsData from "../../Data/projectsData"

import './index.css'


// my default Projects Data


const Projects = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    useEffect(() => {
        setShowAnimation(true);
      }, []);

    return (


    <div id="projects" className="project-bg-container min-h-screen w-full md:w-auto flex flex-col justify-start items-start md:ml-72 pt-16 md:pt-6 px-4 ">
        <h1 className='text-slate-100 text-3xl font-oswald font-bold border-b-4 border-yellow-500 pb-1 mb-6'>Projects</h1>
        {/*  Projects card section */}
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -ml-5 md:-ml-0'>
            {userProjectsData.map((eachProject, index) => (
               
                <li key={eachProject.id} className={`w-full bg-slate-800 rounded-lg px-3 py-3 shadow-xl  hover:shadow-amber-500/40 hover:bg-slate-700 transform transition-all duration-100 ease-in-out
                    ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}
                    style={{ transitionDelay: `${index * 10}ms` }}
                onClick={() => window.open(eachProject.projectDeploymentURL)} 
                
                >
                    <img src={eachProject.coverImage} alt={eachProject.projectTitle} className='w-full rounded-md mb-4' />
                    <h2 className='text-base md:text-xl font-semibold text-yellow-500 mb-2'>{eachProject.projectTitle}</h2>
                    <p className='text-gray-300 mb-4 text-xs md:text-sm'>{eachProject.description}</p>
                    <div className='flex flex-row items-center justify-start space-x-4 flex-wrap'>
                        <a href={eachProject.projectDeploymentURL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                        className='text-blue-500 hover:text-blue-700 text-sm md:text-base flex items-center space-x-1'>
                            <FaExternalLinkAlt />
                            <span>Live Demo</span> 
                        </a>
                        <a href={eachProject.gitRepoURL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                        className='text-gray-300 hover:text-gray-400 text-sm md:text-base flex items-center space-x-1'>
                            <FaGithub />
                            <span className="text-gray-200  hover:text-gray-400">GitHub</span>
                        </a>
                            
                    </div>
                </li>
            ))}
        </ul>   


    </div>
    )
}


export default Projects