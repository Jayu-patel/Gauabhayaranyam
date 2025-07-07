import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/home/Hero'
import About from './pages/home/About'
import Service from './pages/home/Service'
import DownloadSection from './pages/home/DownloadSection'
import Contact from './pages/home/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-[100vw] font-[outfit]'>
      <Navbar/>
      <div className='h-[77px] fixed top-0 bg-[#F8F7F2] text-[#F8F7F2]'>.</div>
      <Hero/>
      <About/>
      <Service/>
      <DownloadSection/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
