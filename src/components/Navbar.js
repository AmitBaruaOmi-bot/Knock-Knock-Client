import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='nav'>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand fst-italic bg-success d-inline text-white" to="/">Knock-Knock</Link>
                    </div>

                    <div className='d-flex'>
                        <Link className="btn bg-primary fst-italic text-white mx-1" to="/login">Login</Link>

                        <Link className="btn bg-primary fst-italic text-white mx-1" to="/signup">Signup</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

