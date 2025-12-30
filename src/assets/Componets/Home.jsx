import React from 'react';
import Navbar from './Navbar';
import Achieve from './Achieve'
import Courses from './Courses'
import Feedback from './Feedback'
import Contact from './Contact'
import Footer from './Footer'
import Slider from './Slider';


const Home = () => {
    return (
        <div className='arimo-uniquifier'> 
             <Navbar></Navbar>
             <Slider></Slider>
             <Courses></Courses>
             <Achieve></Achieve>
      <div className='divider divider-horizontal bg-red-300 h-1 w-full'></div>
            <Feedback></Feedback>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;