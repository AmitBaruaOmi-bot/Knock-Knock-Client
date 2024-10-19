import React from 'react'
import {Link} from 'react-router-dom'
import DropDownProfile from './DropDownProfile'

export default function Navbar() {
    return (
        <div className='nav'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">Knock-Knock</Link>
                    <div>
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>

                        <DropDownProfile/>

                        <Link className="nav-link" to="/login">Login</Link>

                        <Link className="nav-link" to="/signup">Signup</Link>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

