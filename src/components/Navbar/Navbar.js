import React from 'react'
import './navbar.css'

function Navbar(props) {
    return (
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <a className="py-2" href="#top" aria-label="Product">
                    <strong>KY</strong>
                </a>
                <a className="py-2 d-none d-md-inline-block" href="/">Home</a>
                <a className="py-2 d-none d-md-inline-block" href="/products">Products</a>
                <a className="py-2 d-none d-md-inline-block" href="/inquiry">Inquiry</a>
                {props.loggedIn ? <a className="py-2 d-none d-md-inline-block" href="/logout" >Logout</a> :
                    <a className="py-2 d-none d-md-inline-block" href="/login">Login</a>}

            </div>
        </nav>
    )
}

export default Navbar;