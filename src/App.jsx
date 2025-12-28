

import './App.css'
import About from './assets/Componets/About'
import Achieve from './assets/Componets/Achieve'
import Contact from './assets/Componets/Contact'
import Courses from './assets/Componets/Courses'
import Feedback from './assets/Componets/Feedback'
import Footer from './assets/Componets/Footer'
import Hero from './assets/Componets/Hero'
import MymensinghMap from './assets/Componets/MymensinghMap'
import Navbar from './assets/Componets/Navbar'


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
      <MymensinghMap></MymensinghMap>
      <Contact></Contact>
      <Footer></Footer>


     </div>
    </>
  )
}

export default App
