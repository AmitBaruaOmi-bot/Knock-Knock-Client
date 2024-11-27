import React from 'react'
import NavbarForUsers from '../components/NavbarForUsers'
import Footer from '../components/Footer'

export default function Wallet() {
  return (
    <div className='bg-success'>
      <div>
        <NavbarForUsers />
      </div>

       <div>
        <h2>Wallet Balance: $0.0</h2>
       </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
