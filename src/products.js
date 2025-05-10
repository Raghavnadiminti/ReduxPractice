import dummyProducts from './products_data.js'
import { useDispatch } from "react-redux";
import { addP } from "./reduxFiles/CartSlice.js";
import { useNavigate } from "react-router-dom";




const ProductList = () => {
  
const dispatch=useDispatch()
  const addToCart = (product) => {
    dispatch(addP({product,value:1}))
  };
  const navigate=useNavigate()

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => navigate('/')}>Products</button>
        <button onClick={() => navigate('/cart')}>Cart</button>
        <button onClick={() => navigate('/orders')}>Orders</button>
      </div>
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


