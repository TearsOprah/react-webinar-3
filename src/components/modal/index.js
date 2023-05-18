import React from "react";
import './style.css';
import PropTypes from 'prop-types';

function Modal({ onClose, children }){

  const handleBackdropClick = (event) => {
    // закрыть попап только при клике на фоновую область
    if (event.target.classList.contains('Modal')) {
      onClose();
    }
  };

  return (
    <div className='Modal' onClick={handleBackdropClick}>
      {children}
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  totalPrice: PropTypes.number
};

Modal.defaultProps = {
  onClose: () => {},
  cartItems: [],
  setCartItems: () => {},
  totalPrice: 0
};

export default Modal;
