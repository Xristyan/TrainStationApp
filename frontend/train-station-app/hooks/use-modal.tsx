import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  openModal as openModalSlice,
  closeModal as closeModalSlice,
  toggleModal as toggleModalSlice
} from '@/redux/modal/modalSlice';
import { AppDispatch } from '@/redux/store';

export default function useModal() {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modalReducer.modalOpen);

  function openModal() {
    dispatch(openModalSlice());
  }

  function closeModal() {
    dispatch(closeModalSlice());
  }

  function toggleModal() {
    dispatch(toggleModalSlice());
  }

  return { isModalOpen, openModal, closeModal, toggleModal };
}
