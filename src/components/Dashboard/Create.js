import React from 'react'
import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

function Create() {
    const [loading, setLoading] = React.useState("false")
    const [authenticated, setAuth] = React.useState(false)
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        password: "",
        isAdmin: "",
        age: ""
    })
    function HandleSubmit(event) {
        event.preventDefault();
        setLoading("true")
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/employee/create-employee`, qs.stringify(form), {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("auth"),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            console.log(response);
            setLoading("false")
            setAuth(true)
        }).catch((err) => {
            setLoading("Try Again")
            console.log(err);
            console.log(form);
            setAuth(false)
        })
    }
    function HandleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }
    return (
        <form>
            <div className="form-group mt-3">
                <label for="name" className="sr-only">Name</label>
                <input type="name" name="name" id="name" className="form-control" placeholder="Full Name" onChange={HandleChange} />
            </div>
            <div className="form-group">
                <label for="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Email address" onChange={HandleChange} />
            </div>
            <div className="form-group">
                <label for="password" className="sr-only">Password</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="***********" onChange={HandleChange} />
            </div>
            <div className="form-group">
                <label for="isAdmin" className="sr-only">isAdmin</label>
                <input type="name" name="isAdmin" id="isAdmin" className="form-control" placeholder="Admin? 'true' or 'false'" onChange={HandleChange} />
            </div>
            <div className="form-group">
                <label for="age" className="sr-only">age</label>
                <input type="number" name="age" id="age" className="form-control" placeholder="Age" onChange={HandleChange} />
            </div>

            {
                loading === "false" ? <button name="login" id="login" className="btn btn-block login-btn mb-4 btn-success" type="button" onClick={HandleSubmit}>Login</button>
                    : loading === "Try Again" ? <button name="login" id="login" className="btn btn-block login-btn mb-4 btn-danger" type="button" onClick={HandleSubmit}>{loading}</button> :
                        <button name="login" id="login" className="btn btn-block login-btn mb-4" type="button" disabled >Loading</button>
            }
            {authenticated && <div className="alert alert-success" role="alert">
                Successfully created user, {form.name}
            </div>}
        </form>
    )
}

export default Create;