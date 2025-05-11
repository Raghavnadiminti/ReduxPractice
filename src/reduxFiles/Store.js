import { configureStore } from "@reduxjs/toolkit";
import cart from './CartSlice'
import order from './OrderSlice'
import product from "./Productsslice";

const store=configureStore({
    reducer:{
        cart:cart,
        order:order,
        product:product
    }
})

export default store