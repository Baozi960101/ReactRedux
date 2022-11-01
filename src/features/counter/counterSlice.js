import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        intcrement:(state)=>{
            state.value = state.value+1
        },
        decment:(state)=>{
            state.value -=1
        },
        incrementByAmout:(state,action)=>{
            console.log(action);
            state.value += action.payload
        }
    }
})

export const { intcrement,decment,incrementByAmout } = counterSlice.actions

export default counterSlice.reducer