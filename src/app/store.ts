import { Store } from '@mui/icons-material';
import {configureStore} from '@reduxjs/toolkit';
import basketSlice from './reducer';
const store=  configureStore({
    reducer: {
        basket: basketSlice,
        // user: userSlice
    }
});
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch