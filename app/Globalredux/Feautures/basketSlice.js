'use client'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
export const basketSlice = createSlice({
    name:'basket',
    initialState : {
        items:[]
    },
    reducers: {
        addToBasket: (state, action)=>{
            state.items= [...state.items, action.payload]
        },   
        removeFromBasket: (state, action )=>{
            const index = state.items.findIndex(basketItem => basketItem.id===action.payload.id)
            let newBasket =[...state.items];//make a copy of the current basket
            if(index >=0){
                newBasket.splice(index, 1)//remove that element
            }else {
                console.warn(
                    `Cannot remove product (id:${action.payload.id}) as it is not in the basket`
                )
            }

            state.items= newBasket; //replace the array 'state.items' with the new basket array
        }
    }

})

export const {addToBasket, removeFromBasket}= basketSlice.actions
export const selectItems = (state)=>state.basket.items;
export const selectTotal = (state)=> state.basket.items.reduce((total, item)=> total + item.price, 0)
export default basketSlice.reducer

//we did not use the filter method because it gets rids of every single item with the specified id
//and you might have two items with the same id and you do not necessarily have to delete the two
