 const {createSlice} =require("@reduxjs/toolkit")

const initialState=[];

const cartSlice= createSlice({
    name: 'cart',

    initialState,
        
  

    reducers: {

       addd(state,action){
        state.push(action.payload)
       },

       rem(state,action){
         return state.filter(items=>items._id!==action.payload)
     }

      

    }
 })

export const {addd,rem} = cartSlice.actions
export default cartSlice.reducer





