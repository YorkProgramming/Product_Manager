import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: ''
    })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setProduct({
        ...product,
        [e.target.name]: e.target.value
        })
    }

    const formValidator = () => {
        let isValid = true
        if (product.name.length < 2) {
        return false
        }
        if (product.price.length < 1) {
        return false
        }
        if (product.description.length < 5) {
        return false
        }
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        } else {
        setErrors({
            name: 'Name must be at least 2 characters',
            price: 'Price must be at least 1 character',
            description: 'Description must be at least 5 characters'
        })
        }
        navigate('/api/products')
    }

    return (
        <div className="product-edit dr">
            <h1>Add Product</h1>
            {errors.name ? <p className="text-danger">{errors.name}</p> : ''}
            {errors.price ? <p className="text-danger">{errors.price}</p> : ''}
            {errors.description ? (
            <p className="text-danger">{errors.description}</p>
            ) : (
            ''
            )}
            <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-data">
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    onChange={onChangeHandler}
                    required
                />
                <div className="underline">
                    <div className="underline__before"></div>
                </div>
                <label htmlFor="name">Product Name</label>
                </div>
            </div>
            <div className="form-group">
                <div className="input-data">
                <input
                    type="number"
                    className="form-control"
                    name="price"
                    id="price"
                    onChange={onChangeHandler}
                    required
                />
                <div className="underline">
                    <div className="underline__before"></div>
                </div>
                <label htmlFor="price">Price</label>
                </div>
            </div>
            <div className="form-group">
                <div className="input-data">
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    onChange={onChangeHandler}
                    required
                />
                <div className="underline">
                    <div className="underline__before"></div>
                </div>
                <label htmlFor="description">Description</label>
                </div>
            </div>
            <button className="btn btn-info mt-3">Create Product</button>
            </form>
            <Link to="/api/products" className="btn btn-secondary">
                Back
                </Link>
        </div>
        );
    }

export default ProductForm
