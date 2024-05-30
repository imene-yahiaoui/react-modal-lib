import React, { useEffect, useRef } from "react";
import "./style.css";

/**
 * Modal component to display a dialog box.
 * @param {Object} props - The props object.
 * @param {Function} props.closeModalFunction - Function to close the modal.
 * @param {string|null} props.message - The message content of the modal.
 * @param {string|null} props.confirmBtn - Label for the close button.
 * @param {string|null} props.xBtn - Label for the close 'x' button.
 * @param {Function} props.handleConfirmClick - Function to close the modal when a custom close button is clicked.
 * @return {JSX.Element} Modal component.
 */
interface ModalProps {
  closeModalFunction: () => void;
  message: string | null;
  confirmBtn: string | null;
  xBtn: string | null;
  handleConfirmClick: () => void;
}
const Modal: React.FC<ModalProps> = ({
  closeModalFunction,
  message,
  confirmBtn,
  xBtn,
  handleConfirmClick,
}) => {
  // Reference to the modal container
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * Handles keyboard events to close the modal.
   * @param {KeyboardEvent} e - The keyboard event object.
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        closeModalFunction();
      } else if (e.key === "Enter") {
        handleConfirmClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Focus the modal when mounted
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModalFunction, handleConfirmClick]);

  /**
   * Prevents event propagation when the modal container is clicked.
   * @param {React.MouseEvent} e - The mouse event object.
   */
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="modal-overlay"
      onClick={closeModalFunction}
      tabIndex={-1} // Allow focusing
    >
      <div
        className="modal-container"
        onClick={stopPropagation}
        ref={modalRef}
        tabIndex={0} // Allow focusing
      >
        <button className="close-x-btn" onClick={closeModalFunction}>
          {xBtn}
        </button>
        <h2>{message}</h2>
        <button className="close-btn" onClick={handleConfirmClick}>
          {confirmBtn}
        </button>
      </div>
    </div>
  );
};

export default Modal;
