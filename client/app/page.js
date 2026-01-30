import React from 'react'
import Navbar from './components/Navbar'
import HeroContainer from './components/HeroContainer'
import Skills from './components/Skills'

const page = () => {
  return (
    <div className='bg-black  w-full text-white  overflow-y-auto '>
      <Navbar/>
      <HeroContainer/>
       {/* <div className='w-full flex justify-center translate-y-[-240px]'>
        <div className=' border-2 rounded-full p-4 animate-bounce motion-reduce:animate-none  border-slate-700'>

        <div className="w-[2px] h-[35px] bg-slate-300"></div>
        </div>
      </div> */}
      <div className='w-full min-h-screen'>
        

      <Skills/>
      </div>
    </div>
  )
}

export default page
