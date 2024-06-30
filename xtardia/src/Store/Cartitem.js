import {createSlice} from "@reduxjs/toolkit"

const initialState={
 cart:[],
 
}
const Cartitemslice=createSlice({

  name:"cartitem",
  initialState,
  reducers:{
     additem:(state,action)=>{

        
     state.cart.push(action.payload)

     },
    Increment:(state,action)=>{
        

        
        
    
           
        
    },
    Decrement:(state)=>{
     
    }
  }
})
export const cartitemactions=Cartitemslice.actions
export default Cartitemslice
