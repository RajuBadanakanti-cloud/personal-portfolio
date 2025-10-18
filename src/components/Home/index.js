import './index.css'
// Profile Image Link 
const profileImgLink = "https://res.cloudinary.com/dnh9hnjbx/image/upload/v1757773090/My%20Personals/4KProfile-3-3_IMG_PhotoGrid_fn4dgc.png"
const Home = () =>  (

     <div id="home" className="bg-slate-900 min-h-screen flex flex-col justify-center items-center md:ml-72">
      {/*  Home content container */}
      <div className='md:w-4/5 flex flex-col justify-start items-center text-center mt-2 p-2'>
          {/* Profile Content */}
        <img src={profileImgLink} className='w-3/6 md:w-2/6 border-3 rounded-full mb-4 glow-effect' alt="Profile" />
        <h1 className="font-bold text-slate-50 text-xl md:text-4xl" >Hello! I'm
           <span className='text-amber-400 font-poppins '> Raju Badanakanti</span></h1>
        <p className="text-slate-400 text-sm md:text-lg tracking-wider" >Web Developement | Frontend Developer</p>
        <p className='text-slate-300 mt-4 text-xs md:text-sm  font-poppins leading-6'>Welcome to my portfolio<br/>
          Every journey tells a story. This is mine - a blend of ideas, experiences, and creations shared with the world.
        </p> 
      </div>
    </div>    

  )


export default Home