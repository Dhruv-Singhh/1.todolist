import {configureStore} from "@reduxjs/toolkit";
import todoReduce from "../reducers/todoSlice"

export const store = configureStore({
    reducer: todoReduce
})