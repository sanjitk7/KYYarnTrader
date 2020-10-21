import React from 'react'
import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

function Inquiries() {
    const [products, setProducts] = React.useState()
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        axios.get("https://sanjit-yarn-trading-backend.herokuapp.com/inquiry", {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("auth")
            }
        }).then(response => {
            setProducts(response.data)
            console.log(response.data);
            setLoading(false)
        })
    }, [])

    return (
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Size</th>
                        <th>Organisation</th>
                        <th>Phone</th>
                        <th>Products</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading ? products.map((product) => {
                        return (<tr>
                            <td>{product.inquirerName}</td>
                            <td>{product.email}</td>
                            <td>{product.estPurchaseSize}</td>
                            <td>{product.organisation}</td>
                            <td>{product.phoneNumber}</td>
                            <td>{product.productInqCode}</td>
                            <td>{product.remark}</td>
                        </tr>)
                    }) : <td>Loading...</td>}

                </tbody>
            </table>
        </div>
    )
}

export default Inquiries