import { useSelector,useDispatch } from "react-redux"; 
import {cancel} from './reduxFiles/OrderSlice' 

const OrderList = () => {
  const products = useSelector(store=>store.order);
  const dispatch=useDispatch()

 

  const cancelOrder = (productId) => {
       dispatch(cancel({id:productId}))
  };
  

  

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

            
              <span>{product.value*product.product.cost}</span>
            
            <div><button onClick={()=>cancelOrder(product.product.productId)}>cancelorder</button></div>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '30px' }}>Cart Summary</h3>
      
    </div>
  );
};


export default OrderList