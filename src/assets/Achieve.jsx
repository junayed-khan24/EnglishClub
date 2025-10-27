import React, { useEffect, useState, useRef } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { GiGraduateCap } from 'react-icons/gi'
import { PiStudentFill } from 'react-icons/pi'

const Achieve = () => {
  const sectionRef = useRef(null)
  const [scrollKey, setScrollKey] = useState(0) // key change করলে counter পুনরায় শুরু হবে

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setScrollKey(prev => prev + 1) // scroll করার সাথে সাথে নতুন key
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const CountUp = ({ target, duration, keyProp }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.ceil(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }, [target, duration, keyProp]) // keyProp change → effect পুনরায় run

    return <span>{count.toLocaleString()}+</span>
  }

  return (
    <div className='bg-red-800' ref={sectionRef}>
      <div className='grid grid-cols-2 md:grid-cols-4 container mx-auto gap-8  md:gap-12 px-2 py-16'>

        <div className='flex flex-col bg-white rounded-md md:py-8 py-2 shadow-2xl hover:bg-black/30 hover:text-white/80 items-center justify-center text-center space-y-3 transition-all duration-300'>
          <GiGraduateCap  className='text-rose-800 md:size-20 size-14 ' />
          <h2 className='text-5xl font-bold'>
            <CountUp target={20000} duration={2000} keyProp={scrollKey} />
          </h2>
          <h2 className='text-xl  text-gray-700 hover:text-white'>Total Students</h2>
        </div>

        <div className='flex flex-col bg-white rounded-md py-8 shadow-2xl hover:bg-black/30 hover:text-white/80 items-center justify-center text-center space-y-3 transition-all duration-300'>
          <PiStudentFill className='text-green-500 md:size-20 size-14' />
          <h2 className='text-5xl font-bold'>
            <CountUp target={3000} duration={3000} keyProp={scrollKey} />
          </h2>
          <h2 className='text-xl text-gray-700 hover:text-white'>Active Students</h2>
        </div>

        <div className='flex flex-col bg-white rounded-md py-8 shadow-2xl hover:bg-black/30 hover:text-white/80 items-center justify-center text-center space-y-3 transition-all duration-300'>
          <FaYoutube  className='text-red-600 md:size-20 size-14' />
          <h2 className='text-5xl font-bold'>
            <CountUp target={15000} duration={4000} keyProp={scrollKey} />
          </h2>
          <h2 className='text-xl text-gray-700 hover:text-white'>YouTube Followers</h2>
        </div>

        <div className='flex flex-col bg-white rounded-md py-8 shadow-2xl hover:bg-black/30 hover:text-white/80 items-center justify-center text-center space-y-3 transition-all duration-300'>
          <FaFacebook  className='text-blue-600 md:size-20 size-14' />
          <h2 className='text-5xl font-bold'>
            <CountUp target={40000} duration={5000} keyProp={scrollKey} />
          </h2>
          <h2 className='text-xl text-gray-700 hover:text-white'>Facebook Followers</h2>
        </div>
      </div>
    </div>
  )
}

export default Achieve
