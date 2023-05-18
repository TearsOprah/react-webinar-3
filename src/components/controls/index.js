import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {useEffect, useState} from "react";
import {plural} from "../../utils";

function Controls({ onOpenCart, cartItems, totalPrice  }){

  return (
    <div className='Controls'>
      <div className='Controls-info'>
        <p>{`В корзине: `}</p>
        <p className='bold-text'>{`${cartItems.length} ${plural(cartItems.length, {one: 'товар', few: 'товара', many: 'товаров'})} / ${totalPrice} ₽`}</p>
      </div>
      <button className='Controls-button' onClick={() => onOpenCart()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onOpenCart: PropTypes.func
};

Controls.defaultProps = {
  onOpenCart: () => {}
}

export default React.memo(Controls);
