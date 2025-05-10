import { configureStore } from "@reduxjs/toolkit";
import cart from './CartSlice'
import order from './OrderSlice'


const store=configureStore({
    reducer:{
        cart:cart,
        order:order
    }
})

export default store