
import './App.css';
import ProductList from './products';
import CartList from './Cart';
import OrderList from './Orders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/orders" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
