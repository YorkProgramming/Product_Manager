import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="product-edit dr">
            <h1 className='mx-auto'>Product Dashboard</h1>
            
            <table className='col-md-6 mx-auto mt-4'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr key={product._id}>
                                <td>
                                    <Link to={`/api/products/${product._id}`}>{product.name}</Link>
                                </td>
                                <td>${product.price}</td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => {
                                            axios.delete(`http://localhost:8000/api/products/delete/${product._id}`)
                                            .then(() => {
                                                const filteredProducts = products.filter(p => p._id !== product._id)
                                                setProducts(filteredProducts)
                                            })
                                            .catch(err => console.log(err))
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
            <button
                className='btn btn-info offset-5 mt-3'
                onClick={() => navigate("/api/products/new")}
            >
                Create Product
            </button>
        </div>
    )
}

export default ProductDashboard;