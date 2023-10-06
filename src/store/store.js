import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from "./tokenSlice";

import cartReducer from "./cartSlice"


const store= configureStore({
    
    reducer:{
        
        tok:tokenReducer,
        cart:cartReducer,
        
       
    },
})


export default store;


