import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Homepage() {
  return (
    <div className='home'>
        <div> <Navbar/> </div>
        <div> Body </div>
        <div> <Footer/> </div>

    </div>
  )
}
