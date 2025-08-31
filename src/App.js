import {useEffect} from 'react';
import MobileNavbar from './components/MobileNavbar'
import SideNavbar from './components/SideNavbar/sideNavbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css';

const App = () =>  {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>

      {/* Show MobileNavbar on small devices like (mobile) */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      
    
      {/* Show SideNavbar on desktop */}
      <div className="hidden md:block">
        <SideNavbar />
      </div>


      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      
    </>

  )
}



export default App;
