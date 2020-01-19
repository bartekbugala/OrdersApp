import React from 'react';
import Button from '../../common/Buttons/Button/Button';
import './Modal.scss';

const Modal = ({ children, handleModal }) => (
  <div className="modal__overlay">
    <div className="modal__modal-window">
      <Button
        variant="danger"
        style={{ background: `white`, float: `right` }}
        onClick={handleModal}>
        x
      </Button>
      {children}
    </div>
  </div>
);

export default Modal;
