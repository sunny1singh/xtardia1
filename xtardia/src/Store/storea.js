import { configureStore } from "@reduxjs/toolkit";
import Cartitemslice from "./Cartitem";
import Cart from "./Cart";

const Xtardiastore=configureStore({reducer:
 {
    cartitem:Cartitemslice.reducer,
    cart:Cart.reducer
}
})
export default Xtardiastore

