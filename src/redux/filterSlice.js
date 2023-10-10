import { createSlice } from '@reduxjs/toolkit';

// const filtersInitialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact: {
      reducer(state, action) {
        return { filter: action.payload };
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
