import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("data/getData", async(arg, {rejectWithValue})=>{
    
  console.log("arg:", arg)
    try {  
        const result = await axios.get(`http://localhost:5000/${arg}`)
        // console.log(result)
        return result
    } catch (error) {
        rejectWithValue(error.response.data)
        
    }
})


const initialState = {
    loading: false,
    data: [],
    message: "",
    isSuccess: false
}

const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{},
    extraReducers: {
        [getData.pending]: (state, {payload})=>{
            state.loading=true
        },
        [getData.fulfilled]: (state, {payload})=>{
            state.loading=false
            state.data=payload
            state.isSuccess=true

        },
        [getData.rejected]: (state, {payload})=>{
            state.loading=false
            state.message="failed"
            state.isSuccess=false

        }

    }
})

export default dataSlice