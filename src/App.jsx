

import './App.css'
import About from './assets/About'
import Achieve from './assets/Achieve'
import Courses from './assets/Courses'
import Feedback from './assets/Feedback'
import Footer from './assets/Footer'
import Hero from './assets/Hero'
import Navbar from './assets/Navbar'


function App() {

  return (
    <>
     <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Courses></Courses>
      <Achieve></Achieve>
      <About></About>
      <div className='divider divider-horizontal bg-red-300 h-1 w-full'></div>
      <Feedback></Feedback>
      <Footer></Footer>


     </div>
    </>
  )
}

export default App
