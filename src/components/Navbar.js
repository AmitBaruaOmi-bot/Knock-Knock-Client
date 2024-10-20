import React from 'react'
import { Link } from 'react-router-dom'
import DropDownProfile from './DropDownProfile'

export default function Navbar() {
    return (
        <div className='nav'>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand fst-italic bg-success d-inline text-white" to="/">Knock-Knock</Link>

                        <DropDownProfile/>

                        <Link className="nav-link fst-italic d-inline text-white" to="/login">Login</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/signup">Signup</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

