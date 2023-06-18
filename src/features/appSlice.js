import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
};
const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [...state.expenses, action.payload];
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
  },
});
export const { addExpense, deleteExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
