import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getClassData = createAsyncThunk("data/getClassData", async(arg, {rejectWithValue})=>{
    
  console.log("arg:", arg)
    try {  
        const result = await axios.get(`http://localhost:5000/manageclass`)
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

const classDataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{},
    extraReducers: {
        [getClassData.pending]: (state, {payload})=>{
            state.loading=true
        },
        [getClassData.fulfilled]: (state, {payload})=>{
            state.loading=false
            state.data=payload
            state.isSuccess=true

        },
        [getClassData.rejected]: (state, {payload})=>{
            state.loading=false
            state.message="failed"
            state.isSuccess=false

        }

    }
})

export default classDataSlice