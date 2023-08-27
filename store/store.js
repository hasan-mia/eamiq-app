import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slice/AuthSlice.js';
import CricketSlice from './slice/CricketSlice.js';

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    cricket: CricketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['cricket/getLiveCricket/fulfilled'],
      },
    }),
});
export default store;
