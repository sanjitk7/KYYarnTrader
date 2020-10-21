import React from 'react'
import './dashboard.css'
import Navbar from '../Navbar/Navbar'
import Cookies from 'js-cookie'
import { Redirect, useParams } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar'
import Products from '../Dashboard/Products'
import Inquiries from '../Dashboard/Inquiry'
import Create from '../Dashboard/Create'
import Visual from '../Dashboard/Visual'

function Dashboard() {
    const { page } = useParams();
    if (Cookies.get("auth")) {
        return (
            <>
                <Navbar loggedIn={true} />
                <div className="container-fluid container-dash">
                    <div className="row">
                        <Sidebar name={page} />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Dashboard- {Cookies.get("name")}</h1>
                            </div>

                            <h2>{page ? page : "Visualisations"}</h2>
                            {page === "Products" && <Products />}
                            {page === "Inquiries" && <Inquiries />}
                            {page === "Create" && <Create />}
                            {page === undefined && <Visual />}



                        </main>
                    </div>
                </div>
            </>
        )
    } else {
        return (<Redirect to="/login" />)
    }
}

export default Dashboard;