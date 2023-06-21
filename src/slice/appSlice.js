import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};
const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
    editNote: (state, action) => {
      state.notes = state.notes.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.newNote;
        }
        return item;
      });
      state.notes = [...state.notes];
    },
  },
});
export const { addNote, deleteNote, editNote } = noteSlice.actions;
export default noteSlice.reducer;
