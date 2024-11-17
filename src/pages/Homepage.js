import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Carousel from '../components/Carousel'
import Food from '../components/Food'




export default function Homepage() {

  return (
    <div className='home bg-success'>

      <div> <Navbar /> </div>

<<<<<<< HEAD
      <div><Carousel /></div>

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
=======
      <div><Carousel/></div>
      
      <div className='m-3'> 
        <Food/> 
        <Food/> 
        <Food/> 
>>>>>>> Commit
      </div>

      <div> <Footer /> </div>

    </div>
  )
}
