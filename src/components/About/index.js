import { FaGraduationCap, FaBriefcase, FaLightbulb, FaLaptopCode, FaTools, FaLanguage} from "react-icons/fa";
import {FaCode,FaServer, FaDatabase} from "react-icons/fa"


import './index.css'

const About = () => (
    <div id='about' className="about-bg-container min-h-screen flex flex-col justify-start items-start
     md:ml-72 pt-16 md:pt-6 px-4">
        <h1 className='text-slate-100 text-3xl font-oswald font-bold border-b-4 border-yellow-500 pb-1 mb-6'>About Me</h1>
        {/* intoduction description */}
        <p className='text-slate-200 mx-2 md:mx-4 text-sm/2 md:text-base'>Hello! My name is Raju I'm From Siddipet (Hyderabad), Telangana.
             I have completed my bacholers degree BSc computer science in S.R.K college, Siddipet.
             After that I'm learning Multiple technologies,
             I hands experience with technologies Like Python, HTML, CSS, JS and React.
             I developed Multiple websites like Todo, Recipes Book, Quiz..etc</p>

        <div className='flex flex-column md:flex-row justify-start items-start flex-wrap mx-2'>
        {/*  Education Details Section **************************  */}
        <section className='mt-5 mb-2 mr-4 sm:mr-10 md:mr-20 '>
            <h1 className='text-amber-400 flex  items-center text-2xl md:text-3xl font-bebas tracking-wide'>
                Education <FaGraduationCap className="ml-2 mb-[3px] text-4xl"/></h1>
            <ul className='list-disc p-0 ml-1 md:ml-2'>
                {/* Graduation */}
                <li className='list-disc text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 font-montserrat text-sm md:text-base m-0'>Graduation</h1>
                    <p className="text-slate-200 m-0 text-sm md:text-base"> S.R.K Degree college, Siddipet (2019-2022)</p>
                    <p className="text-slate-200 text-xs md:text-sm">CGPA - 8.5</p>
                </li>
                {/* Intermediate */}
                <li className='list-disc text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 font-montserrat text-sm md:text-base m-0'>Intermediate</h1>
                    <p className="text-slate-200 m-0 text-sm md:text-base">Pavithra Jr college, Siddipet (2017-2019)</p>
                    <p className="text-slate-200 text-xs md:text-sm">Percentage - 70%</p>
                </li>

                {/* Secondary School */}                
                <li className='list-disc text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 font-montserrat text-sm md:text-base m-0'>Secondary School</h1>
                    <p className="text-slate-200 m-0 text-sm md:text-base">Z.P.H.S GurralaGondi (2017-2019)</p>
                    <p className="text-slate-200 text-xs md:text-base">CGPA - 8.0</p>
                </li>
            </ul>
        </section>

        {/*  Experience Details Section *************************  */}
        <section className='mt-5 mb-2 mr-4 sm:mr-10 md:mr-20'>
            <h1 className='text-amber-400 flex  items-center text-2xl md:text-3xl font-bebas tracking-wide'>
                Experience <FaBriefcase className="ml-2  mb-[5px] text-[28px]"/></h1>
            <ul className='list-disc p-0 ml-2'>
                {/* Fresher */}
               <li className='list-disc text-slate-500 mb-4 ml-4'>
                <h1 className='text-slate-500 font-montserrat text-sm md:text-base m-0'>Fresher</h1>
            

                </li>

                {/* Internship Experience */}
                <li className='list-disc text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 font-montserrat text-sm md:text-base m-0'>Internship Experience</h1>
                    <p className="text-slate-200 m-0 text-sm md:text-base">Unified Mentor<br/>Frontend Development Internship</p>
                    <p className="text-slate-200 text-xs md:text-sm">Certified - 3 months of experience</p>
                </li>
            </ul>
        </section>

        {/*  Intrests Details Section ***************************  */}
        <section className='mt-5 mb-2 mr-4 sm:mr-10 md:mr-20'>
            <h1 className='text-amber-400 flex items-center text-2xl md:text-3xl font-bebas tracking-wide'>
                Interests <FaLightbulb className="ml-[6px] mb-[4px] text-[25px]" /></h1>
            <ul className='list-disc p-0 ml-2'>

                <li className='list-disc text-slate-500 mb-2 ml-4'>
                    <p className="text-slate-200 text-sm md:text-base">Video Editing</p>
                </li>

                <li className='list-disc text-slate-500 mb-2 ml-4'>
                    <p className="text-slate-200 text-sm md:text-base">Website Creation</p>
                </li>

                <li className='list-disc text-slate-500 mb-2 ml-4'>
                    <p className="text-slate-200 text-sm md:text-base">Cinema Appreciation</p>
                </li>

                <li className='list-disc text-slate-500 mb-2 ml-4'>
                    <p className="text-slate-200 text-sm md:text-base">Internet Exploration</p>
                </li>
            </ul>
        </section>

        {/*  Skills Details Section *****************************  */}
        <section className='mt-5 mb-2 mr-4 sm:mr-10 md:mr-20'>
            <h1 className='text-amber-400 flex items-center text-2xl md:text-3xl font-bebas tracking-wide'>
                Skills <FaLaptopCode className="ml-2  mb-[2px]  text-[28px]"/> </h1>
            {/*  tech skills stack */}
            <ul className='list-disc p-0 ml-2'>
                <li className='list-disc text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 flex items-center font-montserrat text-sm md:text-base m-0'>
                        Frontend <FaCode className="ml-2 h-4 w-4"/>
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base">HTML, Tailwind/CSS, JavaScript, ReactJs</p>
                </li>

                <li className='list-disc text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 flex items-center font-montserrat text-sm md:text-base m-0'>
                        Backend  <FaServer className="ml-2 h-[14px] w-[14px]"/></h1>
                    <p className="text-slate-200 text-sm md:text-base">Python (Fundamentals), NodeJs</p>
                </li>

                
                <li className='list-disc  text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 flex items-center font-montserrat text-sm md:text-base m-0'>
                        Database <FaDatabase className="ml-2 h-[14px] w-[14px]"/></h1>
                    <p className="text-slate-200 text-sm md:text-base">MongoDb, SQLlite</p>
                </li>
            </ul>
        </section>

        {/*  Tools and Technologies section *********************  */}
        <section className='mt-5 mb-2 mr-4 sm:mr-10 md:mr-20'>
            <h1 className='text-amber-400 flex items-center text-2xl md:text-3xl font-bebas tracking-wide'>
                Tools & Technologies <FaTools className="ml-2  mb-[3px]  text-[25px]"/> </h1>
          
            <ul className='list-disc p-0 ml-2'>
                {/* Programing environmentals  */}
                <li className='list-disc text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 flex items-center font-montserrat text-sm md:text-base m-0'>
                        Programing Language - Python
                    </h1>
                    <p className="text-slate-200 text-sm md:text-base">PyCharm, Vscode</p>
                </li>
                {/* Web Development  */}
                <li className='list-disc text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 flex items-center font-montserrat text-sm md:text-base m-0'>
                      Web Development</h1>
                    <p className="text-slate-200 text-sm md:text-base">Vscode, Postman</p>
                </li>

                {/* Designs  */}
                <li className='list-disc  text-slate-500 mb-4 ml-4'>
                    <h1 className='text-slate-500 flex items-center font-montserrat text-sm md:text-base m-0'>
                        Design</h1>
                    <p className="text-slate-200 text-sm md:text-base">Canva</p>
                </li>
            </ul>
        </section>

        {/*  Known Languages Details section ********************  */}
        <section className='mt-5 mb-2 mr-4 sm:mr-10 md:mr-20'>
            <h1 className='text-amber-400 flex items-center text-2xl md:text-3xl font-bebas tracking-wide'>
                Known Languages <FaLanguage className="ml-[6px] mb-[3px] text-3xl" /></h1>
            <ul className='list-disc p-0 ml-2'>
                {/* Fluent - English */}
                <li className='list-disc text-slate-500 mb-2 ml-4'>
                    <p className="text-slate-200 text-sm md:text-base">English</p>
                </li>
                 {/* Native - Telugu */}
                <li className='list-disc text-slate-500 mb-2 ml-4'>
                    <p className="text-slate-200 text-sm md:text-base">Telugu</p>
                </li>
            </ul>
        </section>

        </div>
    </div>


)


export default About