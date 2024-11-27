import React from 'react'
import NavbarForUsers from '../components/NavbarForUsers'
import Footer from '../components/Footer'

export default function Promotions() {
  return (
    <div className='bg-success'>
      <div>
        <NavbarForUsers />
      </div>

       <div>
        <h2 >No promotions available right now</h2>
       </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
