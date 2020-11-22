import React from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

function Product() {
    const [products, setProducts] = React.useState()
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_BASE_URL}/products/summary`)
            .then((response) => {
                setProducts(response.data)
                setLoading(false)
            })
    })
    return (
        <div style={{ backgroundColor: "#fff", height: "100vh" }}>
            <Navbar />
            <div className="container mt-5">
                <div className="jumbotron" style={{ backgroundColor: "#fff" }}>
                    <h1>Products</h1>
                    <h3>Currently available Products. Note that this page is constantly updated and you get real time data. Please leave us an inquiry if you are interested in a product.</h3>
                </div>
                <div className="card-columns mb-5">
                    {!loading ? products.map((product) => {
                        return (
                            <div key={product._id} className="card">
                                <img src={`${process.env.REACT_APP_API_BASE_URL}/products/picture/` + product.pCode} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.pColor}</h5>
                                    <p className="card-text">{product.pDesc}</p>
                                    <p className="card-text">Yarn Count: {product.pCount}</p>
                                    <p className="card-text">Price Est: {product.pPriceEst}</p>
                                    <p className="card-text">Availability: {product.pPriceEst?<>Yes</>:<>No</>}</p>
                                    <p className="card-text">Current Stock: {product.pQty}</p>
                                    <p className="card-text"><small className="text-muted">Code: {product.pCode}</small></p>
                                    
                                </div>
                            </div>
                        )
                    }) : <h3>Loading</h3>}

                </div>
            </div>
        </div>
    )
}

export default Product;