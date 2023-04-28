import {UserState} from '../interface/ProductItem'
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialUserState:UserState = {
    isAuthenticated: false,
    currentUser: ''
}


const initialState = {
    user: initialUserState
 }

 const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticatedUser(state, action: PayloadAction<UserState['currentUser']>) {
            return {
              ...state,
              user: {
                isAuthenticated: true,
                currentUser: action.payload
              }
            }
          },
        logoutUser(state) {
            return {
              ...state,
              user: initialUserState
            }   
          }
    }
})
export const action = userSlice.actions
export default userSlice.reducer
