import { fetchProducts } from "./reduxFiles/Productsslice.js";
import { useDispatch, useSelector } from "react-redux";
import { addP } from "./reduxFiles/CartSlice.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';





const ProductList = () => {
  
const dispatch=useDispatch()
  const [showMessage, setShowMessage] = useState(false);
  const addToCart = (product) => {
    dispatch(addP({product,value:1}))
    setShowMessage(true);       
    setTimeout(() => setShowMessage(false), 2000);
  };
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  const dummyProducts=useSelector(state=>state.product)
  
  

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => navigate('/')}>Products</button>
        <button onClick={() => navigate('/cart')}>Cart</button>
        <button onClick={() => navigate('/orders')}>Orders</button>
      </div>
      <div>{showMessage && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Added to cart!
        </div>
      )}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {dummyProducts.map(product => (
          <div key={product.productId} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '250px'
          }}>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p><strong>₹{product.cost}</strong></p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductList;


