import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  modalOpen: boolean;
};

const initialState: InitialState = {
  modalOpen: false
};

export const modal = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    }
  }
});

export const { toggleModal, openModal, closeModal } = modal.actions;
export default modal.reducer;
