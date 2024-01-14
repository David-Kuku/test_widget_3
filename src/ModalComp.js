import React, { useState } from 'react';
import './App.css'; // Import your modal styles

// interface IProps {
//     children: JSX.Element
//     modalIsOpen: boolean
//     setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
// }
const ModalComp = ({children, modalIsOpen, setModalIsOpen}) => {

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* <h2>Modal Content</h2>
            <p>This is the modal content.</p> */}

            {children}
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComp;
