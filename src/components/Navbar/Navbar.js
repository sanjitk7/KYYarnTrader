import React from 'react'
import './navbar.css'

function Navbar(props) {
    return (
        <nav class="site-header sticky-top py-1">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <a class="py-2" href="#" aria-label="Product">
                    <strong>KY</strong>
                </a>
                <a class="py-2 d-none d-md-inline-block" href="/">Home</a>
                <a class="py-2 d-none d-md-inline-block" href="/products">Products</a>
                <a class="py-2 d-none d-md-inline-block" href="/inquiry">Inquiry</a>
                {props.loggedIn ? <a class="py-2 d-none d-md-inline-block" href="/logout" >Logout</a> :
                    <a class="py-2 d-none d-md-inline-block" href="/login">Login</a>}

            </div>
        </nav>
    )
}

export default Navbar;