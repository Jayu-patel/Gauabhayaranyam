import './App.css'
import Navbar from './components/Navbar'
import About from './pages/home/About'
import Service from './pages/home/Service'
import DownloadSection from './pages/home/DownloadSection'
import Contact from './pages/home/Contact'
import Footer from './components/Footer'
import HowItWorks from './pages/home/HowItWorks'
import Home from './pages/home/Home'
import {Element} from 'react-scroll'

function App() {
  return (
    <div className='w-[100vw]'>
      <Navbar/>
      <Element name="home" className="element"> <Home/> </Element>
      <Element name="about" className="element"> <About/> </Element>
      <Element name="how-it-works" className="element"> <HowItWorks/> </Element>
      <Element name="services" className="element"> <Service/> </Element>
      <Element name="download-section" className="element"> <DownloadSection/> </Element>
      <Element name="contact" className="element"> <Contact/> </Element>
      <Footer/>
    </div>
  )
}

export default App
