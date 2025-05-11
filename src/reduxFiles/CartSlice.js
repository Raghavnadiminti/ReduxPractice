import { createSlice } from "@reduxjs/toolkit";




function addProduct(state,action){

        const exists = state.find(item => item.product.productId === action.payload.product.productId);
        if(!exists){
         state.push(action.payload)
        }
         console.log(JSON.parse(JSON.stringify(state)));
}
function removeProduct(state,action){

         console.log(action.payload)
         const id=action.payload.id 
         const updated_cart= state.filter(product=>product.product.productId!==id) 
         return updated_cart 

}

function change_product_quantity(state,action){
    const id=action.payload.id 
    const value=action.payload.value 
  const item = state.find(i => i.product.productId === id);
  if (item) {
    item.value = Math.max(1, item.value + value);
  }
    console.log(JSON.parse(JSON.stringify(state)));
}

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
       addP:addProduct,
       removeP:removeProduct,
       change_product_value:change_product_quantity
    }
})


export const {addP,removeP,change_product_value}=cartSlice.actions
export default cartSlice.reducer 