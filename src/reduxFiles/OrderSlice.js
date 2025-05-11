import { createSlice } from "@reduxjs/toolkit";

function cancelOrder(state,action){
       console.log(action.payload.id)
         const updated_state=state.filter(item=>item.product.productId!==action.payload.id)
         return updated_state
}

function addOrder(state,action){
     
       state.push(action.payload)
}





const OrderSlice=createSlice({
    name:'orders',
    initialState:[],
    reducers:{
        cancel:cancelOrder,
        add:addOrder
    }

})

export const {cancel,add}=OrderSlice.actions 
export default OrderSlice.reducer