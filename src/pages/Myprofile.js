import React from 'react'
import { Link } from'react-router-dom'

export default function Myprofile() {
  return (
    <div className='container'>
       <Link to={"/"} className="m-3 btn btn-primary"> Logout </Link>
    </div>
  )
}
