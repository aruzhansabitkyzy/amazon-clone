import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductItem} from '../interface/ProductItem';


interface UserState{
    isAuthenticated: boolean,
    currentUser: string
    //    uid:string,
    //    email: string
    //    emailVerified: boolean,
    //    isAnonymous : boolean,
    //    providerData: [],
    //    stsTokenManager: {},
    //    accessToken: string,
    //    expirationTime: number,
    //    createdAt: string,
    //    lastLoginAt: string,
    //    apiKey: string ,
    //    appName: string
    // } | null
} 

const initialUserState:UserState = {
    isAuthenticated: false,
    currentUser: ''
}

const initialState = {
   basket : {
    basketItems: [] as ProductItem[],
    basketTotalQuantity: 0,
    basketTotalAmount: 0
   },

   user: initialUserState
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
             state.basket.basketTotalAmount -= +action.payload.priceFrom
             state.basket.basketTotalQuantity -= 1
        } 
    }

})
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         authenticatedUser(state, action: PayloadAction<UserState['currentUser']>) {
            state.user.isAuthenticated = true
            state.user.currentUser = action.payload
         },
         logoutUser(state) {
            state.user.isAuthenticated = false
            state.user.currentUser = '' 
         }
    }
})


export const actions = {
    ...basketSlice.actions,
    ...userSlice.actions
};
export default basketSlice.reducer;



