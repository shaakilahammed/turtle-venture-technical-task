import { configureStore } from '@reduxjs/toolkit';
import radioSlice from './radio-slice';

const store = configureStore({
  reducer: { radio: radioSlice.reducer },
});


export default store;
