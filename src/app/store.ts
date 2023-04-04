import { Store } from '@mui/icons-material';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import basketSlice from './reducer';
import userSlice from './userReducer'

const rootReducer = combineReducers({
    basket: basketSlice,
    user: userSlice
  });
  
  const store = configureStore({
    reducer: rootReducer
  });

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch