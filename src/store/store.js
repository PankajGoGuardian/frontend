import {configureStore} from "@reduxjs/toolkit"
import classDataSlice from "./features/classDataSlice"
import dataSlice from "./features/dataSlice"


const store = configureStore({
    reducer:{
        data: dataSlice.reducer,
        classData:classDataSlice.reducer
    }
})

console.log(store.getState())

export default store