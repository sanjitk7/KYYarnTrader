import React from 'react'
import axios from 'axios'
import qs from 'qs'
import Navbar from '../Navbar/Navbar'

function Inquiry() {
    const [status, setStatus] = React.useState(0)
    const [inq, setInq] = React.useState(
        {
            inquirerName: "",
            email: "",
            phoneNumber: "",
            organisation: "",
            organisationAddr: {
                lineOne: "",
                lineTwo: "",
                city: "",
                state: "",
                pincode: ""
            },
            estPurchaseSize: "",
            productInqCode: "",
            remark: ""
        }
    )
    function HandleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setInq((previous) => {
            if (!(name === "lineOne" || name === "lineTwo" || name === "city" || name === "state" || name === "pincode")) {
                return {
                    ...previous,
                    [name]: value,
                }
            } else {
                return {
                    ...previous,
                    organisationAddr: {
                        ...previous.organisationAddr,
                        [name]: value
                    }
                }
            }
        })

    }

    function HandleSubmit(event) {
        setStatus(1)
        event.preventDefault();
        axios.post("http://127.0.0.1:4000/inquiry", inq, {
            headers: {
                // "Content-Type": "application/x-www-form-urlencoded"
                "Content-Type": "application/json"
            }
        }).then(response => {
            setStatus(2)

        }).catch(error => {
            setStatus(3)
            console.log(error);
        })
    }

    return (
        <div>
            <Navbar />
            <div class="container mb-5">
                <div class="py-5 text-center">
                    <h2>Inquiry form</h2>
                    <p class="lead">
                        You may inquire for upto <strong>1(one)</strong> product at a time. Please fill in the details below.                    </p>
                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation" novalidate>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">Your name</label>
                                <input type="text" class="form-control" id="firstName" name="inquirerName" placeholder="" required onChange={HandleChange} />
                                <div class="invalid-feedback">
                                    Valid name is required.
                             </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Organisation name</label>
                                <input type="text" class="form-control" id="lastName" name="organisation" placeholder="" onChange={HandleChange} required />
                                <div class="invalid-feedback">
                                    Valid name is required.
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-6 mb-3">
                                <label for="username">Product Code</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="username" placeholder="Product Code" name="productInqCode" onChange={HandleChange} required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="number">Phone Number</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="number" placeholder="Phone Number" name="phoneNumber" onChange={HandleChange} required />
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="you@example.com" onChange={HandleChange} required />
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                        </div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" name="lineOne" placeholder="1234 Main St" onChange={HandleChange} required />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                        </div>
                        </div>

                        <div class="mb-3">
                            <label for="address2">Address 2</label>
                            <input type="text" class="form-control" id="address2" name="lineTwo" placeholder="Apartment or suite" onChange={HandleChange} />
                        </div>

                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="city">City</label>
                                <input type="text" class="form-control" id="city" name="city" placeholder="City" onChange={HandleChange} />
                                <div class="invalid-feedback">
                                    Please select a valid country.
                            </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">State</label>
                                <input type="text" class="form-control" id="state" name="state" placeholder="State" onChange={HandleChange} />
                                <div class="invalid-feedback">
                                    Please select a valid country.
                            </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" id="zip" name="pincode" placeholder="" onChange={HandleChange} required />
                                <div class="invalid-feedback">
                                    Zip code required.
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="estPurchaseSize">Estimated purchase size</label>
                                <input type="text" class="form-control" id="estPurchaseSize" name="estPurchaseSize" placeholder="" onChange={HandleChange} required />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="remark">Remark</label>
                                <input type="text" class="form-control" id="remark" name="remark" placeholder="" onChange={HandleChange} required />
                            </div>
                        </div>
                        <hr class="mb-4" />
                        {status === 0 ?
                            <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={HandleSubmit}>Publish Inquiry</button>
                            :
                            status === 1 ?
                                <button class="btn btn-primary btn-lg btn-block" type="submit" disabled >Publishing...</button>
                                :
                                status === 2 ?
                                    <button class="btn btn-success btn-lg btn-block" type="submit" disabled>Successful!</button>
                                    :
                                    <button class="btn btn-danger btn-lg btn-block" type="submit" onClick={HandleSubmit}>Try Again</button>
                        }                    </form>
                </div>
            </div>
        </div>
    )
}

export default Inquiry;