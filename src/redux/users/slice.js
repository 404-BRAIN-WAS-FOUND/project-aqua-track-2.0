import { createSlice } from '@reduxjs/toolkit';
import { initialStateConstant } from './constants.js';
import { getUsers } from './operation.js';

const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateConstant,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.count = action.payload.count;
        state.avatars = action.payload.avatars;
      })

      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
