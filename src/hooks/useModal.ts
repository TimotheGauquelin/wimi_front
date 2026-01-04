import { useModalStore } from '@/stores/modalStore';

export const useModal = () => {
  const { openModal, closeModal, isOpen } = useModalStore();

  return {
    openModal,
    closeModal,
    isOpen,
  };
};

