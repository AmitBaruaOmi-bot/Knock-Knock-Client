import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='nav'>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand fst-italic bg-success d-inline text-white" to="/">Knock-Knock</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/myorders">Myorders</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/myprofile">Myprofile</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/wallet">Wallet</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/promotions">Promotions</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/help">Help</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/settings">Settimgs</Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}