import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoaging: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(contactsOperations.getContacts.pending, (state, _) => {
        state.isLoaging = true;
      })
      .addCase(
        contactsOperations.getContacts.fulfilled,
        (state, { payload }) => {
          state.items = payload;
          state.isLoaging = false;
        }
      )
      .addCase(
        contactsOperations.getContacts.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.isLoaging = false;
        }
      )
      .addCase(contactsOperations.addContact.pending, (state, _) => {
        state.isLoaging = true;
      })
      .addCase(
        contactsOperations.addContact.fulfilled,
        (state, { payload }) => {
          state.items.unshift(payload);
          state.isLoaging = false;
        }
      )
      .addCase(contactsOperations.addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoaging = false;
      })
      .addCase(contactsOperations.deleteContact.pending, (state, _) => {
        state.isLoaging = true;
      })
      .addCase(
        contactsOperations.deleteContact.fulfilled,
        (state, { payload }) => {
          state.items = state.items.filter(({ id }) => id !== payload);
          state.isLoaging = false;
        }
      )
      .addCase(
        contactsOperations.deleteContact.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.isLoaging = false;
        }
      );
  },
});

export const { changeFilter } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
