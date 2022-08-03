import { configureStore } from '@reduxjs/toolkit';
import reducer from '@/api/RootReducers';

export default configureStore({
  reducer
});
