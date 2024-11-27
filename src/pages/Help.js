import React from 'react'
import NavbarForUsers from '../components/NavbarForUsers'
import Footer from '../components/Footer'

export default function Help() {
  return (
    <div className='bg-success'>
      <div>
        <NavbarForUsers />
      </div>

       <div>
        <h2> Customer Support: 000555000555000 </h2>
       </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
