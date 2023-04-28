import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductItem, UserState} from '../interface/ProductItem';



const initialState = {
   basket : {
    basketItems: [] as ProductItem[],
    basketTotalQuantity: 0,
    basketTotalAmount: 0
   }
}

const basketSlice = createSlice({
    name : "basket",
    initialState,
    reducers : {
        addToBasket(state, action:PayloadAction<ProductItem>) {
               state.basket.basketItems.push(action.payload)
               state.basket.basketTotalAmount += +action.payload.priceFrom
               state.basket.basketTotalQuantity += 1
        },
        removeFromBasket(state, action:PayloadAction<ProductItem>) {
             state.basket.basketItems.splice(state.basket.basketItems.findIndex(item => item.id = action.payload.id), 1)
             state.basket.basketTotalQuantity -= 1
             if(state.basket.basketTotalQuantity == 0) {
                state.basket.basketTotalAmount = 0
             }
             else {
                state.basket.basketTotalAmount -= +action.payload.priceFrom
             }
             
        } 
    }

})


export const action = basketSlice.actions
export default basketSlice.reducer