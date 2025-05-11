import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";
export const fetchProducts= createAsyncThunk('/products',
    async ()=>{
        const res=await axios.get('https://backend-15vx.onrender.com/product/products') 
        console.log(res.data.products)
        return res.data.products
    }
)

const productslice= createSlice({
    name:'product',
    initialState:[] ,
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            console.log(action.payload)
            console.log(JSON.parse(JSON.stringify(state)));
            state=action.payload 
            return state
            
        })
        .addCase(fetchProducts.pending,(state,action)=>{})
    }
})

export default productslice.reducer