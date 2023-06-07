import './App.css';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';

function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/new')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1 className='fr cr'>Product Manager <div>
      <Link to="/api/products" className="btn btn-nav">
                Home
                </Link>
        </div></h1>
      <Routes>
        <Route element={<Form />} path="api/products/new" />
        <Route element={<ProductList />} path="api/products" />
        <Route element={<ProductDetails />} path="api/products/:id" />
        <Route element={<EditProduct />} path="api/products/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
