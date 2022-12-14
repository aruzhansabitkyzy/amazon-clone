import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductItem} from '../interface/ProductItem';


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
               state.basketTotalQuantity += 1
        },
        removeFromBasket(state, action:PayloadAction<ProductItem>) {
             state.basketItems.splice(state.basketItems.findIndex(item => item.id = action.payload.id), 1)
             state.basketTotalAmount -= +action.payload.priceFrom
             state.basketTotalQuantity -= 1
        }
    }

})


export const actions = basketSlice.actions;
export default basketSlice.reducer;
