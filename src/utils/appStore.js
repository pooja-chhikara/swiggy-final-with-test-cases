import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"


// this reducer is responsible for updation/modify app store or slice and it is combination or small store
const appStore=configureStore({
    reducer:{
        cart:cartReducer,
       
    }
})

export default appStore