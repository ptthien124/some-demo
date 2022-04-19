import React, { useCallback } from "react";
import "../../styles/modal/Modal.css";

function Modal() {
  const handleClose = useCallback(() => {
    const modal = document.querySelector(".modal__outer");

    modal.classList.toggle("active");
  }, []);

  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__btn" onClick={handleClose}>
          Open Modal
        </button>

        <div className="modal__outer" onClick={handleClose}>
          <div
            className="modal__inner"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal__header">
              Welcome
              <div className="modal__closeBtn" onClick={handleClose}>
                &times;
              </div>
            </div>
            <div className="modal__body">
              <h2>Modal</h2>
              <p>This is Modal's body</p>
            </div>
            <div className="modal__footer">
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
