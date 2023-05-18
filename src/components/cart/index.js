import React from "react";
import './style.css';
import PropTypes from 'prop-types';
import Item from "../item";

function Cart({ onClose, cartItems, setCartItems, totalPrice }){

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

                <Item item={item}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      showDeleteButton={true}
                      showCount={true} />

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
