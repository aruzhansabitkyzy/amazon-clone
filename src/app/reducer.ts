import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductItem} from '../interface/ProductItem';
import { current } from '@reduxjs/toolkit'


const initialState = {
   basketItems: [] as ProductItem[],
   basketTotalQuantity: 0,
   basketTotalAmount: 0
}


const basketSlice = createSlice({
    name : "basket",
    initialState,
    reducers : {
        addToBasket(state, action:PayloadAction<ProductItem>) {
               state.basketItems.push(action.payload)
               state.basketTotalAmount += +action.payload.priceFrom
               state.basketTotalQuantity++
        }
    }

})

export const {addToBasket} = basketSlice.actions;
export default basketSlice.reducer;
