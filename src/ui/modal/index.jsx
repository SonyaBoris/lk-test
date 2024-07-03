import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

let counterOpenModal = 0;

const useModal = (
  isOpenModal,
  closeModal,
) => {
  const onRequestCloseRef = useRef(closeModal);
  onRequestCloseRef.current = closeModal;

  useEffect(() => {
    const handlerKeyDown = (event) => {
      if (event.key === "Escape") {
        onRequestCloseRef.current(false);
      }
    };
    document.addEventListener("keyup", handlerKeyDown);

    return () => document.removeEventListener("keyup", handlerKeyDown);
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
      return () => {
        if (counterOpenModal === 0) {
          document.body.style.removeProperty("overflow");
        }
      };
    }
  }, [isOpenModal]);

  return {
    onBackgroundClick: ({ target, currentTarget }) => {
      target === currentTarget && onRequestCloseRef.current(false);
    },
  };
};

export const Modal = ({ closeModal, isOpenModal, children }) => {
  const { onBackgroundClick } = useModal(isOpenModal, closeModal)

  return createPortal(
    <div onClick={onBackgroundClick}
      className="fixed flex bg-modal-bg h-screen w-screen top-0 left-0">
      {children}
    </div>,
    document.querySelector("#modalRoot")
  );
}