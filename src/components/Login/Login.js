import React from 'react'
import { Redirect } from 'react-router-dom'
import './login.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

function Login() {
    const [authenticated, setAuthenticated] = React.useState(false)
    const [loading, setLoading] = React.useState("false")
    const [formState, setFormState] = React.useState({
        email: "",
        password: ""
    })
    function HandleChange(event) {
        const name = event.target.name
        const value = event.target.value

        setFormState((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }
    function HandleSubmit(event) {
        setLoading("true")
        event.preventDefault()
        if (formState.email.length && formState.password.length) {
            const payload = {
                "email": formState.email,
                "password": formState.password
            }
            axios.post(`${process.env.REACT_APP_API_BASE_URL}/employee/login`, qs.stringify(payload), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                console.log(res.data.token)
                Cookies.set("name", res.data.userFound.name)
                Cookies.set("auth", res.data.token)
                setAuthenticated(true)
            }).catch(err => {
                console.log(err)
                setAuthenticated(false)
                setLoading("Try Again")
            })

        }
    }
    if (authenticated === false) {
        return (
            <>
                <Navbar />
                <div className="container container-login">
                    <div className="card login-card">
                        <div className="row no-gutters">
                            <div className="col-md-5">
                                <img src="yarn.jpg" alt="login" className="login-card-img" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <div className="brand-wrapper">
                                        <h1>Kumar Yarns</h1>
                                    </div>
                                    <p className="login-card-description">Sign into your account</p>
                                    <form action="#!">
                                        <div className="form-group">
                                            <label for="email" className="sr-only">Email</label>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Email address" onChange={HandleChange} />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label for="password" className="sr-only">Password</label>
                                            <input type="password" name="password" id="password" className="form-control" placeholder="***********" onChange={HandleChange} />
                                        </div>
                                        {loading === "false" ? <button name="login" id="login" className="btn btn-block login-btn mb-4" type="button" onClick={HandleSubmit}>Login</button>
                                            : loading === "Try Again" ? <button name="login" id="login" className="btn btn-block login-btn mb-4" type="button" onClick={HandleSubmit}>{loading}</button> :
                                                <button name="login" id="login" className="btn btn-block login-btn mb-4" type="button" disabled >Loading</button>}                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (authenticated === true) {
        return (
            <Redirect to="/dashboard" />
        )
    }
}

export default Login;