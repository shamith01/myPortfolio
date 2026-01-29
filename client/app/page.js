import React from 'react'
import Navbar from './components/Navbar'
import HeroContainer from './components/HeroContainer'

const page = () => {
  return (
    <div className='bg-black fixed w-full text-white min-h-screen overflow-y-auto '>
      <Navbar/>
      <HeroContainer/>
    </div>
  )
}

export default page
