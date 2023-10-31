
'use client'
import { configureStore } from "@reduxjs/toolkit"
import BasketReducer from './Feautures/basketSlice'
export const clientStore = configureStore({ 
    reducer: {
        basket :BasketReducer
    } 
})
