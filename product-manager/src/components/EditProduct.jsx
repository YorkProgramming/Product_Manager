import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ProductEdit = () => {
const { id } = useParams();
const navigate = useNavigate();
const [product, setProduct] = useState({ name: '', price: 0, description: '' });

useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err));
}, [id]);

const changeHandler = (e) => {
    setProduct({
    ...product,
    [e.target.name]: e.target.value
    });
};

const editProduct = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/edit/${id}`, product)
    .then(res => {
        console.log(res.data);
        navigate('/api/products');
    })
    .catch(err => console.log(err));
};

return (
    <div className="product-edit dr">
        <h1>Edit Product</h1>
        <div className="input-data input">
        <form onSubmit={editProduct}>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={product.name}
                onChange={changeHandler}
            />
            <div className="underline"></div>
            </div>

            <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
                type="number"
                name="price"
                value={product.price}
                onChange={changeHandler}
            />
            <div className="underline"></div>
            </div>

            <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                name="description"
                value={product.description}
                onChange={changeHandler}
            />
            <div className="underline"></div>
            </div>

            <button type="submit" className="btn btn-primary mr-2">
            Update
            </button>

            <Link to={`/api/products/${product._id}`} className="btn btn-secondary">Back</Link>
        </form>
        </div>
    </div>
    );
};

export default ProductEdit;