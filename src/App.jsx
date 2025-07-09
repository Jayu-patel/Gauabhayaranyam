import './App.css'
import Navbar from './components/Navbar'
import About from './pages/home/About'
import Service from './pages/home/Service'
import DownloadSection from './pages/home/DownloadSection'
import Contact from './pages/home/Contact'
import Footer from './components/Footer'
import HowItWorks from './pages/home/HowItWorks'

function App() {
  return (
    <div className='w-[100vw]'>
      <Navbar/>
      <div 
        className='h-[30px] bg-[#F8F7F2] text-[#F8F7F2] scroll-mt-20' id='home'>.
      </div>
      <Home/>
      <HowItWorks/>
      <About/>
      <Service/>
      <DownloadSection/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
