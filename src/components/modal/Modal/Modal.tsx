import { useModalStore } from '@/stores/modalStore';

const Modal: React.FC = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-transparent"
      onClick={() => {
        closeModal();
      }}
    >
      <div
        className="bg-white rounded-lg shadow-main p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
};

export default Modal;

