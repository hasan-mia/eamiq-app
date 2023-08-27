import { createSlice } from '@reduxjs/toolkit';
import cricket from '../api/cricket';

const CricketSlice = createSlice({
    name: 'cricket',
    initialState: {
        isLoading: false,
        isError: false,
        errors: null,
        isLogin: false,
        crickets: null,
    },

    extraReducers: (builder) => {
        // get data
        builder.addCase(cricket.getLiveCricket.pending, (state) => {
          state.isLoading = true;
        });

        builder.addCase(cricket.getLiveCricket.fulfilled, (state, action) => {
          const { data } = action.payload;
          console.log(data);
          state.isLoading = false;
          state.crickets = data;
        });

        builder.addCase(cricket.getLiveCricket.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
        });
    },
});
export default CricketSlice.reducer;