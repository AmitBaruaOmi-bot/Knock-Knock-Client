import React from 'react'
import { Link } from 'react-router-dom'
import NavbarForUsers from "../components/NavbarForUsers"
import Carousel from "../components/Carousel"

import Footer from '../components/Footer'
import Food from '../components/Food'

export default function HomepageAfterLogin() {

  return (
    <div>

      <div className='home bg-success'>

        <div> 
          <NavbarForUsers /> 
        </div>

        <div> <Carousel /> </div>

        <div className='col-12 col-lg'>
          <Food/>
        </div>

        <div> <Footer /> </div>

      </div>
    </div>
  )
}
