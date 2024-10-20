import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Food from './Food'
import Carousel from '../components/Carousel'

export default function Homepage() {
  return (
    <div className='home bg-success'>
      <div> <Navbar /> </div>

      <div><Carousel/></div>
      
      <div className='m-3'> 
        <Food/> 
        <Food/> 
        <Food/> 
        <Food/> 
        <Food/> 
        <Food/> 
        <Food/> 
        <Food/> 
        <Food/> 
        <Food/> 
      </div>

      <div> <Footer /> </div>

    </div>
  )
}
