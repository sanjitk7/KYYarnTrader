import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import FormData from 'form-data'
import qs from 'qs'

function Products() {
    const [products, setProducts] = React.useState()
    const final = new FormData();
    const [loading, setLoading] = React.useState(true)
    const [update, setUpdate] = React.useState(0)
    const [edit] = React.useState(0)
    const [editing, setEditing] = React.useState(0)
    const [uploading, setUploading] = React.useState(0)
    const [picture, setPicture] = React.useState()
    const [clickedEditProduct, setClickedEditProduct ] = React.useState({})
    // const [error, setError] = React.useState()
    const [newProduct, setNewProduct] = React.useState({
        pCount: "",
        pAvailability: "",
        pCode: "",
        pColor: "",
        pPriceEst: "",
        pQty: "",
        pDesc: "",
        pPicture: ""
    })

    const [editedProduct, setEditedProduct] = React.useState({
        pCount: "",
        pAvailability: "",
        pPriceEst: "",
        pDesc: ""
    })


    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/summary`).then(response => {
            setProducts(response.data)
            console.log(response.data);
            setLoading(false)
            response.status !== 200 ? setUpdate(2) : setUpdate(0)
        }).catch((error) => {
            setUpdate(2)
        })
    }, [loading])

    function HandleUpload(event) {
        const value = event.target.files[0]
        setPicture(value)
    }

    function HandleClick(product) {
        const id = product.pCode;
        setUpdate(1)
        axios.delete(`${process.env.REACT_APP_API_BASE_URL}/products/` + id, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("auth")
            }
        }).then(response => {
            console.log(response.status);

            setLoading(true)
        })

    }
    // // Here
    // function HandleProductEdit(product) {
    //     const id = product.pCode;
    //     setEdit(1)
    //     axios.patch(`${process.env.REACT_APP_API_BASE_URL}/products/` + id, {
    //         headers: {
    //             'Authorization': 'Bearer ' + Cookies.get("auth")
    //         }
    //     }).then(response => {
    //         console.log(response.status);

    //         setLoading(true)
    //     })

    // }

    function HandleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setNewProduct((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }
    // Here
    function HandleEditProductChange(event) {
        const name = event.target.name
        const value = event.target.value
        console.log("editedProduct from HandleEditProductChange:",editedProduct)
        setEditedProduct((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }

    function HandleSubmit() {
        console.log(newProduct);
        for (const [key, value] of Object.entries(newProduct)) {
            final.append(key, value)
        }
        final.append('pPicture', picture, picture.name)
        // if (!picture.name) {
        //     
        // } else {
        //     document.getElementById("error").innerHTML = "Please upload a file"

        // }
        setUploading(1)
        console.log("stuck");
        // if (!(picture === undefined || picture === null)) {
        console.log("success");
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/products`, final, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("auth"),
                "Content-Type": `multipart/form-data; boundary=${final._boundary}`
            }
        }).then(response => {
            setLoading(true);
            setUploading(2);
            console.log(response.status);
        }).catch(err => {
            console.log(err)
            setUploading(3)
        })
        // } else {
        //     document.getElementById("error").innerHTML = "Please check your fields and try again!"
        // }

        console.log(final);
    }

    function HandleClose() {
        setUploading(0)
    }

    // Edited Product
    function HandleEditSubmit() {
        // console.log(newProduct);
        console.log("editedProduct from HandleEditSubmit:",qs.stringify(editedProduct))

        console.log("final from HandleEditSubmit:",final)
        setEditing(1)
        console.log("stuck");
        // if (!(picture === undefined || picture === null)) {
        console.log("success");
        console.log("this is thisClicked in handleEditSubmit", clickedEditProduct.pCode)
        axios.patch(`${process.env.REACT_APP_API_BASE_URL}/products/` + clickedEditProduct.pCode ,qs.stringify(editedProduct),{
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("auth"),
                "Content-Type": "application/x-www-form-urlencoded"
            }  
        }).then(response => {
            setLoading(true);
            setEditing(2);
            console.log(response.status);
        }).catch(err => {
            console.log(err)
            setEditing(3)
        })
        // } else {
        //     document.getElementById("error").innerHTML = "Please check your fields and try again!"
        // }

        console.log(final);
    }

    function HandleEditClose() {
        setEditing(0)
    }

    return (
        <>
            <button type="button" className="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal">
                New Product
</button>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Available</th>
                            <th>Color</th>
                            <th>Count</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading ? products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.pCode}</td>
                                    <td>{product.pAvailability.toString()}</td>
                                    <td>{product.pColor}</td>
                                    <td>{product.pCount}</td>
                                    <td>{product.pQty}</td>
                                    <td>{product.pPriceEst}</td>
                                    {update === 0 ?
                                        <td><button className="btn btn-danger" onClick={() => HandleClick(product)}>Delete</button></td>
                                        :
                                        <td><button className="btn btn-danger" onClick={() => HandleClick(product)}>Deleting</button></td>
                                    }
                                    {edit === 0 ?
                                        <td><button className="btn btn-primary" onClick={() => setClickedEditProduct(product)} data-toggle="modal" data-target="#editProductModal">Edit</button></td>
                                        :
                                        <td><button className="btn btn-primary" data-toggle="modal" data-target="#editProductModal">Updating</button></td>
                                    }
                                </tr>)
                        }) : <td>{update === 0 ? "Loading..." : update === 2 && "Unable to fetch data"}</td>}

                    </tbody>
                </table>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create a new product</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input className="form-control mb-2" type="name" placeholder="Product Code" name="pCode" onChange={HandleChange}></input>
                            <input className="form-control mb-2" type="number" placeholder="Product Count" name="pCount" onChange={HandleChange}></input>
                            <input className="form-control mb-2" type="text" placeholder="Availability" name="pAvailability" onChange={HandleChange}></input>
                            <input className="form-control mb-2" type="text" placeholder="Color" name="pColor" onChange={HandleChange}></input>
                            <input className="form-control mb-2" type="number" placeholder="Estimated Price" name="pPriceEst" onChange={HandleChange}></input>
                            <input className="form-control mb-2" type="number" placeholder="Product Quantity" name="pQty" onChange={HandleChange}></input>
                            <input className="form-control mb-2" type="test" placeholder="Product Description" name="pDesc" onChange={HandleChange}></input>
                            <input className="form-control mb-2" type="file" placeholder="Picture" name="pPicture" onChange={HandleUpload}></input>
                            <p id="error"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={HandleClose}>Close</button>
                            {uploading === 0 ? <button type="button" class="btn btn-primary" onClick={HandleSubmit}>Create Product</button> :
                                uploading === 1 ? <button type="button" class="btn btn-light" onClick={HandleSubmit}>Uploading</button> :
                                    uploading === 2 ? <button type="button" class="btn btn-success" data-dismiss="modal" onClick={HandleClose}>Done</button> :
                                        uploading === 3 && <button type="button" class="btn btn-danger" onClick={HandleSubmit}>Try Again</button>}
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editProductModalTitle">Update the following product fields</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input className="form-control mb-2" type="number" placeholder="Product Count" name="pCount" onChange={HandleEditProductChange}></input>
                            <input className="form-control mb-2" type="text" placeholder="Availability" name="pAvailability" onChange={HandleEditProductChange}></input>
                            <input className="form-control mb-2" type="number" placeholder="Estimated Price" name="pPriceEst" onChange={HandleEditProductChange}></input>
                            <input className="form-control mb-2" type="test" placeholder="Product Description" name="pDesc" onChange={HandleEditProductChange}></input>
                            <p id="error"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={HandleEditClose}>Close</button>
                            {editing === 0 ? <button type="button" class="btn btn-primary" onClick={HandleEditSubmit}>Update Product</button> :
                            editing === 1 ? <button type="button" class="btn btn-light" onClick={HandleEditSubmit}>Uploading</button> :
                            editing === 2 ? <button type="button" class="btn btn-success" data-dismiss="modal" onClick={HandleEditClose}>Done</button> :
                            editing === 3 && <button type="button" class="btn btn-danger" onClick={HandleEditSubmit}>Try Again</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products