import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useCart } from '../components/ContextReducer';


export default function Navbar() {

    const cart = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user authentication data (e.g., token)
        localStorage.removeItem("authToken");
        // Redirect to login page
        navigate("/login");
    };

    return (
        <div className='nav'>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand fst-italic bg-success d-inline text-white" to="/homepageafterlogin">Knock-Knock</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/myorders">Myorders</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/myprofile">Myprofile</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/wallet">Wallet</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/promotions">Promotions</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/help">Help</Link>

                        <Link className="nav-link fst-italic d-inline text-white" to="/settings">Settimgs</Link>


                        <Link to="/cart" className="btn btn-outline-light fst-italic ms-3">
                            Cart {""}
                            <Badge pill className='bg-primary'>{cart.length}</Badge>
                        </Link>

                        <button
                            className="btn btn-outline-light fst-italic ms-3"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    )
}