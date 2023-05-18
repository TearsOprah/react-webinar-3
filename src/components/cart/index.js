import React from "react";
import './style.css';
import PropTypes from 'prop-types';

function Cart({ onClose, cartItems, setCartItems, totalPrice }){

  const handleDelete = (code) => {
    const updatedCartItems = cartItems.filter(item => item.code !== code);
    setCartItems(updatedCartItems);
  }

  const handleBackdropClick = (event) => {
    // закрыть попап только при клике на фоновую область
    if (event.target.classList.contains('Cart')) {
      onClose();
    }
  };

  return (
    <div className='Cart' onClick={handleBackdropClick}>
      <div className='Cart-content'>

        <div className='Cart-header'>
          <h2 className='Cart-title'>Корзина</h2>
          <button className='Cart-button' onClick={() => onClose()}>Закрыть</button>
        </div>

        {cartItems.length !== 0 ?
          <div className='List'>{
            cartItems.map(item =>
              <div key={item.code} className='List-item'>

                <div className={'Item'}>
                  <div className='Item-code'>{item.code}</div>
                  <div className='Item-title'>{item.title}</div>
                  <div className='Item-price'>{`${item.price.toLocaleString()} ₽`}</div>
                  <div className='Item-price'>{`${item.count} шт`}</div>
                  <div className='Item-actions'>
                    <button onClick={() => handleDelete(item.code)}>Удалить</button>
                  </div>
                </div>

              </div>
            )}
          </div>
        :
          <p className={'Cart-message'}>В корзине нет товаров</p>
        }


        <div className='Cart-price'>
          <p>Итого</p>
          {`${totalPrice.toLocaleString()} ₽`}
        </div>

      </div>
    </div>
  )
}

Cart.propTypes = {
  onClose: PropTypes.func,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  totalPrice: PropTypes.number
};

Cart.defaultProps = {
  onClose: () => {},
  cartItems: [],
  setCartItems: () => {},
  totalPrice: 0
};

export default Cart;
