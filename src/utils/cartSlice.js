import { createSlice,current} from "@reduxjs/toolkit";
// createSlie has a config within{}
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //it will add payload here and send it with action
        addItem: (state,action)=>{
            //mutating our state
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer




//additem is a action which will be dispatch and call reducer function-- sort of api to update the data
//the function after additem like :()=>{} is reducer function which will modify the slice of the store
// it will access state and action 