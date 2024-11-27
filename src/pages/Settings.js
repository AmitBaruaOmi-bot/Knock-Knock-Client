import React from 'react'
import NavbarForUsers from '../components/NavbarForUsers'
import Footer from '../components/Footer'

export default function Settings() {
  return (
    <div className='bg-success'>
      <div>
        <NavbarForUsers />
      </div>

       <div>
        <h2>Settings</h2>
       </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
