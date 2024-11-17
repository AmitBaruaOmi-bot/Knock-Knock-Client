import React from 'react'
import { Link } from'react-router-dom'

export default function Myprofile() {
  return (
    <div>
       <Link className="nav-link fst-italic d-inline text-white" to="/logout">Logout</Link>
    </div>
  )
}
