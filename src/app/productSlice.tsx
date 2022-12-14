import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductItem} from '../interface/ProductItem';


const initialState = {
    item: {} as ProductItem,
    stage: "main"
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers : {
        changeState(state, action:PayloadAction<ProductItem>) {
           
        }
    }
})
export const actions =  productSlice.actions;
export default productSlice.reducer;