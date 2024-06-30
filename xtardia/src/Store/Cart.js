import {createSlice} from "@reduxjs/toolkit"
const initialState={
value:1
}
const Cart=createSlice({

  name:"cart",
  initialState,
  reducers:{
    Increment:(state,action)=>{
  
     
      state.value++
           
        
    },
    Decrement:(state)=>{
      state.value--
    }
  }
})
export const cartactions=Cart.actions
export default Cart
