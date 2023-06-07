import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
const { id } = useParams();
const [product, setProduct] = useState({});
const [loaded, setLoaded] = useState(false);

const navigate = useNavigate();

useEffect(() => {
    axios
    .get(`http://localhost:8000/api/products/${id}`)
    .then((res) => {
        setProduct(res.data);
        setLoaded(true);
    });
}, [id]);

const deleteProduct = (productId) => {
    axios
    .delete(`http://localhost:8000/api/products/delete/${productId}`)
    .then((res) => {
        navigate('/api/products');
    });
};

return (
    <div className="product-edit dr">
        {loaded && (
            <div>
                <h1>{product.name}</h1>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <button
                    className='btn btn-danger'
                    onClick={(e) => {
                        deleteProduct(product._id);
                    }}
                >
                    Delete
                </button>
                <button
                    className="btn btn-primary mr-2"
                    onClick={() => navigate(`/api/products/edit/${product._id}`)}
                >
                    Edit
                </button>
                <Link to="/api/products" className="btn btn-secondary">
                Back
                </Link>
            </div>
        )}
    </div>
);
};

export default ProductDetail;



