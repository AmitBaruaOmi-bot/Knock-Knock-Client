import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Food from '../components/Food'




export default function Homepage() {

  return (
    <div className='home bg-success'>

      <div> <Navbar /> </div>

      <div><Carousel /></div>

      <div className='col-12 col-lg'>
       <Food/>
      </div>

      <div> <Footer /> </div>

    </div>
  )
}
