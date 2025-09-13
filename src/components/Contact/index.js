
import ClipLoader from "react-spinners/ClipLoader";

import {FaEnvelope,FaMapMarkerAlt,FaGithub,FaLinkedin,FaInstagram,FaTelegramPlane } from 'react-icons/fa'
import './index.css'
import { useState } from 'react'

const Contact = () => {

const [isFormLoading, setFormLoading] = useState(false) // loading effect

    // NAME >>
    const [name, setName] = useState("")

    const handleNameInput = (event) => {
        setName(event.target.value)
    }

    // EMAIL >>
    const [email, setEmail] = useState("")

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    // SUBJECT >>
    const [subject, setSubject] = useState("")

    const handleSubjectInput = (event) => {
        setSubject(event.target.value)
    }


    // MESSAGE >>
    const [message, setMessage] = useState("")

    const handleMessageInput = (event) => {
        setMessage(event.target.value)
    }


    /* filling details validation  */
    const filledDetailsValidation = () => {
      if (name.trim().length > 2 && email.trim().length > 2 && subject.trim().length > 2){
           return true
        }
        else {
             setFormLoading(false)
       return  alert("Enter Your Valid Details - At least 3 characters")
    }
    
    }
    


    // FORM SUBMITING >>>>
    const onSubmitForm = async (event) => {
        event.preventDefault()
        setFormLoading(true) // Loading...
       if (filledDetailsValidation() === true){        
        const url = "https://personal-portfolio-0n8d.onrender.com/send"; // Backend Url
        const options = {
            method:"POST",
            headers:{
            "Content-Type": "application/json",
            },
            body:JSON.stringify({name, email, subject, message})
        }
        try {
            const response = await fetch(url, options) // fetching with url, options
            const data = await response.json()
            if (response.ok === true){
            setFormLoading(false) //loading stop
            alert("successfully Sent!")
            setSubject("")
            setMessage("")
            console.log(data)
            } else {
                console.log("invalid! 401")
                setFormLoading(false) //loading stop
            }
        } catch(error){ 
            // server error >>> then reset the form
            setFormLoading(false)
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            console.log(error.message)
            alert("Server is not reachable. Please try again later.")
        }
    } 


    }

// RENDERING FORM VIEW *******
const renderFormView = () => (
    // FORM SECTION >>
        <form className='w-11/12 md:w-1/2 flex flex-col justify-start items-start p-2 mb-10 md:mb-5 mr-1 md:mr-10 ' onSubmit={onSubmitForm}>
            <h1 className='text-amber-400 text-2xl md:text-3xl font-bebas tracking-wide mb-3'>Get in Touch</h1>
                {/* Name */}
                <input type="text"
                className='h-12 md:h-14 w-full text-sm md:text-base  bg-transparent border-1 border-slate-300 rounded-lg outline-none  focus:border-amber-400 text-slate-200 px-3 mb-4'
                placeholder='Name'
                value={name}
                onChange={handleNameInput}
             />

                {/* Email */}
                <input type="email"
                className='h-12 md:h-14 w-full text-sm md:text-base bg-transparent border-1 border-slate-300 rounded-lg outline-none focus:border-amber-400 text-slate-200 px-3 mb-4'
                placeholder='Email'
                value={email}
                onChange={handleEmailInput}/>

                {/* Subject */}
                <input type="text"
                className='h-12 md:h-14 w-full text-sm md:text-base bg-transparent border-1 border-slate-300 rounded-lg outline-none  focus:border-amber-400 text-slate-200 px-3 mb-4'
                placeholder='Subject'
                value={subject}
                onChange={handleSubjectInput}/>

                {/* Message */}
                 <textarea placeholder="Write your message..."
                 className="h-28 md:h-32 w-full text-sm md:text-base bg-transparent border-1 border-slate-300 rounded-lg focus:border-amber-400 outline-none text-slate-200 p-3 mb-4"
                 value={message}
                 onChange={handleMessageInput} />

                {/* Submit Button */}           
                <button type="submit"
                 className='h-10 md:h-12 w-44 md:w-48 bg-amber-400 rounded-lg button-glow-effect
                  text-slate-900 text-base md:text-lg font-bold p-2 mt-2 mx-auto'>
                  Submit</button>
        </form>
)

// RENDER FORM Loading  VIEW ****
const renderFormLoaderView  = () => (
    // Loading - ClipLoader
  <div className=" h-[50vh] md:h-[60vh] w-full md:w-1/2 flex flex-col justify-center items-center p-2 mb-4 mr-10 border-1 rounded-md border-slate-200">
    <ClipLoader color="#fbbf24" size={60} />
  </div>
);
   
    return (
    <div id="contact" className="contact-bg-container min-h-screen flex flex-col justify-start items-start md:ml-72 pt-16 md:pt-6 px-4 pb-4">
        <h1 className='text-slate-100 text-3xl font-oswald font-bold border-b-4 border-yellow-500 pb-1 mb-6'>Contact</h1>
        
        <section className=' w-full flex flex-row justify-start items-center mt-2 md:mt-5 mx-2 md:mx-4 flex-wrap '>
            {/* For Requiters: if form is filled and submit, firstly the loader is render then after success/failure result form view is render */}
            {isFormLoading ? renderFormLoaderView() : renderFormView()}
           {/* my Contact info */}
            <div className='flex flex-col justify-center items-start p-2'>
                <h1 className='text-amber-400 text-2xl md:text-3xl font-bebas tracking-wide mb-3'>Contact Information</h1>
                <p className='flex flex-row items-center text-sm md:text-base text-slate-200 m-0 p-0 mb-2'>
                <FaEnvelope className='mr-2 mt-1'/>rajubadanakanti7@gmail.com</p>
                
                <p className='flex flex-row items-center text-sm md:text-base text-slate-200 m-0 p-0  mb-2'>
                <FaMapMarkerAlt className='mr-2 '/>Siddipet/Hyderabad, Telangana</p>
 
                <div className='flex flex-row items-cente text-stone-200 text-2xl mt-3'>
                    {/* Linkedin */}
                    <a href='https://www.linkedin.com/in/raju-badanakanti-491705259/' 
                    target="__blank" className='mr-5 md:mr-4 text-slate-700 text-sm md:text-base hover:text-amber-500 bg-slate-100 rounded-full p-2'>
                    <FaLinkedin/></a>

                    {/* GitHub */}
                    <a href='https://github.com/RajuBadanakanti-cloud' 
                    target="__blank" className='mr-5 md:mr-4 text-slate-700 text-sm md:text-base hover:text-amber-500  bg-slate-100 rounded-full p-2'>
                    <FaGithub/></a>

                    {/* Instagram */}
                    <a href="instagram"
                    target="__blank"  
                    onClick={(e) => {
                        e.preventDefault();
                        alert("User Not using at this time");
                    }}
                    className='mr-4 text-slate-700 text-sm md:text-base hover:text-amber-500  bg-slate-100 rounded-full p-2'>
                    <FaInstagram/></a>
              
                    {/* Telegram */}
                    <a href='telegram' 
                    target="__blank"
                    onClick={(e) => {
                    e.preventDefault();
                    alert("User Not using at this time");
                    }}
                    className='mr-5 md:mr-4 text-slate-700 text-sm md:text-base hover:text-amber-500  bg-slate-100 rounded-full p-2'><FaTelegramPlane/>
                    </a>
                </div>
       
            </div>

        </section>
       
    </div>

 )
}

export default Contact