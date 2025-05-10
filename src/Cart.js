import './App.css'; 
import { useSelector,useDispatch } from 'react-redux';

import {removeP,change_product_value} from './reduxFiles/CartSlice.js' 
import {add} from './reduxFiles/OrderSlice.js'

const CartList = () => {
  const products = useSelector(store=>store.cart);
  const dispatch=useDispatch()

  const addToCart = (product) => {
          dispatch(change_product_value({id:product.productId,value:1}))
  };

  const removeFromCart = (productId) => {
       dispatch(change_product_value({id:productId,value:-1}))
  };
  const dele=(productId)=>{
        dispatch(removeP({id:productId}))
  }

  const order = (product)=>{
         dispatch(add(product))
  }

  

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {products.map(product => (
          
          <div key={product.product.productId} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '250px'
          }}>
            <h3>{product.product.productName}</h3>
            <p>{product.product.description}</p>
            <p><strong>₹{product.product.cost}</strong></p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => removeFromCart(product.product.productId)}>-</button>
              <span>{product.value}</span>
              <button onClick={() => addToCart(product.product)}>+</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={()=>dele(product.product.productId)}>delete</button>
                <button onClick={()=>{order(product)}}>order</button>
                </div>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '30px' }}>Cart Summary</h3>
      
    </div>
  );
};

export default CartList;