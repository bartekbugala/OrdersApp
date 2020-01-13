import React from 'react';
import './Modal.scss';

const Modal = ({ children, handleModal }) => (
  <div className="modal__overlay">
    <div className="modal__modal-window">{children}</div>
  </div>
);

export default Modal;
