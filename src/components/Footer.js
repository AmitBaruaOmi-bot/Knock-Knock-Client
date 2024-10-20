import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">About Us</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Contact Us</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Terms & Conditions</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Policy's</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Logout</Link></li>
        </ul>
        <p className="text-center text-white">© 2024 Knock-Knock, Inc</p>
      </footer>
    </div>
  )
}
