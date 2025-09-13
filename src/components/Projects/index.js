import { FaExternalLinkAlt,FaGithub } from "react-icons/fa"

import './index.css'

// my default Projects Data
const userProjectsData = [{
    id:1,
    projectTitle:"Todo",
    description:"A React & CSS To-Do App to easily manage and prioritize daily tasks. Add, complete, delete, and save tasks with a clean, responsive interface",
    coverImage:"https://res.cloudinary.com/dnh9hnjbx/image/upload/v1756365784/Projects%20Resources/Todo-App-Project-cover-1:1.png",
    projectDeploymentURL:"https://rbcloud-mytodos-app.netlify.app/",
    gitRepoURL:'https://github.com/RajuBadanakanti-cloud/my-todos-app.git'
},

{
    id:2,
    projectTitle:"Recipe Book",
    description:"A React-based Recipe Book to browse, add, delete and search recipes, ingredients, and preparation steps along with dish images. Includes a detailed recipe view for easy cooking guidance",
    coverImage:"https://res.cloudinary.com/dnh9hnjbx/image/upload/v1756479073/Projects%20Resources/Recipe-Book-Cover-image.png",
    projectDeploymentURL:"https://rbcloud-recipebook.netlify.app/",
    gitRepoURL:'https://github.com/RajuBadanakanti-cloud/recipe-book-app.git'
},
{
    id:3,
    projectTitle:"Quiz",
    description:"A Web Development Quiz App with timed questions, instant feedback, and a point-based scoring system. Start, answer, and review your results with a smooth and interactive interface",
    coverImage:"https://res.cloudinary.com/dnh9hnjbx/image/upload/v1756478734/Projects%20Resources/Interactive-Quiz-Cover-Image.png",
    projectDeploymentURL:"https://rbcloud-interactive-quiz.netlify.app/",
    gitRepoURL:'https://github.com/RajuBadanakanti-cloud/interactive-quiz.git'
},

{
    id:4,
    projectTitle:"NXT Trendz (eCommerce)",
    description:"A Web responsive eCommerce application with authentication login/logout built with React Allows users to add to card, Prime deatls, filtering by categories, rating, reviews",
    coverImage:"https://res.cloudinary.com/dnh9hnjbx/image/upload/v1756799010/Projects%20Resources/NXT-Trendz-eCommerce-Cover-Image.png",
    projectDeploymentURL:"https://rjnxttrendzapp.ccbp.tech",
    gitRepoURL:'https://github.com/RajuBadanakanti-cloud/My-Todo-App.git'
},] 

const Projects = () => (

    <div id="projects" className="project-bg-container min-h-screen flex flex-col justify-start items-start md:ml-72 pt-16 md:pt-6 px-4 ">
        <h1 className='text-slate-100 text-3xl font-oswald font-bold border-b-4 border-yellow-500 pb-1 mb-6'>Projects</h1>
        {/*  Projects card section */}
        <ul className='flex flex-row items-center flex-wrap p-0 mt-4 mx-2 md:mx-4'>
            {userProjectsData.map(eachProject => (
              
            <li key={eachProject.id} className='grid flex-col items-center rounded-lg shadow-lg shadow-amber-400 mr-5 md:mr-10 mb-5 cursor-pointer'
            onClick={() => window.open(eachProject.projectDeploymentURL,"__blank")}>   
             {/* we have a link to the entire card using window.open */}
                
                <div className='project-card-container'>
                    {/* Project cover photo */}
                    <img src={eachProject.coverImage} alt="Project cover" className='w-full rounded-lg'/>
                    {/* Card Layer */}
                    <div className='project-card-layer-container'>
                        {/* Project Title */}
                        <h3 className='text-slate-100 font-bebas font-bold tracking-wide'>{eachProject.projectTitle}</h3>
                        {/* Project Description*/}
                        <p className='text-slate-200 w-11/12 text-sm md:text-base'>
                        {eachProject.description}
                        </p>

                        {/* Project Navigation container */}
                        <div className="flex flex-row justify-between items-center">
                        {/* Project GitRepo => */}
                        <a href={eachProject.gitRepoURL} 
                        target="__blank" className="bg-white text-center text-amber-500 text-sm md:text-base rounded-full
                        p-3 hover:text-slate-800 mr-6" onClick={(e) => e.stopPropagation()}>
                        <FaGithub /></a>

                         {/* Project live View => */}                        
                        <a href={eachProject.projectDeploymentURL} target="__blank" className="bg-white text-center text-amber-500 text-sm md:text-base rounded-full 
                        p-3 hover:text-slate-800 mr-6">
                        <FaExternalLinkAlt /></a>

                        </div>
                    </div>

                </div>
             

            </li>

            ))}
        </ul>   
    </div>
    )



export default Projects